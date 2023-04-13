import { addDays, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, parse, startOfMonth, startOfWeek } from "date-fns";
import styled from "styled-components";

const Body = styled.div`
	border: 1px solid red;
	height: 90%;
	display: flex;
	flex-direction: column;
`

const Day = styled.div`
	border: 1px solid black;
	flex-basis: 14%;
	display: flex;
	align-item: center;
	justify-content: center;
`

const Week = styled.div`
	border: 1px solid orange;
	flex-grow: 1;
	display: flex;
	justify-content: space-around;
`

export default function CalenderBoard({currentMonth, selectedDate, onDateClick}) {
	const monthStart = startOfMonth(currentMonth);
	const monthEnd = endOfMonth(monthStart)
	const startDate = startOfWeek(monthStart)
	const endDate = endOfWeek(monthEnd)

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
					onClick={()=>onDateClick(parse(cloneDay))}
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