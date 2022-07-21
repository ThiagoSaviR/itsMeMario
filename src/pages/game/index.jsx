import ReactDOM, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { GameBoard, Pipe, PlayerAnimation, Player, Score } from "./styles";

import pipe from "../../assets/img/pipe.png";

import { usePlayerContext } from "../../contexts/playerContext";
import { useScoreContext } from "../../contexts/scoreContext";

import SaveScoreModal from "../../components/modals/SaveScoreModal";


const Game = () => {
  const navigate = useNavigate();
  const { data } = usePlayerContext(0);
  const { setDataScore  } = useScoreContext(0);
  const [jump, setJump] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0)

  
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
    setScore(score + 1)
    console.log(score)
    clearInterval(points)
  
  }, 300);
  
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
        setDataScore(score)
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
    <GameBoard>
      <Score>{(`0000${score}`).slice(-4)}</Score>
      {jump? (
        <Player className="player" ref={playerRef} src={data.gif} animation={PlayerAnimation} />
      ): (
        <Player className="player" ref={playerRef} src={data.gif} />
      )}
      <Pipe ref={pipeRef} className="pipe" src={pipe} alt="Pipe" />
    </GameBoard>
    {gameOver && <SaveScoreModal />}
    </>

  );
};

export default Game;
