import React from "react";

import {
  MainPainel,
  WrapperScore,
  Title,
  Score,
  Divider,
  WrapperPlayer,
  ImagePlayer,
  ImagePlayerMessage,
  PlayerName,
} from "./styles";


import { usePlayerContext } from "../../contexts/playerContext";
import { useScoreContext } from "../../contexts/scoreContext";

const Painel = () => {
  const { data } = usePlayerContext();
  const { bestScore } = useScoreContext();
  return (
    <MainPainel>
      <WrapperScore>
        <Title>Your best score:</Title>
        <Score>{(`0000${bestScore}`).slice(-4)}</Score>
      </WrapperScore>
      <Divider></Divider>
      <WrapperPlayer>
        <Title>Chosen Player</Title>
        {data.image ? (
          <>
            <ImagePlayer src={data.image} alt="player" />
            <PlayerName>{data.name}</PlayerName>
          </>
        ) : (
          <ImagePlayerMessage>No player chosen</ImagePlayerMessage>
        )}
      </WrapperPlayer>
    </MainPainel>
  );
};
export default Painel;
