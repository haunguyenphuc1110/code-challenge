// Repository: https://github.com/Switcheo/token-icons/tree/main/tokens

import type { Token } from "../models/Crypto";

const SWITCHEO_TOKENS_BASE_URL =
  "https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens";

export const getTokenIconUrl = (symbol: string): string => {
  return `${SWITCHEO_TOKENS_BASE_URL}/${symbol.toUpperCase()}.svg`;
};

const TOKENS = [
  { symbol: "ETH", name: "Ethereum", balance: 5.234 },
  { symbol: "USDT", name: "Tether", balance: 800.12 },
  { symbol: "BTC", name: "Bitcoin", balance: 0.158 },
  { symbol: "BNB", name: "BNB Chain", balance: 12.58 },
  { symbol: "XRP", name: "XRP", balance: 1500.0 },
  { symbol: "ADA", name: "Cardano", balance: 2000.78 },
  { symbol: "SOL", name: "Solana", balance: 45.23 },
  { symbol: "DOT", name: "Polkadot", balance: 180.56 },
  { symbol: "MATIC", name: "Polygon", balance: 850.34 },
  { symbol: "AVAX", name: "Avalanche", balance: 67.23 },
  { symbol: "ATOM", name: "Cosmos", balance: 120.45 },
  { symbol: "USDC", name: "USD Coin", balance: 1250.45 },
  { symbol: "BUSD", name: "Binance USD", balance: 300.0 },
  { symbol: "DAI", name: "Dai", balance: 500.0 },
  { symbol: "FRAX", name: "Frax", balance: 200.0 },
  { symbol: "UNI", name: "Uniswap", balance: 45.67 },
  { symbol: "LINK", name: "Chainlink", balance: 78.9 },
  { symbol: "AAVE", name: "Aave", balance: 12.34 },
  { symbol: "CRV", name: "Curve DAO Token", balance: 234.56 },
  { symbol: "COMP", name: "Compound", balance: 8.5 },
  { symbol: "MKR", name: "Maker", balance: 2.1 },
  { symbol: "SNX", name: "Synthetix", balance: 95.3 },
  { symbol: "YFI", name: "yearn.finance", balance: 0.45 },
  { symbol: "NEAR", name: "NEAR Protocol", balance: 234.67 },
  { symbol: "FTM", name: "Fantom", balance: 1200.0 },
  { symbol: "ALGO", name: "Algorand", balance: 3000.0 },
  { symbol: "ONE", name: "Harmony", balance: 5000.0 },
  { symbol: "HBAR", name: "Hedera", balance: 1500.0 },
  { symbol: "VET", name: "VeChain", balance: 8000.0 },
  { symbol: "EGLD", name: "MultiversX", balance: 15.7 },
  { symbol: "CRO", name: "Cronos", balance: 2000.0 },
  { symbol: "LEO", name: "UNUS SED LEO", balance: 50.0 },
  { symbol: "OKB", name: "OKB", balance: 25.0 },
  { symbol: "LTC", name: "Litecoin", balance: 8.5 },
  { symbol: "BCH", name: "Bitcoin Cash", balance: 3.2 },
  { symbol: "XLM", name: "Stellar", balance: 4000.0 },
  { symbol: "TRX", name: "TRON", balance: 12000.0 },
  { symbol: "EOS", name: "EOS", balance: 450.0 },
  { symbol: "XTZ", name: "Tezos", balance: 670.0 },
  { symbol: "THETA", name: "Theta Network", balance: 180.0 },
  { symbol: "DOGE", name: "Dogecoin", balance: 15000.0 },
  { symbol: "SHIB", name: "Shiba Inu", balance: 50000000.0 },
];

