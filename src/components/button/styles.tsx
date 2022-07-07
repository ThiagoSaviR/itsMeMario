import styled from "styled-components";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button/button.js";

export const StyledButton: React.FC<ButtonProps> = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5rem;
  font-weight: bold;
`;

export const SecundaryStyledButton = styled(StyledButton)`
  background-color: #ddbb21;
  &:hover {
    background-color: #ecd053;
  }
  &:focus {
    background-color: #c9b921;
  }
`;

export const Wrapperbutton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;