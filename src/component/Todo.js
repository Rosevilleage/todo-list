import styled from "styled-components"

const Container=styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 13px;
	margin-bottom: 4px;
	background-color: rgba(255, 255, 255, 0.75);
	font-weight: 500;
	>.left {
		display: flex;
		align-items: center;
		margin-left: 10px;
	}
	>.left > p {
		margin-left: 10px;
	}

	>.right {
		margin-right: 10px;
		color: rgb(95, 95, 95);
	}
`

const CheckBox=styled.input`
appearance: none;
border: 1.5px solid rgb(95, 95, 95);
border-radius: 50%;
width: 1.5rem;
height: 1.5rem;

&:checked {
	border-color: transparent;
	background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
	background-size: 100% 100%;
	background-position: 50%;
	background-repeat: no-repeat;
	background-color: rgb(95, 95, 95);
}
`

export default function Todo({text}) {
	return (
		<Container>
			<div className="left">
				<CheckBox type="checkbox"/>
				<p>{text}</p>
			</div>
			<div className="right">
				<i class="fa-regular fa-star"></i>
			</div>
		</Container>
	)
}