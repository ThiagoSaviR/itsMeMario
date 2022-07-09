import MainPage from "./pages/mainPage";
import GlobalStyle from "./styles/globalStyles";

import { PlayerProvider } from "./contexts/playerContext";

function App() {
  return (
    <>
    <PlayerProvider>
        <GlobalStyle />
        <MainPage />;
    </PlayerProvider>
    </>
  );
}

export default App;
