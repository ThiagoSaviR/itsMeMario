import react, { useState } from 'react';
import { GameBoard, Pipe, PlayerAnimation, Player } from "./styles";

import pipe from "../../assets/img/pipe.png";

import { usePlayerContext } from "../../contexts/playerContext";

const Game = () => {
  const { data } = usePlayerContext(0);
  const [jump, setJump] = useState(false);


    document.addEventListener('keydown', (e) => {
      if (e.code === "Space") {
        if (jump=== false) {
          setJump(true);
          setTimeout(() => {
            setJump(false);
          }, 700);
        }
      }
    })
  return (
    <GameBoard>
      {jump? (
        <Player src={data.gif} animation={PlayerAnimation} alt="pulando"/>
      ): (
        <Player src={data.gif} alt="andando"/>
      )}
      <Pipe src={pipe} alt="Pipe" />
    </GameBoard>
  );
};

export default Game;
