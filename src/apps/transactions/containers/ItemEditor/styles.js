import styled from "styled-components";
import { Dialog, InputGroup, Button, Text } from "@blueprintjs/core";

export const Wrapper = styled(Dialog)``;

export const Content = styled.div`
  padding: 20px;
`;

export const Input = styled(InputGroup)`
  margin-top: 10px;
`;

export const ConfirmButton = styled(Button)`
  flex-grow: 2;
  margin-right: 10px;
`;

export const CancelButton = styled(Button)`
  flex-grow: 1;
`;

export const Footer = styled.div`
  display: flex;
  margin: 0 20px;
  height: 50px;
`;

export const ErrorMsg = styled(Text)`
  color: red;
`;

export const SelectWrapper = styled.div`
  margin-top: 10px;
`;
