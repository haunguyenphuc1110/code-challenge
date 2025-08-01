import React from "react";
import "./CryptoTokenSelector.css";
import type { Token } from "@/models/Crypto";
import TokenIcon from "@/components/token-icon/TokenIcon";

type Props = {
  tokens: Token[];
  setShowTokenSelector: (showTokenSelector: "from" | "to" | null) => void;
  handleTokenSelect: (token: Token) => void;
};

const CryptoTokenSelector: React.FC<Props> = ({
  tokens,
  setShowTokenSelector,
  handleTokenSelect,
}) => {
  return (
    <div
      className="token-selector-overlay"
      onClick={() => setShowTokenSelector(null)}
    >
      <div
        className="token-selector-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Select Token</h3>
        <div className="token-list">
          {tokens.map((token) => (
            <button
              key={token.symbol}
              className="token-option"
              onClick={() => handleTokenSelect(token)}
            >
              <TokenIcon
                token={token}
                size={48}
                className="token-option-icon"
              />
              <div className="token-details">
                <div className="token-main-info">
                  <div className="token-identity">
                    <span className="token-symbol">{token.symbol}</span>
                    <span className="token-name">{token.name}</span>
                  </div>
                  {!!token.change24h && (
                    <span
                      className={`token-change ${
                        token.change24h >= 0 ? "positive" : "negative"
                      }`}
                    >
                      {token.change24h >= 0 ? "+" : ""}
                      {token.change24h.toFixed(2)}%
                    </span>
                  )}
                </div>
                <div className="token-financial-info">
                  <div className="token-balance">
                    <span className="balance-amount">
                      {token.balance.toFixed(4)}
                    </span>
                    <span className="balance-symbol">{token.symbol}</span>
                  </div>
                  <div className="token-price-info">
                    <span className="token-price">
                      $
                      {token.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: token.price >= 1 ? 2 : 6,
                      })}
                    </span>
                    {token.marketCap && (
                      <span className="token-market-cap">
                        MCap: ${(token.marketCap / 1e9).toFixed(1)}B
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoTokenSelector;
