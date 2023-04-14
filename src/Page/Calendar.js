import styled from "styled-components"
import CalendarHead from "../component/calendar/CalendarHead"
import CalendarDays from "../component/calendar/CalendarDays"
import CalenderBoard from '../component/calendar/CalendarBoard'

const Container = styled.div`
	height: 100%;
	flex-basis: 80%;
	border-radius: 9px 6px 6px 9px;
	background-color: rgb(179, 192, 192);
	background-size: cover;
	padding: 20px;
`

function Calendar() {
	return (
		<Container>
			<CalendarHead />
			<CalendarDays />
			<CalenderBoard />
		</Container>
	)
}

export default Calendar