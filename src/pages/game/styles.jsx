import styled, { keyframes } from "styled-components";

export const GameBoard = styled.div`
  width: 80%;
  height: 31.25rem;
  border: 1px solid #333;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const pipeAnimation = keyframes`
  from {
    rigth: -5rem;
  }

  to {
    right: 100%;
  }
`;
export const Pipe = styled.img`
  position: absolute;
  bottom: 0;
  width: 5rem;
  height: 4.5rem;
  right: -5rem;
  animation: ${pipeAnimation} 2s linear infinite;
`;

export const PlayerAnimation = keyframes`
  0% {
    top: 368px;
  }
  40%, 50%, 60% { 
    top: 200px;
  }
  100% {
    top: 368px;
  }
`;

export const Player = styled.img`
    width: 8.125rem;
    position: absolute;
    top: 368px;
    left: 3rem;
    animation:${props => props.animation} 600ms ease-out;
`;

