import styled from "styled-components";
import { Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }

  color: white !important;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  padding: 25px 0 25px 65px !important;
  border-radius: 0;
`;
