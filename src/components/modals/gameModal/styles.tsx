import styled from "styled-components";

export const MainModal = styled.div`
  position: fixed;
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

export const CloseModal = styled.img`
  position: relative;
  top: -12rem;
  right: -35rem;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  border: 0.5rem solid #21dd3a;
  border-radius: 10rem;
  background-color: #fff;
  padding: 0.3rem;
  z-index: 2;
  `;

export const ModalContent = styled.div`
  background-color: #fff;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.3));
  border: 0.5rem solid #21dd3a;
  padding: 11rem 15rem;
  border-radius: 1rem;
  position: relative;
`;