import GlobalStyle from "./styles/globalStyles";
import Router from "./router/router";
import { PlayerProvider } from "./contexts/playerContext";
import { ScoreProvider } from "./contexts/scoreContext";

function App() {
  return (
    <>
      <ScoreProvider>
        <PlayerProvider>
          <GlobalStyle />
          <Router />
        </PlayerProvider>
      </ScoreProvider>
    </>
  );
}

export default App;
