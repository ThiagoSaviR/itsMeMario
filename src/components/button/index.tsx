import React from "react";
import { StyledButton, SecundaryStyledButton, Wrapperbutton, } from "./styles";

interface Iprops {
  text: string;
  collor?: string;
  onclick?: () => void;
  disabled?: boolean;
  value?: string;
  type?: string;
}

const Button: React.FC<Iprops> = ({ text, collor, onclick, value, disabled }) => {

  return (
    <>
      {collor === "yellow" ? (
        <Wrapperbutton>
        <SecundaryStyledButton type="primary" size="large" onClick={onclick} value={value} disabled={disabled}>
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
