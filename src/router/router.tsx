import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "../pages/mainPage";
import Game from "../pages/game";
import { usePlayerContext } from "../contexts/playerContext";

const Router = () => {
  const { data } = usePlayerContext();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/game" 
      element={ 
        !data.id ? 
        <Navigate to="/" /> : 
        <Game />} 
      />
    </Routes>
  );
};

export default Router;
