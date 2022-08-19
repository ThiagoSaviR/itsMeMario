import {
  MainModal,
  ModalContent,
  Title,
  Paragraph,
  Span,
  Input,
  WrapperButton,
} from "./styles";

import gameOver from "../../../assets/img/gameOver.png";
import Button from "../../../components/button";

import { useScoreContext } from "../../../contexts/scoreContext";
import { useNavigate } from "react-router-dom";

const GameOverModal = () => {
  const navigate = useNavigate();
  const { dataScore, setDataScore, bestScore } = useScoreContext();

  return (
    <MainModal>
      <ModalContent>
        <Title src={gameOver} />
        <Paragraph>
          Your score:
          <Span>{`0000${dataScore}`.slice(-4)}</Span>
        </Paragraph>
        <Paragraph>
          Your BEST score:
          <Span>{`0000${bestScore}`.slice(-4)}</Span>
        </Paragraph>
        <Paragraph>would you like to save your score?</Paragraph>
          <Input type="text" placeholder="enter your name" />
        <WrapperButton>
          <Button
            text="Cancel"
            onclick={() => {
              navigate("/");
              setDataScore(0);

            }}
          />
          <Button
            text="Save"
            collor="yellow"
            onclick={() => {
              navigate("/");
              setDataScore(0);
            }}
          />
        </WrapperButton>
      </ModalContent>
    </MainModal>
  );
};

export default GameOverModal;
