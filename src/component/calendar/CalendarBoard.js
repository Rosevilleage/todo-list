import { addDays, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, startOfMonth, startOfWeek } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {Select} from '../../store/CalendarSlice'

const Body = styled.div`
	width: 100%;
	height: 85%;
	display: flex;
	flex-direction: column;
`

const Day = styled.div`
	border: 1px solid black;
	border-radius: 5%;
	flex-basis: 14%;
	display: flex;
	align-item: center;
	justify-content: center;
	font-weight: 500;

	&.selected {
		background-color: rgba(191, 208, 237, 0.88);
	}
	&.disavled {
		background-color: rgba(217, 217, 217, 0.85);
	}
	&.vaild {
		background-color: rgba(255, 255, 255, 0.85);
	}
	&.not-vaild {
		background-color: purple;
	}
	>.not-vaild {
		color: gray;
	}
`

const Week = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: space-around;
	margin-top: 1px;
`

export default function CalenderBoard() {
	const currentMonth = useSelector((state)=>state.calendar.value);
	const selectedDate = useSelector(state=>state.selectedDate.value);
	const dispatch = useDispatch();

	const monthStart = startOfMonth(currentMonth);
	const monthEnd = endOfMonth(monthStart);
	const startDate = startOfWeek(monthStart);
	const endDate = endOfWeek(monthEnd);
	const row = [];
	let days = [];
	let day = startDate;
	let formattedDate = '';

	while(day<=endDate) {
		for(let i=0;i<7;i++) {
			formattedDate = format(day,'d');
			const cloneDay = day;
			days.push(
				<Day
					className={
						!isSameMonth(day, monthStart)
						? 'disavled'
						: isSameDay(day, selectedDate)
						? 'selected'
						: format(currentMonth, 'M') !== format(day, 'M')
						? 'not-vaild'
						: 'vaild'
					}
					key={day}
					onClick={()=>dispatch(Select(cloneDay))}
				>
					<span
						className={
							format(currentMonth,'M')!==format(day,'M')
							? 'not-vaild' : ''
						}
					>{formattedDate}</span>
				</Day>
			)
			day = addDays(day,1)
		}
		row.push(
			<Week key={day}>{days}</Week>
		);
		days=[]
	}
	return <Body>{row}</Body>
}