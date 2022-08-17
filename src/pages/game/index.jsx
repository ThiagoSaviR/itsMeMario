import { useState, useRef } from 'react';
import { GameBoard, Pipe, PlayerAnimation, Player, Score, Cloud, WrapperPage, Background } from "./styles";

import backgroundImage from "../../assets/img/backgroundGame.jpg";
import pipe from "../../assets/img/pipe.png";
import cloud from "../../assets/img/clouds.png";


import { usePlayerContext } from "../../contexts/playerContext";
import { useScoreContext } from "../../contexts/scoreContext";
import SaveScoreModal from "../../components/modals/GameOverModal";

const Game = () => {
  const { data } = usePlayerContext();
  const [jump, setJump] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const { dataScore, setDataScore } = useScoreContext();

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
  
  const points = setInterval(() => {;
    setDataScore(dataScore + 1);
    clearInterval(points)
  
  }, 100);
  
  const playerRef = useRef()
  const pipeRef = useRef();
  
  
  
  const playGame = setInterval(() => {
    const jumpPlayer = playerRef.current.offsetTop;
    const pipePosition = pipeRef.current.offsetLeft

    if (data.id === 1) {
      if (pipePosition <= 152 && pipePosition > 40 && jumpPlayer > 297) {
        pipeRef.current.style.animation = "none"; 
        pipeRef.current.style.left = pipePosition + "px";
        playerRef.current.src = data.gameOver;
        playerRef.current.style.width = "5rem";
        clearInterval(playGame)
        clearInterval(points)
        setGameOver(true);
      } 
    }
    
    if (data.id === 2) {
      if ((pipePosition <= 174 && pipePosition > 40 && jumpPlayer > 297)) {
        pipeRef.current.style.animation = "none"; 
        pipeRef.current.style.left = pipePosition + "px";
        playerRef.current.style.top = "500px";
        clearInterval(playGame)
        clearInterval(points)
        setGameOver(true);
      }  
    }
  },1);
  
  return (
    <>
    <WrapperPage>
    <Background src={backgroundImage} />
      <GameBoard>
        <Score>{(`0000${dataScore}`).slice(-4)}</Score>
        <Cloud src={cloud} />

        {jump? (
          <Player ref={playerRef} src={data.gif} animation={PlayerAnimation} />
        ): (
          <Player ref={playerRef} src={data.gif} />
        )}
        <Pipe ref={pipeRef} className="pipe" src={pipe} alt="Pipe" />
      </GameBoard>

    </WrapperPage>
    {gameOver && <SaveScoreModal />}
    </>
  );
};

export default Game;
