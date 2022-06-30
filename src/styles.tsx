import styled from "styled-components";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button/button.js";

export const StyledButton: React.FC<ButtonProps> = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5rem;
  font-weight: bold;
`;

export const Wrapperbutton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Paragraph = styled.img`
  width: 50%;
  margin: 0 auto;
  display: block;
  padding-top: 5rem;
  padding-bottom: 5rem;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.3));
`;
export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const WrapperPlayer = styled.div`


  `;