import styled from "styled-components";
import { Menu, Divider } from "@blueprintjs/core";

export const MenuWrapper = styled(Menu)`
  position: fixed;
  padding: 0;
  height: 100vh;
  width: 230px;
  border-radius: 0;
  border: 0.1px solid black;
  background: rgb(57,75,89) !important;
  box-shadow: 1px 0 0 rgba(16,22,26,.4);
`;

export const MenuDivider = styled(Divider)`
  margin: 0;
`;
