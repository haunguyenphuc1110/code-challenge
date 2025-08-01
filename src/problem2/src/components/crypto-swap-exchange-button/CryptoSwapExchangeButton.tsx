import React from 'react';

import SwapVerticalIcon from '@/assets/swap-vertical.svg?react';

import './CryptoSwapExchangeButton.css';

type Props = {
  handleTokenSwap: () => void;
};

const CryptoSwapExchangeButton: React.FC<Props> = ({ handleTokenSwap }) => {
  return (
    <button className='crypto-swap-exchange' onClick={handleTokenSwap}>
      <SwapVerticalIcon className='crypto-swap-exchange__icon' />
    </button>
  );
};

export default CryptoSwapExchangeButton;
