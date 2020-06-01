import React from "react";

import { Alignment } from "@blueprintjs/core";

import { StyledButton, StyledLink } from "./styles";

const Tab = ({ to, title, active, onClick, ...rest }) => (
  <StyledLink to={to}>
    <StyledButton
      minimal large
      active={active}
      onClick={onClick}
      alignText={Alignment.LEFT}
      {...rest}
    >
      {title.toUpperCase()}
    </StyledButton>
  </StyledLink>
);

export default Tab;
