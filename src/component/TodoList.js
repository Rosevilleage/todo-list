import { useState } from "react";
import styled from "styled-components";
import { dumyData } from "../dumydata";
import Todo from "./Todo";

const TodoContainer = styled.div`
	margin: 0 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: calc(100% - 154px); 
`
const Inputform=styled.div`
	border-radius: 13px;
	height: 50px;
	text-align: left;
	display: flex;
	justify-content: ${(props)=>props.id!=='wirte'?'space-between':'start'};
	align-items: center;
	background-color: rgba(255, 255, 255, 0.75);
	font-weight: 600;
	> div {
		margin: 0 15px 0 20px;
		font-size: 1.3rem
	}
	
`

const Input=styled.input`
	border: none;
	flex-basis: 50%;
	background-color: transparent;
	font-size: 1.3rem;
	margin-left: 1rem;
	&:focus {outline: none};
`

const AddButton=styled.button`
	margin: 0 0.8rem;
	background-color: transparent;
	font-size: 1.3rem;
	border: none;
	&:active {
		border-radius: 20%;
		background-color: rgb(95, 95, 95);
		color: white;
	}
`

	function AddTask({handleAddForm}) {
	return (
		<>
			<AddButton onClick={handleAddForm} id='left'>
				<i class="fa-solid fa-plus"></i>
			</AddButton>
			<p>Add task due today</p>
		</>
	)
}

function TodoInput({handleAddForm, todos, setTodos}) {
	const [newText, setnewText] = useState('')

	const handleChange=(e)=>{
		setnewText(e.target.value);
	}

	return (
		<>
			<Input 
				type='text'
				value={newText}
				onChange={handleChange}
				onKeyUp={(e)=>{
					if(e.key==='Enter'){
					setTodos([...todos,{id:todos.length+1, text:newText}])
					handleAddForm()}}}
				></Input>
			<AddButton 
				onClick={()=>{
					setTodos([...todos,{id:todos.length+1, text:newText}])
					handleAddForm()
				}
				}
			>
				<i class="fa-solid fa-plus"></i>
			</AddButton>
		</>
	)
}

export default function TodoList({todos, setTodos}) {
	const [isAdd, setIsAdd] = useState(false);

	const handleAddForm=()=>{
		setIsAdd(!isAdd);
	}
	return (
		<TodoContainer>
			<div>
				{todos.map(x=><Todo key={x.id} text={x.text} />)}
			</div>
			<div>
				<Inputform id={!isAdd?'':'wirte'}>
					{!isAdd?<TodoInput handleAddForm={handleAddForm} todos={todos} setTodos={setTodos}/>:<AddTask handleAddForm={handleAddForm}/>}
				</Inputform>
			</div>
		</TodoContainer>
	)
}