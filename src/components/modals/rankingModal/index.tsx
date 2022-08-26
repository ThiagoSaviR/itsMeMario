import React, { useEffect, useState } from "react";
import { 
  MainModal,
  CloseModal, 
  ModalContent, 
  Title, 
  WrapperContent, 
  WrapperUser, 
  UserPosition, 
  UserName, 
  UserPoints 
} from "./styles";

import btnClose from "../../../assets/img/x.png";
import title from "../../../assets/img/ranking.png";

import { useScoreContext } from "../../../contexts/scoreContext";

interface Iprops {
  closeModal: () => void,
}

const PlayerModal: React.FC<Iprops> = ({ closeModal }) => {
  const { FBDataSorted } = useScoreContext();

  return (
    <MainModal>
      <ModalContent>
      <CloseModal src={btnClose} onClick={closeModal} />
        <Title src={title} />
        <WrapperContent>
          <WrapperUser>
            <UserPosition>1º</UserPosition>
            <UserName>{FBDataSorted[0]?.name}</UserName>
            <UserPoints>{`0000${FBDataSorted[0]?.points}`.slice(-4)}</UserPoints>
          </WrapperUser>
          <WrapperUser>
            <UserPosition>2º</UserPosition>
            <UserName>{FBDataSorted[1]?.name}</UserName>
            <UserPoints>{`0000${FBDataSorted[1]?.points}`.slice(-4)}</UserPoints>
          </WrapperUser>
          <WrapperUser>
            <UserPosition>3º</UserPosition>
            <UserName>{FBDataSorted[2]?.name}</UserName>
            <UserPoints>{`0000${FBDataSorted[2]?.points}`.slice(-4)}</UserPoints>
          </WrapperUser>
          <WrapperUser>
            <UserPosition>4º</UserPosition>
            <UserName>{FBDataSorted[3]?.name}</UserName>
            <UserPoints>{`0000${FBDataSorted[3]?.points}`.slice(-4)}</UserPoints>
          </WrapperUser>
          <WrapperUser>
            <UserPosition>5º</UserPosition>
            <UserName>{FBDataSorted[4]?.name}</UserName>
            <UserPoints>{`0000${FBDataSorted[4]?.points}`.slice(-4)}</UserPoints>
          </WrapperUser>
    
        </WrapperContent>
      </ModalContent>
    </MainModal>
  );
};

export default PlayerModal;
