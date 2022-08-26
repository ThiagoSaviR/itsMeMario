import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MainModal,
  ModalContent,
  Title,
  Paragraph,
  Span,
  Input,
  WrapperButton,
  Form,
} from "./styles";

import gameOver from "../../../assets/img/gameOver.png";
import Button from "../../button";

import { useScoreContext } from "../../../contexts/scoreContext";

const GameOverModal = () => {
  const navigate = useNavigate();
  const { dataScore, setDataScore, addToRanking } = useScoreContext();

  const initialValues = {
    name: "",
    points: dataScore
  }

  const [values, setValues] = useState(initialValues);

  const handlechange = (e) => {
    const { name, value } = e.target;
      setValues({ 
        ...values, 
        [name]: value 
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addToRanking(values);
  }

  return (
    <MainModal>
      <ModalContent>
        <Title src={gameOver} />
        <Paragraph>
          Your score:
          <Span>{`0000${dataScore}`.slice(-4)}</Span>
        </Paragraph>
        <Paragraph>would you like to save your score in the Ranking?</Paragraph>
        <Form autoComplete="off" onSubmit={onSubmit}>
          <Input 
          type="text" 
          placeholder="enter your name" 
          name="name"
          value={values.name}
          onChange={handlechange}
          />
          <WrapperButton>
            <Button
              text="Cancel"
              onclick={() => {
                navigate("/");
                setDataScore(0);
              }}
            />
            <Button
              type="submit"
              text="Save"
              collor="yellow"
              onclick={() => {
                }}
            />
          </WrapperButton>
        </Form>
      </ModalContent>
    </MainModal>
  );
};

export default GameOverModal;
