import React from "react";

import type { Token } from "@/models/Crypto";
import { CryptoTokenInputType } from "@/constants/CryptoEnum";
import TokenIcon from "@/components/token-icon/TokenIcon";
import "./CryptoTokenInput.css";

type Props = {
  token: Token;
  field: CryptoTokenInputType;
  amount: string;
  disabled?: boolean;
  handleAmountChange: (value: string, field: CryptoTokenInputType) => void;
  handleShowTokenSelector: (value: CryptoTokenInputType) => void;
};

const CryptoTokenInput: React.FC<Props> = ({
  token,
  amount,
  field,
  disabled,
  handleAmountChange,
  handleShowTokenSelector,
}) => {
  return (
    <div className="token-input-section">
      <div className="token-input-header">
        <span>{field === CryptoTokenInputType.FROM ? "From" : "To"}</span>
        <span className="balance">
          Balance: {token.balance.toFixed(4)} {token.symbol}
        </span>
      </div>
      <div className="token-input">
        <button
          className="token-selector"
          onClick={() => handleShowTokenSelector(field)}
        >
          <TokenIcon token={token} size={32} className="token-selector-icon" />
          <span className="token-info">
            <span className="token-symbol">{token.symbol}</span>
            <span className="token-name">{token.name}</span>
          </span>
        </button>
        <input
          type="text"
          placeholder="0.0"
          value={amount}
          disabled={disabled}
          onChange={(e) => handleAmountChange(e.target.value, field)}
          className="amount-input"
        />
      </div>
      {field === CryptoTokenInputType.FROM && (
        <button
          className="max-button"
          onClick={() => handleAmountChange(token.balance.toString(), field)}
        >
          MAX
        </button>
      )}
    </div>
  );
};

export default CryptoTokenInput;
