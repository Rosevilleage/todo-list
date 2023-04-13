import { useMemo } from "react"
import styled from "styled-components";

const Dayscontainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`

const DayItem = styled.div`
	border: 1px solid purple;
	border-radius: 3px;
	flex-grow: 1;
	margin 3px;
`

export default function CalendarDays() {
	const date = useMemo(()=>{
		return ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];
	},[])
	console.log(date)
	return (
		<Dayscontainer>
			{date.map((e,i)=>{
			 return	<DayItem key={i}>{e}</DayItem>
			})}
		</Dayscontainer>
	)
}