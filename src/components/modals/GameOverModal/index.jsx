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
import { useNavigate } from "react-router-dom";

import { useScoreContext } from "../../../contexts/scoreContext";
import fireDb from "../../../dataBase/firebase";
import { useState } from "react";

const GameOverModal = () => {
  const navigate = useNavigate();
  const { dataScore, setDataScore } = useScoreContext();

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
    add(values);
}
  const add = (obj) => {
    fireDb.child("bestScore").push(
        obj,
        (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Success save");
                navigate("/")
                setDataScore(0);
            }
        },
    
    );
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
