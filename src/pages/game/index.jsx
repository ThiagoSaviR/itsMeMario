import ReactDOM, { useState, useRef, useLayoutEffect} from 'react';
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
        }, 600);
      }
    }
  })

  const playerRef = useRef()
  const pipeRef = useRef();
  setInterval(() => {
    const jumpPlayer = playerRef.current.offsetTop;
    const pipePosition = pipeRef.current.offsetLeft

    if (data.id === 1) {
      if (pipePosition <= 152 && pipePosition > 40 && jumpPlayer > 290) {
        pipeRef.current.style.animation = "none"; 
        pipeRef.current.style.left = pipePosition + "px";
      } 
    }

    if (data.id === 2) {
      if ((pipePosition <= 174 && pipePosition > 40 && jumpPlayer > 290)) {
        pipeRef.current.style.animation = "none"; 
        pipeRef.current.style.left = pipePosition + "px";
      }  
    }
  },10);

  return (
    <GameBoard>
      {jump? (
        <Player className="player" ref={playerRef} src={data.gif} animation={PlayerAnimation} />
      ): (
        <Player className="player" ref={playerRef} src={data.gif} />
      )}
      <Pipe ref={pipeRef} className="pipe" src={pipe} alt="Pipe" />
    </GameBoard>
  );
};

export default Game;
