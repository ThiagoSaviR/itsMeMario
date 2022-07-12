import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

import { PlayerProvider } from "./contexts/playerContext";
import MainPage from "./pages/mainPage";
import Game from "./pages/game";

function App() {
  return (
    <>
      <PlayerProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </PlayerProvider>
    </>
  );
}

export default App;
