import styled from "styled-components"

const TodoHead = styled.div`
	margin: 30px 40px 10px 40px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Title=styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	color: white;
	margin: 0;
	>.title {
		font-size: 2rem;
		font-weight: bold;
	}
	>.date {
		font-size: 0.8rem;
	}
`

const Delete= styled.button`
	height: 45%;
	width: 30px;
	border: none;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.7);
	&:active {
		background-color: rgba(206, 203, 203, 0.7);
		box-shadow : 1px 1px 2px -1px inset;
	}
`

export default function TodoHreader({handleChoice}) {
	return (
		<>
			<TodoHead>
				<Title>
					<span className="title">My Day</span>
					<span className="date">Saturday, March 11th</span>
				</Title>
				<Delete onClick={handleChoice}>
				<i class="fa-regular fa-trash-can"></i>
				</Delete>
			</TodoHead>
		</>
	)
}