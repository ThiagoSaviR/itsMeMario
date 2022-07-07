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

import btnClose from "../../../assets/x.png";
import title from "../../../assets/chooseYourPlayer.png";
import Button from "../../../components/button";

import { PLAYERS } from "../../../players";

interface IProps {
  closeModal: () => void;
}

const PlayerModal: React.FC<IProps> = ({ closeModal }) => {
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
              <Button text="Select"/>
            </ Card>
          ))}
        </WhapperPlayer>
      </ModalContent>
    </MainModal>
  );
};

export default PlayerModal;
