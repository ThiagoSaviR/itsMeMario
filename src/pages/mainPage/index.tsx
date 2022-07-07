import { useState } from "react";
import {
  Main,
  Paragraph,
  Background,
  Wrapperbutton,
  WrapperPlayer,
  WrapperContent,
} from "./styles";

import PlayerModal from "../../components/modals/playerModal";
import Button from "../../components/button";

import backgroundImage from "../../assets/background.jpg";
import logo from "../../assets/logo.png";

function MainPage() {
  const [displayPlayerModal, setDisplayPlayerModal] = useState(false);
  const [displayGameModal, setDisplayGameModal] = useState(false);
  const [displayRankingModal, setDisplayRankingModal] = useState(false);

  return (
    <Main>
      <Background src={backgroundImage} />
      <Paragraph src={logo} />
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
        <PlayerModal
          closeModal={() => setDisplayGameModal(!displayGameModal)}
        />
      ) : null}
      {displayRankingModal ? (
        <PlayerModal
          closeModal={() => setDisplayRankingModal(!displayRankingModal)}
        />
      ) : null}
    </Main>
  );
}

export default MainPage;
