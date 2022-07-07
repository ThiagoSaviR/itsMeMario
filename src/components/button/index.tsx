import React from "react";
import { StyledButton, SecundaryStyledButton, Wrapperbutton, } from "./styles";

interface Iprops {
  text: string;
  collor?: string;
  onclick?: () => void;
}

const Button: React.FC<Iprops> = ({ text, collor, onclick }) => {
  return (
    <>
      {collor === "yellow" ? (
        <Wrapperbutton>
        <SecundaryStyledButton type="primary" size="large" onClick={onclick}>
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
