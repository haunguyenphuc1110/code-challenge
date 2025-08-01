// REFACTORED CODE - FIXES ALL ISSUES
import React, { useMemo, useCallback } from "react";

// Enhanced type definitions
type Blockchain = "Osmosis" | "Ethereum" | "Arbitrum" | "Zilliqa" | "Neo";

interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: Blockchain; // Added missing property
}

interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
  usdValue: number; // Pre-computed for efficiency
}

interface Props extends BoxProps {
  className?: string; // Made optional
}

// Move outside component to prevent recreation
const BLOCKCHAIN_PRIORITY: Record<Blockchain, number> = {
  Osmosis: 100,
  Ethereum: 50,
  Arbitrum: 30,
  Zilliqa: 20,
  Neo: 20,
} as const;

const getPriority = (blockchain: Blockchain): number => {
  return BLOCKCHAIN_PRIORITY[blockchain] ?? -99;
};

const WalletPage: React.FC<Props> = ({ children, className, ...rest }) => {
  const balances = useWalletBalances();
  const prices = usePrices();

  // Fixed logic and optimized computation
  const formattedBalances = useMemo((): FormattedWalletBalance[] => {
    return balances
      .filter((balance: WalletBalance) => {
        // Fixed: filter OUT negative/zero balances and low priority blockchains
        const priority = getPriority(balance.blockchain);
        return priority > -99 && balance.amount > 0;
      })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        const leftPriority = getPriority(lhs.blockchain);
        const rightPriority = getPriority(rhs.blockchain);

        if (leftPriority !== rightPriority) {
          return rightPriority - leftPriority; // Higher priority first
        }
        // Fallback: sort by amount descending for same priority
        return rhs.amount - lhs.amount;
      })
      .map(
        (balance: WalletBalance): FormattedWalletBalance => ({
          ...balance,
          formatted: balance.amount.toFixed(2), // Better formatting with 2 decimals
          usdValue: (prices[balance.currency] || 0) * balance.amount, // Pre-compute USD value
        })
      );
  }, [balances, prices]); // Correct dependencies

  // Optimized row rendering with proper keys
  const rows = useMemo(() => {
    return formattedBalances.map((balance: FormattedWalletBalance) => (
      <WalletRow
        key={`${balance.currency}-${balance.blockchain}`} // Proper unique key
        className={className}
        amount={balance.amount}
        usdValue={balance.usdValue}
        formattedAmount={balance.formatted}
        currency={balance.currency}
        blockchain={balance.blockchain}
      />
    ));
  }, [formattedBalances, className]);

  return <div {...rest}>{rows}</div>;
};

export default React.memo(WalletPage); // Prevent unnecessary re-renders
