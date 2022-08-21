import { useState } from "react";
import {
  Main,
  Title,
  Background,
  WrapperButton,
  WrapperPainel,
  WrapperContent,
} from "./styles";
import { useNavigate } from "react-router-dom";

import PlayerModal from "../../components/modals/playerModal";
import RankingModal from "../../components/modals/rankingModal";
import Button from "../../components/button";
import Painel from "../../components/painel";

import backgroundImage from "../../assets/img/background.jpg";
import logo from "../../assets/img/logo.png";

import { usePlayerContext } from "../../contexts/playerContext";


const MainPage = () => {
  const navigate = useNavigate();
  const [displayPlayerModal, setDisplayPlayerModal] = useState(false);
  const [displayRankingModal, setDisplayRankingModal] = useState(false);

  const { data } = usePlayerContext();


  return (
    <Main>
      <Background src={backgroundImage} />
      <Title src={logo} />
      <WrapperContent>
        <WrapperButton>
          <Button
            text="Choose your Player"
            onclick={() => setDisplayPlayerModal(!displayPlayerModal)}
          />
          <Button
            text="PLAY!"
            collor="yellow"
            disabled={data.id? false : true}
            onclick={() => {
              navigate("/game");
            }}
          />
        </WrapperButton>
        <WrapperPainel>
          <Painel />
        </WrapperPainel>
        <WrapperButton>
          <Button
            text="Ranking"
            onclick={() => setDisplayRankingModal(!displayRankingModal)}
          />
        </WrapperButton>
      </WrapperContent>
      {displayPlayerModal ? (
        <PlayerModal
          closeModal={() => setDisplayPlayerModal(!displayPlayerModal)}
        />
      ) : null}
      {displayRankingModal ? (
        <RankingModal
          closeModal={() => setDisplayRankingModal(!displayRankingModal)}
        />
      ) : null}
    </Main>
  );
}

export default MainPage;
