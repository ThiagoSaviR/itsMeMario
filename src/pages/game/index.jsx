import React, { useState, useRef, useLayoutEffect} from 'react';
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

  const pipeRef = useRef();
  setInterval(() => {
    if (data.id === 1) {
      if (pipeRef.current.offsetLeft <= 152) {
        pipeRef.current.style.animation = "none"; 
        pipeRef.current.style.left = 152 + "px";
      } 
    }
    if (data.id === 2) {
      if ((pipeRef.current.offsetLeft <= 174)) {
        pipeRef.current.style.animation = "none"; 
        pipeRef.current.style.left = 174 + "px";
      }  
    }
  },10);

  return (
    <GameBoard>
      {jump? (
        <Player src={data.gif} animation={PlayerAnimation} />
      ): (
        <Player src={data.gif} />
      )}
      <Pipe ref={pipeRef} className="pipe" src={pipe} alt="Pipe" />
    </GameBoard>
  );
};

export default Game;
