import React from "react";
import {
  MainModal,
  CloseModal,
  ModalContent,
  Title,
  WhapperPlayer,
  PlayerImage,
  Card,
  Name,
} from "./styles";

import btnClose from "../../../assets/img/x.png";
import title from "../../../assets/img/chooseYourPlayer.png";
import Button from "../../../components/button";

import { PLAYERS } from "../../../players";
import { usePlayerContext } from "../../../contexts/playerContext";

interface IProps {
  closeModal: () => void;
}
const PlayerModal: React.FC<IProps> = ({ closeModal }) => {
  const playerContext = usePlayerContext();
  const handleClick = (player: any) => {
    playerContext.setData(player);
    closeModal();
  };
  return (
    <MainModal>
      <ModalContent>
        <CloseModal src={btnClose} onClick={closeModal} />
        <Title src={title} />
        <WhapperPlayer>
          {PLAYERS.map((player: any) => (
            <Card>
              <Name>{player.name}</Name>
              <PlayerImage key={player.id} src={player.image} />
              <Button text="Select" onclick={() => handleClick(player)} />
            </Card>
          ))}
        </WhapperPlayer>
      </ModalContent>
    </MainModal>
  );
};

export default PlayerModal;
