import styled from "styled-components";
import TodoHreader from './component/TodoHeader'
import TodoList from "./component/TodoList";
import image from './background.png'

const MainContainer = styled.main`
	height: 100%;
	flex-basis: 80%;
	border-radius: 9px 6px 6px 9px;
	background-image: linear-gradient( rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15) ), url(${image});
	background-size: cover;
`

export default function Main({todos, setTodos}) {
	return (
		<MainContainer>
				<TodoHreader />
				<TodoList todos={todos} setTodos={setTodos}/>
		</MainContainer>
	)
}