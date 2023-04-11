import styled from "styled-components"
import CalendarHead from "../component/calendar/CalendarHead"
import { addMonths, subMonths } from "date-fns"
import { useState } from "react"
import { useEffect } from "react"

const Container = styled.div`
	border: 1px solid red;
	flex-basis: 80%;
`

function Calendar() {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const prevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1))
	}
	const nextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1))
	}
	return (
		<Container>
			<CalendarHead currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
			<div>Days</div>
			<div>Cells</div>
		</Container>
	)
}

export default Calendar