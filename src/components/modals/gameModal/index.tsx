import React from "react";
import { MainModal, CloseModal, ModalContent, Title } from "./styles";

import btnClose from "../../../assets/img/x.png";
import title from "../../../assets/img/chooseYourPlayer.png";

interface IProps {
  closeModal: () => void;
}

const PlayerModal: React.FC<IProps> = ({ closeModal }) => {

  return (
    <MainModal>
      <ModalContent>
      <CloseModal src={btnClose} onClick={closeModal} />
        <Title src={title} />
      </ModalContent>
    </MainModal>
  );
};

export default PlayerModal;
