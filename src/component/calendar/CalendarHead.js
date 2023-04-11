import { format } from "date-fns";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border: 1px solid orange;
`

const YearMonth = styled.div`
	border: 1px solid green;
	flex-basis: 80%;
	text-align: left;
`

const ButtonContainer = styled.div`
	border: 1px solid blue;
	flex-basis: 10%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`

export default function CalendarHead({currentMonth, prevMonth, nextMonth}) {
	return (
		<HeaderContainer>
			<YearMonth>
				<span>
					{format(currentMonth, 'M')}월
				</span>
				<span>
					{format(currentMonth,'yyyy')}
				</span>
			</YearMonth>
			<ButtonContainer>
				<FontAwesomeIcon icon={faCaretLeft} onClick={prevMonth} size="xl"/>
				<FontAwesomeIcon icon={faCaretRight} onClick={nextMonth} size="xl"/>
			</ButtonContainer>
		</HeaderContainer>
	)
}