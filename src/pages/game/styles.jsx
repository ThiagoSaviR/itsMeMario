import styled, { keyframes } from "styled-components";

export const WrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  overflow: hidden;
`;

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const GameBoard = styled.div`
  width: 80%;
  
  height: 31.25rem;
  border: 0.5rem solid #22972c;
  border-radius: 1.5rem;
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

const cloudAnimation = keyframes`
  from {
    right: -18rem;
  }

  to {
    right: 100%;
  }
`;
export const Cloud = styled.img`
  position: absolute;
  width: 18rem;
  top: 5rem; 
  animation: ${cloudAnimation} 25s linear infinite;
  `;

