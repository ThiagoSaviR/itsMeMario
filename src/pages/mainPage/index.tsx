import { useState } from "react";
import {
  Main,
  Title,
  Background,
  Wrapperbutton,
  WrapperPlayer,
  WrapperContent,
} from "./styles";

import PlayerModal from "../../components/modals/playerModal";
import GameModal from "../../components/modals/gameModal";
import RankingModal from "../../components/modals/rankingModal";
import Button from "../../components/button";

import backgroundImage from "../../assets/img/background.jpg";
import logo from "../../assets/img/logo.png";

import { usePlayerContext } from "../../contexts/playerContext";


function MainPage() {
  const [displayPlayerModal, setDisplayPlayerModal] = useState(false);
  const [displayGameModal, setDisplayGameModal] = useState(false);
  const [displayRankingModal, setDisplayRankingModal] = useState(false);

  const { data } = usePlayerContext();

  return (
    <Main>
      <Background src={backgroundImage} />
      <Title src={logo} />
      <WrapperContent>
        <Wrapperbutton>
          <Button
            text="Choose your Player"
            onclick={() => setDisplayPlayerModal(!displayPlayerModal)}
          />
          <Button
            text="PLAY!"
            collor="yellow"
            onclick={() => setDisplayGameModal(!displayGameModal)}
          />
        </Wrapperbutton>
        <WrapperPlayer></WrapperPlayer>
        <Wrapperbutton>
          <Button
            text="Ranking"
            onclick={() => setDisplayRankingModal(!displayRankingModal)}
          />
        </Wrapperbutton>
      </WrapperContent>
      {displayPlayerModal ? (
        <PlayerModal
          closeModal={() => setDisplayPlayerModal(!displayPlayerModal)}
        />
      ) : null}
      {displayGameModal ? (
        <GameModal
          closeModal={() => setDisplayGameModal(!displayGameModal)}
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
