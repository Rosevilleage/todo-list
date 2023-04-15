import { format } from "date-fns";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { prevMonth, nextMonth } from "../../store/CalendarSlice";
const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin: auto 1px;
	color: white;
`

const YearMonth = styled.div`
	flex-basis: 80%;
	text-align: left;
	>.month {
		font-size: 1.3rem;
		font-weight: bold;
	}
`

const ButtonContainer = styled.div`
	flex-basis: 10%;
	display: flex;
	justify-content: end;
	align-items: center;
	margin-right: 8px;
`

export default function CalendarHead() {
	const curM = useSelector((state)=>state.calendar.value);
	const currentMonth = new Date(curM);
	const dispatch = useDispatch()
	return (
		<HeaderContainer>
			<YearMonth>
				<span className="month">
					{format(currentMonth, 'M')}월
				</span>
				<span>
					{` ${format(currentMonth,'yyyy')}`}
				</span>
			</YearMonth>
			<ButtonContainer>
				<FontAwesomeIcon icon={faCaretLeft} onClick={()=>dispatch(prevMonth())} size="xl"/>
				<FontAwesomeIcon icon={faCaretRight} onClick={()=>dispatch(nextMonth())} size="xl"/>
			</ButtonContainer>
		</HeaderContainer>
	)
}