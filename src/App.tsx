import GlobalStyle from "./styles/globalStyles";
import Router from "./router/router";
import { PlayerProvider } from "./contexts/playerContext";



function App() {
  return (
    <>
      <PlayerProvider>
        <GlobalStyle />
        <Router />
      </PlayerProvider>
    </>
  );
}

export default App;
