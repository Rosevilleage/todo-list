import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import {deleteTrigger} from './../store/store'
import { format } from "date-fns"

const TodoHead = styled.div`
	margin: 30px 40px 10px 40px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: rgba(50, 50, 50,0.8);
	border-radius: 8px;
`

const Title=styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	color: white;
	margin-left: 10px;
	>.title {
		font-size: 2rem;
		font-weight: bold;
	}
	>.date {
		font-size: 0.8rem;
	}
`

const Delete= styled.button`
	height: 45%;
	width: 30px;
	margin-right: 10px;
	border: none;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.7);
	&:active {
		background-color: rgba(206, 203, 203, 0.7);
		box-shadow : 1px 1px 2px -1px inset;
	}
`

export default function TodoHreader({pathname}) {
	const isDelete = useSelector(state=>state.isDelete.value);
	const curM = useSelector(state=>state.calendar.value)
	const currentMonth = new Date(curM);
	const dispatch = useDispatch()
	let title = useMemo(()=>{
		switch(pathname) {		
			case '/daily' :
				return 'Daily To Do'
			case '/done' :
				return 'Completed To Do'
			default :
				return 'My Day'
		}
	}, [pathname])
	return (
		<>
			<TodoHead>
				<Title>
					<span className="title">{title}</span>
					<span className="date">{`${format(currentMonth, 'EEEE')}, ${format(currentMonth, 'MMMM')} ${format(currentMonth, 'do')}`}</span>
				</Title>
				<Delete onClick={()=>dispatch(deleteTrigger(!isDelete))}>
				<i class={isDelete?"fa-regular fa-star":"fa-regular fa-trash-can"}></i>
				</Delete>
			</TodoHead>
		</>
	)
}
// EEEE,MMMMM,qo