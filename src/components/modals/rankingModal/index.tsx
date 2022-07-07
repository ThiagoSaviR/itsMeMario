import React from "react";
import { MainModal, CloseModal, ModalContent } from "./styles";

import btnClose from "../../../assets/x.png";

interface IProps {
  closeModal: () => void;
}

const PlayerModal: React.FC<IProps> = ({ closeModal }) => {

  return (
    <MainModal>
      <CloseModal src={btnClose} onClick={closeModal} />
      <ModalContent>Modal</ModalContent>
    </MainModal>
  );
};

export default PlayerModal;
