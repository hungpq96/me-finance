import styled from "styled-components";

import { Dialog, Button } from "@blueprintjs/core";

export const PopupWrapper = styled(Dialog)``;

export const ConfirmButton = styled(Button)`
  flex-grow: 1;
  height: 50px !important;
  margin: 5px;
`;

export const CancelButton = styled(Button)`
  flex-grow: 1;
  height: 50px !important;
  margin: 5px 5px;
`;

export const WrapperContent = styled.div`
  display: flex;
  padding: 10px 10px 0 10px;
`;
