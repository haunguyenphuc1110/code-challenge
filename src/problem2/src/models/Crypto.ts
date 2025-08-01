export interface Token {
  symbol: string;
  name: string;
  icon: string;
  price: number;
  balance: number;
}

export interface SwapState {
  fromToken: Token;
  toToken: Token;
  fromAmount: string;
  toAmount: string;
  slippage: number;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}
