import React from 'react';

import SwapVerticalIcon from '@/assets/swap-vertical.svg?react';

import './CryptoSwapExchangeButton.css';

type Props = {
  handleTokenSwap: () => void;
};

const CryptoSwapExchangeButton: React.FC<Props> = ({ handleTokenSwap }) => {
  return (
    <button className='swap-icon-button' onClick={handleTokenSwap}>
      <SwapVerticalIcon className='swap-icon' />
    </button>
  );
};

export default CryptoSwapExchangeButton;
