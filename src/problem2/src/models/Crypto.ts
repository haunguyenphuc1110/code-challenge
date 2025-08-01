export interface Token {
  symbol: string;
  name: string;
  iconUrl: string;
  decimals: number;
  price: number;
  balance: number;
  marketCap?: number;
  change24h?: number;
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
