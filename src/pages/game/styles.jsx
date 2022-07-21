import styled, { keyframes } from "styled-components";

export const GameBoard = styled.div`
  width: 80%;
  height: 31.25rem;
  border: 1px solid #333;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background:linear-gradient(#87CEEb, #E0F6FF);
`;

const pipeAnimation = keyframes`
  from {
    right: -5rem;
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
    z-index: 2;
`;

export const Score = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem 2rem;
  font-size: 2rem;
  color: #fff;
  z-index: 2;
  text-align: center;
`;

