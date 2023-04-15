import { useMemo } from "react"
import styled from "styled-components";

const Dayscontainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: auto 1px;
`

const DayItem = styled.div`
	border: 1px solid gray;
	border-radius: 3px;
	flex-basis: 14%;
	background-color: rgba(255, 246, 204, 0.75);
`

export default function CalendarDays() {
	const date = useMemo(()=>{
		return ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];
	},[])
	return (
		<Dayscontainer>
			{date.map((e,i)=>{
			 return	<DayItem key={i}>{e}</DayItem>
			})}
		</Dayscontainer>
	)
}