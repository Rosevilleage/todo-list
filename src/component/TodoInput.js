import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { trigger, addOff } from "../store/store";
import axios from "axios";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  flex-basis: 50%;
  background-color: transparent;
  font-size: 1.3rem;
  margin-left: 1rem;
  &:focus {
    outline: none;
  }
`;

const AddButton = styled.button`
  margin: 0 0.8rem;
  background-color: transparent;
  font-size: 1.3rem;
  border: none;
  &:active {
    border-radius: 20%;
    background-color: rgb(95, 95, 95);
    color: white;
  }
`;

function TodoInput() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = () => {
    axios.post("/addTodo", {
      text: inputRef.current.value,
      daily: false,
      done: false,
      date: new Date().toISOString().slice(0, 10),
    });
    inputRef.current.value = "";
    dispatch(trigger());
  };

  return (
    <>
      <Input
        ref={inputRef}
        type="text"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
          if (e.key === "Escape") {
            inputRef.current.value = "";
            dispatch(addOff());
          }
        }}
      ></Input>
      <AddButton
        onClick={() => {
          handleSubmit();
          dispatch(addOff());
        }}
      >
        <i class="fa-solid fa-plus"></i>
      </AddButton>
    </>
  );
}

export default TodoInput;
