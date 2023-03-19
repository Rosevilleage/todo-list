import styled from "styled-components";
import TodoHreader from './component/TodoHeader'
import TodoList from "./Page/TodoList";
import image from './background.png'
import { useState } from "react";

const MainContainer = styled.main`
	height: 100%;
	flex-basis: 80%;
	border-radius: 9px 6px 6px 9px;
	background-image: linear-gradient( rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15) ), url(${image});
	background-size: cover;
`

export default function Main({todos, setTodos}) {
	const [choice, setChoie] = useState(false);
	const handleChoice=()=>{
		setChoie(!choice);
	}

	return (
		<MainContainer>
				<TodoHreader handleChoice={handleChoice}/>
				<TodoList todos={todos} setTodos={setTodos} choice={choice}/>
		</MainContainer>
	)
}