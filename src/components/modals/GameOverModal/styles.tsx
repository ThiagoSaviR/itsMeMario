import styled from "styled-components";

export const MainModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #000000b5;
  z-index: 5;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #f3f3f3;
  filter: drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.3));
  border: 0.5rem solid #22972c;
  padding: 2rem 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.img`
  width: 70%;
  margin: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 0 0 1rem 0;
`;

export const Span = styled.span`
  padding: 0 0.5rem;
  color: #ddbb21;
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  border: none;
  padding: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
  color: #525352;
  background-color: #f3f3f3;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
`;
export const Form = styled.form`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
`;

export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 1rem;
  align-items: center;
`;
