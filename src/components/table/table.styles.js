import styled from "@emotion/styled";

const color = "white";

export const Span = styled.span`
  display: grid;
  text-align: center;
  color: black;
  padding: 15px;
  background-color: #b7091d;
  font-size: 24px;
  border-radius: 1px;
  &:hover {
    color: ${color};
  }
`;
