import React from "react";
import type { Token } from "../../models/Crypto";
import "./TokenIcon.css";

interface TokenIconProps {
  token: Token;
  size?: number;
  className?: string;
}

const TokenIcon: React.FC<TokenIconProps> = ({
  token,
  size = 32,
  className = "",
}) => {
  return (
    <div
      className={`token-icon-container ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={token.iconUrl}
        alt={`${token.name} icon`}
        className="token-icon-svg"
        width={size}
        height={size}
      />
    </div>
  );
};

export default TokenIcon;
