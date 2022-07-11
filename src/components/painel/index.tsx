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

const Painel = () => {
  const { data } = usePlayerContext();
  return (
    <MainPainel>
      <WrapperScore>
        <Title>Your best score:</Title>
        <Score>0000</Score>
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
