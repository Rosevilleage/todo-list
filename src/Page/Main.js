import styled from "styled-components";
import TodoHreader from '../component/TodoHeader'
import TodoList from "../component/TodoList";
import image from './../mainimg.png'
import { useEffect } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fill } from "../store/store";

const MainContainer = styled.main`
	height: 100%;
	flex-basis: 80%;
	border-radius: 9px 6px 6px 9px;
	background-color: rgb(179, 192, 192);
	background-size: cover;
`
// background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${image});

export default function Main() {
	const todos = useSelector(state=>state.todo.value)
	const load = useSelector(state=>state.load.value);
	const dispatch = useDispatch()
	
	const location = useLocation()
	useEffect(()=>{
		axios.get(`http://localhost:4000${location.pathname}`)
		.then(data=>dispatch(fill(data.data)))
		.catch(e=>console.error(e.message))
	},[location.pathname, load])

	return (
		<MainContainer>
				<TodoHreader pathname={location.pathname}/>
				<TodoList />
		</MainContainer>
	)
}