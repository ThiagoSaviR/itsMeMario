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

import fireDb from '../../../dataBase/firebase';

const PlayerModal = (props) => {
  const [FBData, setFBData] = useState({})

  useEffect(() => {
    fireDb.child("bestScore").on('value', (snapshot) => {
        if (snapshot.val() !== null) {
            setFBData({
                ...snapshot.val()
            });
        } else {
            setFBData({});
        }
    })
  }, []);
  const data = Object.values(FBData).sort((a, b) => a['points'] < b['points'] ? 1 : -1)

  return (
    <MainModal>
      <ModalContent>
      <CloseModal src={btnClose} onClick={props.closeModal} />
        <Title src={title} />
        <WrapperContent>
          <WrapperUser>
            <UserPosition>1º</UserPosition>
            <UserName>{data[0]?.name}</UserName>
            <UserPoints>{`0000${data[0]?.points}`.slice(-4)}</UserPoints>
          </WrapperUser>
          <WrapperUser>
            <UserPosition>2º</UserPosition>
            <UserName>{data[1]?.name}</UserName>
            <UserPoints>{`0000${data[1]?.points}`.slice(-4)}</UserPoints>
          </WrapperUser>
          <WrapperUser>
            <UserPosition>3º</UserPosition>
            <UserName>{data[2]?.name}</UserName>
            <UserPoints>{`0000${data[2]?.points}`.slice(-4)}</UserPoints>
          </WrapperUser>
          <WrapperUser>
            <UserPosition>4º</UserPosition>
            <UserName>{data[3]?.name}</UserName>
            <UserPoints>{`0000${data[3]?.points}`.slice(-4)}</UserPoints>
          </WrapperUser>
          <WrapperUser>
            <UserPosition>5º</UserPosition>
            <UserName>{data[4]?.name}</UserName>
            <UserPoints>{`0000${data[4]?.points}`.slice(-4)}</UserPoints>
          </WrapperUser>
    
        </WrapperContent>
      </ModalContent>
    </MainModal>
  );
};

export default PlayerModal;
