import React from "react";
import { StyledButton, SecundaryStyledButton, Wrapperbutton, } from "./styles";

interface Iprops {
  collor?: string;
  value?: string;
  disabled?: boolean;
  text: string
  onclick?: () => void;
}

const Button: React.FC<Iprops> = ({collor, onclick, value, disabled, text}) => {

  return (
    <>
      {collor === "yellow" ? (
        <Wrapperbutton>
        <SecundaryStyledButton type="primary" htmlType="submit" size="large" onClick={onclick} value={value} disabled={disabled}>
          {text}
        </SecundaryStyledButton>
        </Wrapperbutton>
      ) : (
        <Wrapperbutton>
        <StyledButton type="primary" size="large" onClick={onclick} value={value}>
          {text}
        </StyledButton>
        </Wrapperbutton>
      )}
    </>
  );
};

export default Button;
