import styled from "styled-components"
import CalendarHead from "../component/calendar/CalendarHead"
import { addMonths, subMonths } from "date-fns"
import CalendarDays from "../component/calendar/CalendarDays"
import CalenderBoard from '../component/calendar/CalendarBoard'
import { useState } from "react"

const Container = styled.div`
	border: 1px solid red;
	flex-basis: 80%;
	padding: 20px;
`

function Calendar() {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());
	const prevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1))
	}
	const nextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1))
	}
	const onDateClick = (day) => {
		setSelectedDate(day)
	}
	return (
		<Container>
			<CalendarHead currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
			<CalendarDays />
			<CalenderBoard currentMonth={currentMonth} selectedDate={selectedDate} onDateClick={onDateClick}/>
		</Container>
	)
}

export default Calendar