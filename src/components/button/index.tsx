import React from "react";
import { StyledButton, SecundaryStyledButton, Wrapperbutton, } from "./styles";

interface Iprops {
  text: string;
  collor?: string;
  onclick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Iprops> = ({ text, collor, onclick, disabled }) => {

  return (
    <>
      {collor === "yellow" ? (
        <Wrapperbutton>
        <SecundaryStyledButton type="primary" size="large" onClick={onclick} disabled={disabled}>
          {text}
        </SecundaryStyledButton>
        </Wrapperbutton>
      ) : (
        <Wrapperbutton>
        <StyledButton type="primary" size="large" onClick={onclick}>
          {text}
        </StyledButton>
        </Wrapperbutton>
      )}
    </>
  );
};

export default Button;
