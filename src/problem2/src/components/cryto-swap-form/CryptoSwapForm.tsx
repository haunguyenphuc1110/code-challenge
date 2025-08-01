import React, { useState, useEffect } from "react";
import "./CryptoSwapForm.css";
import CryptoSlippageSelector from "../crypto-slippage-selector/CryptoSlippageSelector";
import CryptoTokenInput from "../crypto-token-input/CryptoTokenInput";
import { CryptoTokenInputType } from "../../constants/CryptoEnum";
import type { SwapState, Token } from "../../models/Crypto";
import TrendingUpIcon from "../../assets/trending-up.svg?react";
import AlertCircleIcon from "../../assets/alert-circle.svg?react";
import CheckCircleIcon from "../../assets/check-circle.svg?react";

import CryptoSwapExchangeButton from "../crypto-swap-exchange-button/CryptoSwapExchangeButton";
import CryptoSwapTokenButton from "../crypto-swap-token-button/CryptoSwapTokenButton";
import CryptoTokenSelector from "../crypto-token-selector/CryptoTokenSelector";

import { createTokens } from "../../utils/tokenUtils";

const MOCK_TOKENS: Token[] = createTokens();

const CryptoSwapForm: React.FC = () => {
  const [swapState, setSwapState] = useState<SwapState>({
    fromToken: MOCK_TOKENS[0],
    toToken: MOCK_TOKENS[1],
    fromAmount: "",
    toAmount: "",
    slippage: 0.5,
    isLoading: false,
    error: null,
    success: false,
  });

  const [showTokenSelector, setShowTokenSelector] = useState<
    "from" | "to" | null
  >(null);

  // Calculate exchange rate and amounts
  useEffect(() => {
    if (swapState.fromAmount && !isNaN(Number(swapState.fromAmount))) {
      const fromValue =
        Number(swapState.fromAmount) * swapState.fromToken.price;
      const toAmount = fromValue / swapState.toToken.price;
      const slippageAdjusted = toAmount * (1 - swapState.slippage / 100);

      setSwapState((prev) => ({
        ...prev,
        toAmount: slippageAdjusted.toFixed(6),
      }));
    } else if (swapState.fromAmount === "") {
      setSwapState((prev) => ({
        ...prev,
        toAmount: "",
      }));
    }
  }, [
    swapState.fromAmount,
    swapState.fromToken,
    swapState.toToken,
    swapState.slippage,
  ]);

  const handleAmountChange = (value: string, field: "from" | "to") => {
    // Input validation
    if (value && !/^\d*\.?\d*$/.test(value)) return;

    setSwapState((prev) => ({
      ...prev,
      [field === "from" ? "fromAmount" : "toAmount"]: value,
      error: null,
    }));
  };

  const handleTokenSwap = () => {
    setSwapState((prev) => ({
      ...prev,
      fromToken: prev.toToken,
      toToken: prev.fromToken,
      fromAmount: prev.toAmount,
      toAmount: prev.fromAmount,
      error: null,
    }));
  };

  const handleTokenSelect = (token: Token) => {
    if (showTokenSelector === "from") {
      setSwapState((prev) => ({ ...prev, fromToken: token }));
    } else if (showTokenSelector === "to") {
      setSwapState((prev) => ({ ...prev, toToken: token }));
    }
    setShowTokenSelector(null);
  };

  const validateSwap = (): string | null => {
    if (!swapState.fromAmount || Number(swapState.fromAmount) <= 0) {
      return "Please enter a valid amount";
    }
    if (Number(swapState.fromAmount) > swapState.fromToken.balance) {
      return `Insufficient ${swapState.fromToken.symbol} balance`;
    }
    if (swapState.fromToken.symbol === swapState.toToken.symbol) {
      return "Cannot swap the same token";
    }
    return null;
  };

  const handleSwap = async () => {
    const error = validateSwap();
    if (error) {
      setSwapState((prev) => ({ ...prev, error }));
      return;
    }

    setSwapState((prev) => ({ ...prev, isLoading: true, error: null }));

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSwapState((prev) => ({
      ...prev,
      isLoading: false,
      success: true,
      fromAmount: "",
      toAmount: "",
    }));

    // Reset success state after 3 seconds
    setTimeout(() => {
      setSwapState((prev) => ({ ...prev, success: false }));
    }, 3000);
  };

  const exchangeRate = swapState.fromToken.price / swapState.toToken.price;

  return (
    <div className="crypto-swap-container">
      <div className="swap-form">
        <div className="swap-header">
          <h2>Swap Tokens</h2>

          <CryptoSlippageSelector
            slippage={swapState.slippage}
            setSlippage={(slippage) =>
              setSwapState((prev) => ({ ...prev, slippage }))
            }
          />
        </div>

        {/* From Token Input */}
        <CryptoTokenInput
          token={swapState.fromToken}
          amount={swapState.fromAmount}
          field={CryptoTokenInputType.FROM}
          disabled={swapState.isLoading}
          handleAmountChange={handleAmountChange}
          handleShowTokenSelector={setShowTokenSelector}
        />

        {/* Swap Exchange Button */}
        <CryptoSwapExchangeButton handleTokenSwap={handleTokenSwap} />

        {/* To Token Input */}
        <CryptoTokenInput
          token={swapState.toToken}
          amount={swapState.toAmount}
          field={CryptoTokenInputType.TO}
          disabled={swapState.isLoading}
          handleAmountChange={handleAmountChange}
          handleShowTokenSelector={setShowTokenSelector}
        />

        {/* Exchange Rate Info */}
        {swapState.fromAmount && (
          <div className="exchange-info">
            <TrendingUpIcon className="trending-up-icon" />
            <span>
              1 {swapState.fromToken.symbol} = {exchangeRate.toFixed(6)}{" "}
              {swapState.toToken.symbol}
            </span>
          </div>
        )}

        {/* Error Message */}
        {swapState.error && (
          <div className="error-message">
            <AlertCircleIcon className="alert-icon" />
            <span>{swapState.error}</span>
          </div>
        )}

        {/* Success Message */}
        {swapState.success && (
          <div className="success-message">
            <CheckCircleIcon className="success-icon" />
            <span>Swap completed successfully!</span>
          </div>
        )}

        {/* Swap Button */}
        <CryptoSwapTokenButton
          disabled={swapState.isLoading || !swapState.fromAmount}
          isLoading={swapState.isLoading}
          handleSwap={handleSwap}
        />
      </div>

      {/* Token Selector Modal */}
      {showTokenSelector && (
        <CryptoTokenSelector
          tokens={MOCK_TOKENS}
          setShowTokenSelector={setShowTokenSelector}
          handleTokenSelect={handleTokenSelect}
        />
      )}
    </div>
  );
};

export default CryptoSwapForm;
