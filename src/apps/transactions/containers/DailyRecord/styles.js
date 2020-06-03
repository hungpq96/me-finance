import styled from "styled-components";
import { Button, Collapse, Callout } from "@blueprintjs/core";

export const Wrapper = styled(Callout)`
  width: 70%;
  margin: 10px;
`;

export const ToggleButton = styled(Button)`
  max-width: 250px;
  width: 35%;
  justify-content: start;
`;

export const Collapsable = styled(Collapse)``;

export const Footer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const SumButton = styled(Button)`
  flex-grow: 1;
`;

export const AddItemButton = styled(Button)`
  flex-grow: 3;
  margin-right: 10px;
`;
