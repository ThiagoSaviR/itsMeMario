import styled from "styled-components";

export const MainModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #ffffffb5;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #f3f3f3;
  filter: drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.3));
  border: 0.5rem solid #21dd3a;
  padding: 2rem 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const CloseModal = styled.img`
  position: absolute;
  top: -1.9rem; ;
  right: -1.9rem;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  border: 0.5rem solid #21dd3a;
  border-radius: 10rem;
  background-color: #ffff;
  padding: 0.3rem;
`;

export const Title = styled.img`
  width: 60%;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
`;

export const WhapperPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  
  `;

export const PlayerImage = styled.img`
  width: 10rem;
  `;
export const Card = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem 2rem;
  background: #fff;
  border-radius: 1rem;
  filter: drop-shadow(-6px 6px 10px rgba(0, 0, 0, 0.3));
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }

`;
export const Name = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;  
  margin: 1rem 0 0 0;
`;
