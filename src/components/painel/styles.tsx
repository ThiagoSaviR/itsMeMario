import styled from "styled-components";

export const MainPainel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperScore = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
  padding: 0 1rem;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
`;

export const Score = styled(Title)`
  color: #ddbb21;
`;

export const Divider = styled.div`
  width: 95%;
  height: 3px;
  background-color: #ddbb21;
`;

export const WrapperPlayer = styled(WrapperScore)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ImagePlayer = styled.img`
  width: 10rem;
`;
export const ImagePlayerMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 11.5rem;
  font-size: 1.5rem;
  color: #e0dede99;
`;

export const PlayerName = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
  font-family: "Press Start 2P", cursive;
`;
