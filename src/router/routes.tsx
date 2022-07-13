import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/mainPage";
import Game from "../pages/game";

const Router = () => {
    return (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/game" element={<Game />} />
  </Routes>
    );
};

export default Router;
