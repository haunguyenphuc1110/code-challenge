export const CryptoTokenInputType = {
  FROM: "from",
  TO: "to",
} as const;

export type CryptoTokenInputType =
  (typeof CryptoTokenInputType)[keyof typeof CryptoTokenInputType];
