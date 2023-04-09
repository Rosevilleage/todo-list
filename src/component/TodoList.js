import styled from "styled-components";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import AddTask from "./AddTask";

const TodoContainer = styled.div`
	margin: 0 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: calc(100% - 154px);
	flex-wrap: row;
	>.list {
		overflow-y: scroll;
	}
`
const Inputform=styled.div`
	border-radius: 13px;
	height: 50px;
	text-align: left;
	display: flex;
	justify-content: ${(props)=>props.id==='wirte'?'space-between':'start'};
	align-items: center;
	background-color: rgba(255, 255, 255, 0.75);
	font-weight: 600;
	> div {
		margin: 0 15px 0 20px;
		font-size: 1.3rem
	}
`

export default function TodoList() {
	const isAdd = useSelector(state=>state.isAdd.value)
	const todos = useSelector(state=>state.todo.value)
	
	return (
		<TodoContainer>
			<div className="list">
				{todos.map(x=><Todo key={x.id} data={x}/>)}
			</div>
			<div>
				<Inputform id={isAdd?'wirte':''}>
					{isAdd?<TodoInput/>:<AddTask/>}
				</Inputform>
			</div>
		</TodoContainer>
	)
}