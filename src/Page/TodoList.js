import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Todo from "../component/Todo";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

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

function TodoInput({handleAddForm, todos, setTodos, handleLoad}) {
	const [newText, setnewText] = useState('')
	const inputRef = useRef(null);
	const handleChange=(e)=>{
		setnewText(e.target.value);
	}
	useEffect(()=>{
		inputRef.current.focus();
	},[])
	const handleSubmit=()=>{
		axios.post('http://localhost:4000/addTodo', {
			text: newText,
			daily: false,
			done: false
		})
		.then(res=>{
			setnewText('');
			handleAddForm();
			handleLoad()
		})
	}
	return (
		<>
			<Input
				ref={inputRef} 
				type='text'
				value={newText}
				onChange={handleChange}
				onKeyUp={(e)=>{
					if(e.key==='Enter'){
						// setTodos([...todos,{id:todos.length+1, text:newText, done:false, daily:false}])
						handleAddForm()
						handleSubmit();
					}
					if(e.key==='Escape') {
						setnewText('')
						handleAddForm()
					}
				}}
				></Input>
			<AddButton 
				onClick={()=>{
					// setTodos([...todos,{id:todos.length+1, text:newText, done:false, daily:false}])
					handleSubmit();
					handleAddForm()
				}
				}
			>
				<i class="fa-solid fa-plus"></i>
			</AddButton>
		</>
	)
}

export default function TodoList({todos, setTodos, choice, handleChange}) {
	const [isAdd, setIsAdd] = useState(false);

	const handleAddForm=()=>{
		setIsAdd(!isAdd);
	}

	const handleDone = (id) => {
		// const target=todos.filter(e=>e.id===id)[0]
		// const change=!target.done
		// setTodos([...todos.slice(0,id), {...target, done: change}, ...todos.slice(id+1)])
		axios.post('http://localhost:4000/done', {id})
		.then(res=>{
			console.log('ok')
			handleChange()
		})
	}

	const handleDaily = (id) => {
		// const target=todos.filter(e=>e.id===id)[0]
		// const change=!target.daily
		// setTodos([...todos.slice(0,id), {...target, daily: change}, ...todos.slice(id+1)])
		axios.post('http://localhost:4000/daily', {id})
		.then(res=>{
			console.log('ok')
			handleChange()
		})
	}

	const handleDelete = (id) => {
		// setTodos([...todos.filter(todo=>todo.id!==id)])
		axios.post('http://localhost:4000/delete', {id})
		.then(res=>{
			handleChange()
		})
		.catch(e=>console.error(e.message))
	}
	
	return (
		<TodoContainer>
			<div className="list">
				{todos.map(x=><Todo key={x.id} data={x} handleDaily={handleDaily} handleDone={handleDone} choice={choice} setTodos={setTodos} handleDelete={handleDelete}/>)}
			</div>
			<div>
				<Inputform id={isAdd?'wirte':''}>
					{isAdd?<TodoInput handleAddForm={handleAddForm} todos={todos} setTodos={setTodos} handleLoad={handleChange}/>:<AddTask handleAddForm={handleAddForm}/>}
				</Inputform>
			</div>
		</TodoContainer>
	)
}