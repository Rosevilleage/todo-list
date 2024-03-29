import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import usePost from "../hooks/usePost";

const rotate = keyframes`
from{
	transform: rotate(0)
}
20%{
	transform: rotate(-20deg)
}
40%{
	transform: rotate(20deg)
}
60%{
	transform: rotate(-10deg)
}
80%{
	transform: rotate(10deg)
}
to{
	transform: rotate(-5deg)
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 13px;
  margin-bottom: 4px;
  background-color: rgba(255, 255, 255, 0.75);
  font-weight: 500;
  > .date {
    justify-self: end;
    color: gray;
    font-size: 12px;
  }
  > .is-done {
    color: gray;
    text-decoration: line-through;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  flex-basis: 88%;
  > p {
    margin-left: 10px;
    text-align: left;
    word-break: break-all;
  }
  > .is-done {
    color: gray;
    text-decoration: line-through;
  }
`;

const Right = styled.div`
  margin-right: 10px;
  color: rgb(95, 95, 95);
`;

const DeleteBnt = styled.div`
  font-size: 1.1rem;
  margin-right: 10px;
  > i {
    animation: ${rotate} 1s linear infinite;
  }
`;

export const CheckBox = styled.input`
  appearance: none;
  border: 1.5px solid rgb(95, 95, 95);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;

  &.checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: rgb(95, 95, 95);
  }
`;

export default function Todo({ data }) {
  const isDelete = useSelector((state) => state.isDelete.value);
  const post = usePost();
  return (
    <Container>
      <Left>
        <CheckBox
          type="checkbox"
          className={data.done ? "checked" : ""}
          onClick={() => post("done", data.id)}
        />
        <p className={data.done && "is-done"}>{data.text}</p>
      </Left>
      <p className={`date ${data.done && "is-done"}`}>
        {data.date.slice(0, 10)}
      </p>
      {!isDelete ? (
        <Right>
          <i
            class={data.daily ? "fa-solid fa-star" : "fa-regular fa-star"}
            onClick={() => post("daily", data.id)}
          ></i>
        </Right>
      ) : (
        <DeleteBnt>
          <i
            class="fa-regular fa-trash-can"
            onClick={() => post("delete", data.id)}
          ></i>
        </DeleteBnt>
      )}
    </Container>
  );
}
