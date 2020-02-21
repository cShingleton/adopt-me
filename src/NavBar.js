import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.dark};
      padding: 15px;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span
      aria-label="logo"
      css={css`
        font-size: 32px;
        color: ${colors.primary};
        &:hover {
          text-decoration: underline;
        }
      `}
    >
      Woof!
    </span>
  </header>
);

export default NavBar;
