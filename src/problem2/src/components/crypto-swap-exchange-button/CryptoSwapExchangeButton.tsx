import React from "react";
import "./CryptoSwapExchangeButton.css";
import SwapVerticalIcon from "@/assets/swap-vertical.svg?react";

type Props = {
  handleTokenSwap: () => void;
};

const CryptoSwapExchangeButton: React.FC<Props> = ({ handleTokenSwap }) => {
  return (
    <button className="swap-icon-button" onClick={handleTokenSwap}>
      <SwapVerticalIcon className="swap-icon" />
    </button>
  );
};

export default CryptoSwapExchangeButton;
