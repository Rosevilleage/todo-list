import styled from "styled-components";
import TodoHreader from '../component/TodoHeader'
import TodoList from "./TodoList";
import image from './../mainimg.png'
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";

const MainContainer = styled.main`
	height: 100%;
	flex-basis: 80%;
	border-radius: 9px 6px 6px 9px;
	background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${image});
	background-size: cover;
`

export default function Main() {
	const [choice, setChoie] = useState(false);
	const [todos, setTodos] = useState([]);
	const [change, setChange] = useState(false);
	const handleChoice=()=>{
		setChoie(!choice);
	}
	const handleChange=()=>{
		setChange(!change);
	}
	
	const location = useLocation()

	useEffect(()=>{
		// console.log(location)
		axios.get(`http://localhost:4000${location.pathname}`)
		.then(data=>setTodos(data.data))
		.catch(e=>console.error(e.message))
	},[location.pathname, change])

	return (
		<MainContainer>
				<TodoHreader choice={choice} handleChoice={handleChoice} location={location.pathname}/>
				<TodoList todos={todos} setTodos={setTodos} choice={choice} handleChange={handleChange}/>
		</MainContainer>
	)
}