import React from "react";

import {
  Main,
  Paragraph,
  Background,
  StyledButton,
  Wrapperbutton,
  WrapperPlayer,
} from "./styles";

import backgroundImage from "./assets/background.jpg";
import logo from "./assets/logo.png";
import { Button } from "antd";

function App() {
  return (
    <Main>
      <Background src={backgroundImage} />
      <Paragraph src={logo} />
      <Wrapperbutton>
        <StyledButton type="primary" size="large">
          Choose your Player
        </StyledButton>
        <StyledButton type="primary" size="large">
          PLAY!
        </StyledButton>
      </Wrapperbutton>
      <WrapperPlayer></WrapperPlayer>
    </Main>
  );
}

export default App;
