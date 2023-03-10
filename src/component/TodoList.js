import { useState } from "react";
import styled from "styled-components";
import { dumyData } from "../dumydata";
import Todo from "./Todo";

const TodoContainer = styled.div`
	margin: 0 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: calc(100% - 154px); 
`
const Input=styled.div`
	border-radius: 13px;
	height: 50px;
	text-align: left;
	display: flex;
	justify-content: start;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.75);
	font-weight: 600;
	> div {
		margin: 0 15px 0 20px;
		font-size: 1.3rem
	}
`

export default function TodoList() {
	const [data, setData] = useState(dumyData);

	return (
		<TodoContainer>
			<div>
				{data.map(x=><Todo key={x.id} text={x.text} />)}
			</div>
			<div>
				<Input>
					<div>
						<i class="fa-solid fa-plus"></i>
					</div>
					<p>Add task due today</p>
				</Input>
			</div>
		</TodoContainer>
	)
}