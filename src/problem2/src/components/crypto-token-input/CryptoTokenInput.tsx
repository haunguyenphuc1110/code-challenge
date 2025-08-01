import React from 'react';

import TokenIcon from '@/components/token-icon/TokenIcon';
import { CryptoTokenInputType } from '@/constants/CryptoEnum';
import type { Token } from '@/models/Crypto';

import './CryptoTokenInput.css';

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
    <div className='crypto-token-input'>
      <div className='crypto-token-input__header'>
        <span>{field === CryptoTokenInputType.FROM ? 'From' : 'To'}</span>
        <span className='crypto-token-input__balance'>
          Balance: {token.balance.toFixed(4)} {token.symbol}
        </span>
      </div>
      <div className='crypto-token-input__input-container'>
        <button
          className='crypto-token-input__token-selector'
          onClick={() => handleShowTokenSelector(field)}
        >
          <TokenIcon
            token={token}
            size={32}
            className='crypto-token-input__token-icon'
          />
          <span className='crypto-token-input__token-info'>
            <span className='crypto-token-input__token-symbol'>
              {token.symbol}
            </span>
            <span className='crypto-token-input__token-name'>{token.name}</span>
          </span>
        </button>
        <input
          type='text'
          placeholder='0.0'
          value={amount}
          disabled={disabled}
          onChange={e => handleAmountChange(e.target.value, field)}
          className='crypto-token-input__amount-input'
        />
      </div>
      {field === CryptoTokenInputType.FROM && (
        <button
          className='crypto-token-input__max-button'
          onClick={() => handleAmountChange(token.balance.toString(), field)}
        >
          MAX
        </button>
      )}
    </div>
  );
};

export default CryptoTokenInput;
