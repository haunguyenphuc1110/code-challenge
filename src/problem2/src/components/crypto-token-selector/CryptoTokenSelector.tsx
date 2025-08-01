import React from 'react';

import TokenIcon from '@/components/token-icon/TokenIcon';
import type { Token } from '@/models/Crypto';

import './CryptoTokenSelector.css';

type Props = {
  tokens: Token[];
  setShowTokenSelector: (showTokenSelector: 'from' | 'to' | null) => void;
  handleTokenSelect: (token: Token) => void;
};

const CryptoTokenSelector: React.FC<Props> = ({
  tokens,
  setShowTokenSelector,
  handleTokenSelect,
}) => {
  return (
    <div
      className='crypto-token-selector'
      onClick={() => setShowTokenSelector(null)}
    >
      <div
        className='crypto-token-selector__modal'
        onClick={e => e.stopPropagation()}
      >
        <h3>Select Token</h3>
        <div className='crypto-token-selector__list'>
          {tokens.map(token => (
            <button
              key={token.symbol}
              className='crypto-token-selector__option'
              onClick={() => handleTokenSelect(token)}
            >
              <TokenIcon
                token={token}
                size={48}
                className='crypto-token-selector__option-icon'
              />

              <div className='crypto-token-selector__details'>
                <div className='crypto-token-selector__main-info'>
                  <div className='crypto-token-selector__identity'>
                    <span className='crypto-token-selector__symbol'>
                      {token.symbol}
                    </span>
                    <span className='crypto-token-selector__name'>
                      {token.name}
                    </span>
                  </div>

                  {!!token.change24h && (
                    <span
                      className={`crypto-token-selector__change ${
                        token.change24h >= 0
                          ? 'crypto-token-selector__change--positive'
                          : 'crypto-token-selector__change--negative'
                      }`}
                    >
                      {token.change24h >= 0 ? '+' : ''}
                      {token.change24h.toFixed(2)}%
                    </span>
                  )}
                </div>

                <div className='crypto-token-selector__financial-info'>
                  <div className='crypto-token-selector__balance'>
                    <span className='crypto-token-selector__balance-amount'>
                      {token.balance.toFixed(4)}
                    </span>
                    <span className='crypto-token-selector__balance-symbol'>
                      {token.symbol}
                    </span>
                  </div>

                  <div className='crypto-token-selector__price-info'>
                    <span className='crypto-token-selector__price'>
                      $
                      {token.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: token.price >= 1 ? 2 : 6,
                      })}
                    </span>

                    {token.marketCap && (
                      <span className='crypto-token-selector__market-cap'>
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
