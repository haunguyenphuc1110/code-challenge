import React from 'react';

import './CryptoSwapTokenButton.css';

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
      className={`crypto-swap-button ${
        isLoading ? 'crypto-swap-button--loading' : ''
      }`}
      onClick={handleSwap}
      disabled={disabled}
    >
      {isLoading ? (
        <>
          <div className='crypto-swap-button__spinner'></div>
          Processing...
        </>
      ) : (
        'Swap Tokens'
      )}
    </button>
  );
};

export default CryptoSwapTokenButton;
