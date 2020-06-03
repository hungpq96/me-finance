import styled from "styled-components";
import CurrencyInput from "react-currency-input";

export const StyledInput = styled(CurrencyInput)`
  padding-left: ${(props) => (props.large ? "40px !important" : "auto")};
`;

export const InputWrapper = styled.div`
  margin-top: ${(props) => (props.large ? "10px" : "0")};
`;

export const PrefixIcon = styled.span`
  margin: ${(props) => (props.large ? "12px !important" : "0")};
`;
