import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  const [spinRate, setSpinRate] = useState(1);

  return (
    <header
      css={css`
        background-color: ${colors.dark};
        padding: 15px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      {/* eslint-disable-next-line */}
      <span
        aria-label="logo"
        onClick={() => setSpinRate(spinRate * 0.5)}
        css={css`
          font-size: 32px;
          color: ${colors.primary};

          &:hover {
            animation: ${spinRate}s ${spin} linear infinite;
            text-decoration: underline;
          }
        `}
      >
        Woof!
      </span>
    </header>
  );
};

export default NavBar;
