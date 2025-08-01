import React from "react";
import "./CryptoSwapTokenButton.css";

type Props = {
  disabled: boolean;
  isLoading: boolean;
  handleSwap: () => void;
};

const CryptoSwapTokenButton: React.FC<Props> = ({
  disabled,
  isLoading,
  handleSwap,
}) => {
  return (
    <button
      className={`swap-button ${isLoading ? "loading" : ""}`}
      onClick={handleSwap}
      disabled={disabled}
    >
      {isLoading ? (
        <>
          <div className="spinner"></div>
          Processing...
        </>
      ) : (
        "Swap Tokens"
      )}
    </button>
  );
};

export default CryptoSwapTokenButton;
