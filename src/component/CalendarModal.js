import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Container, CheckBox } from "./Todo";
import usePost from "../hooks/usePost";
import { modalToggle } from "../store/CalendarSlice";

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  flex-basis: 80%;
  border-radius: 10px 0 0 10px;
  background-color: rgba(0, 0, 0, 0.3);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 60%;
  height: 70%;
  padding: 0 10px 20px;
  background-color: rgb(160, 192, 192);
  border-radius: 15px;
  overflow-y: scroll;

  > .top {
    width: 100%;
    display: flex;
    justify-content: end;
    > button {
      border: none;
      padding: 3px;
      background-color: inherit;
      color: white;
      font-size: 1.5rem;
      margin-bottom: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const TodoContainer = styled(Container)`
  padding: 5px;
  border-radius: 10px;
`;

export default function CalendarModal() {
  const selD = useSelector((state) => state.selectedDate.value);
  const [todoItem, setTodoItem] = useState([]);
  const post = usePost();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.post("filtered", { date: selD.slice(0, 10) }).then((res) => {
      console.log(res.data);
      setTodoItem(res.data);
    });
  }, [selD]);

  const closeHandle = (e) => {
    e.defaultPrevented();
    dispatch(modalToggle());
  };

  return (
    <Background onClick={() => dispatch(modalToggle())}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <div className="top">
          <button onClick={closeHandle}>x</button>
        </div>
        {todoItem.map((e) => (
          <TodoContainer key={e.id}>
            <p className={e.done && "is-done"}>{e.text}</p>
            <CheckBox
              type="checkbox"
              className={e.done ? "checked" : ""}
              onClick={() => post("done", e.id)}
            />
          </TodoContainer>
        ))}
      </ModalContainer>
    </Background>
  );
}