export const TOKEN_DATA = {
  BTC: {
    price: 43521.88,
    marketCap: 850000000000,
    change24h: -1.23,
    decimals: 8,
  },
  ETH: {
    price: 2245.32,
    marketCap: 270000000000,
    change24h: 2.45,
    decimals: 18,
  },
  BNB: { price: 315.67, marketCap: 47000000000, change24h: 3.21, decimals: 18 },
  XRP: { price: 0.6123, marketCap: 33000000000, change24h: 1.87, decimals: 6 },
  ADA: { price: 0.4523, marketCap: 16000000000, change24h: -2.15, decimals: 6 },
  SOL: { price: 98.45, marketCap: 45000000000, change24h: 5.67, decimals: 9 },
  DOT: { price: 7.234, marketCap: 9200000000, change24h: -0.87, decimals: 10 },
  MATIC: {
    price: 0.8932,
    marketCap: 8500000000,
    change24h: 1.89,
    decimals: 18,
  },
  AVAX: { price: 36.78, marketCap: 14000000000, change24h: 4.12, decimals: 18 },
  ATOM: { price: 10.45, marketCap: 4100000000, change24h: 3.67, decimals: 6 },
  USDT: {
    price: 0.9998,
    marketCap: 75000000000,
    change24h: -0.02,
    decimals: 6,
  },
  USDC: { price: 1.0002, marketCap: 25000000000, change24h: 0.01, decimals: 6 },
  BUSD: {
    price: 0.9995,
    marketCap: 5000000000,
    change24h: -0.05,
    decimals: 18,
  },
  DAI: { price: 0.9998, marketCap: 3800000000, change24h: 0.03, decimals: 18 },
  FRAX: { price: 0.9999, marketCap: 850000000, change24h: 0.01, decimals: 18 },
  UNI: { price: 7.89, marketCap: 5900000000, change24h: 2.34, decimals: 18 },
  LINK: { price: 14.56, marketCap: 8100000000, change24h: -1.67, decimals: 18 },
  AAVE: { price: 89.23, marketCap: 1300000000, change24h: 4.56, decimals: 18 },
  CRV: { price: 0.94, marketCap: 520000000, change24h: -3.21, decimals: 18 },
  COMP: { price: 45.67, marketCap: 310000000, change24h: 2.89, decimals: 18 },
  MKR: {
    price: 1234.56,
    marketCap: 1100000000,
    change24h: -1.45,
    decimals: 18,
  },
  SNX: { price: 2.87, marketCap: 890000000, change24h: 6.78, decimals: 18 },
  YFI: { price: 7890.12, marketCap: 290000000, change24h: 8.91, decimals: 18 },
  NEAR: { price: 3.45, marketCap: 3700000000, change24h: 7.23, decimals: 24 },
  FTM: { price: 0.4567, marketCap: 1300000000, change24h: 4.56, decimals: 18 },
  ALGO: { price: 0.2134, marketCap: 1700000000, change24h: -2.34, decimals: 6 },
  ONE: { price: 0.0234, marketCap: 310000000, change24h: 1.23, decimals: 18 },
  HBAR: { price: 0.0789, marketCap: 2800000000, change24h: 3.45, decimals: 8 },
  VET: { price: 0.0234, marketCap: 1700000000, change24h: 2.67, decimals: 18 },
  EGLD: { price: 45.67, marketCap: 1200000000, change24h: 5.43, decimals: 18 },
  CRO: { price: 0.1234, marketCap: 3100000000, change24h: -1.89, decimals: 8 },
  LEO: { price: 3.45, marketCap: 3200000000, change24h: 0.67, decimals: 18 },
  OKB: { price: 45.23, marketCap: 2700000000, change24h: 1.45, decimals: 18 },
  LTC: { price: 92.34, marketCap: 6900000000, change24h: -0.87, decimals: 8 },
  BCH: { price: 234.56, marketCap: 4600000000, change24h: 2.34, decimals: 8 },
  XLM: { price: 0.1234, marketCap: 3400000000, change24h: 1.67, decimals: 7 },
  TRX: { price: 0.0789, marketCap: 7100000000, change24h: 3.45, decimals: 6 },
  EOS: { price: 0.8934, marketCap: 890000000, change24h: -2.56, decimals: 4 },
  XTZ: { price: 0.8745, marketCap: 810000000, change24h: 4.12, decimals: 6 },
  THETA: { price: 0.9876, marketCap: 980000000, change24h: 2.78, decimals: 18 },
  DOGE: { price: 0.0789, marketCap: 11000000000, change24h: 5.67, decimals: 8 },
  SHIB: {
    price: 0.00000987,
    marketCap: 5800000000,
    change24h: 12.34,
    decimals: 18,
  },
} as const;

export const createToken = (
  symbol: string,
  name: string,
  balance: number = 0
): Token => {
  const upperSymbol = symbol.toUpperCase();
  const marketData = TOKEN_DATA[upperSymbol as keyof typeof TOKEN_DATA];

  return {
    symbol: upperSymbol,
    name,
    iconUrl: getTokenIconUrl(upperSymbol),
    decimals: marketData?.decimals || 18,
    price: marketData?.price || 0,
    balance,
    marketCap: marketData?.marketCap,
    change24h: marketData?.change24h,
  };
};

export const createTokens = (): Token[] => {
  return TOKENS.map(({ symbol, name, balance }) =>
    createToken(symbol, name, balance)
  );
};
