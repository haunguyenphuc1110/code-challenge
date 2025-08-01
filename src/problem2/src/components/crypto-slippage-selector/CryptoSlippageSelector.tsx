import React from "react";

import "./CryptoSlippageSelector.css";

type Props = {
  slippage: number;
  setSlippage: (slippage: number) => void;
};

const CryptoSlippageSelector: React.FC<Props> = ({ slippage, setSlippage }) => {
  return (
    <div className="slippage-selector">
      <span>Slippage: </span>
      <select
        value={slippage}
        onChange={(e) => setSlippage(Number(e.target.value))}
      >
        <option value={0.1}>0.1%</option>
        <option value={0.5}>0.5%</option>
        <option value={1}>1.0%</option>
        <option value={3}>3.0%</option>
      </select>
    </div>
  );
};

export default CryptoSlippageSelector;
