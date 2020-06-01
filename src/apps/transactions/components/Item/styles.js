import styled from "styled-components";

import { InputGroup, Button, Card } from "@blueprintjs/core";

export const ItemWrapper = styled(Card)`
  display: flex;
  margin-top: 10px;
`;

export const Input = styled(InputGroup)`
  margin: 0 10px;

  &:first-child {
    flex-grow: 3;
  }

  &:nth-child(2) {
    flex-grow: 1;
  }

  &:nth-child(3) {
    flex-grow: 2;
  }
`;

export const StyledButton = styled(Button)`
`;
