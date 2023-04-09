import { useDispatch } from "react-redux"
import { addOn } from "../store/store"
import styled from "styled-components";

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

function AddTask() {
	const	dispatch = useDispatch()
	return (
		<>
			<AddButton onClick={()=>dispatch(addOn())} id='left'>
				<i class="fa-solid fa-plus"></i>
			</AddButton>
			<p>Add task due today</p>
		</>
	)
}

export default AddTask