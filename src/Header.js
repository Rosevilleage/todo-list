
import styled from "styled-components";
import UserInfo from "./component/UserInfo";

const HeaderContainer = styled.header`
	height: 100%;
	flex-basis: 20%;
	>.line {
		height:35px;
		width: calc(100% - 5px);
		background-color: rgba(125, 125, 125, 0.25);
		border-radius: 0 5px 5px 0;
		display: flex;
		align-items: center;
		> p {
			margin-left: 0.8rem;
		}
	}
`;

const Nav = styled.nav`
	padding: 0 10px;
`
const Button=styled.div`
	height: 50px;
	font-size: 1.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`

const Icon=styled.div`
font-size: 1.5rem;
position: absolute;
left: 0;
`

export default function Header() {
	return (
		<HeaderContainer>
			<UserInfo/>
			<div className="line"><p>day</p></div>
			<Nav>
				<Button>
					<Icon><i class="fa-regular fa-star"></i></Icon>
					 <div>Daily to do</div>
				</Button>
				<Button>
				<Icon><i class="fa-regular fa-face-smile"></i></Icon>
				<div>Completed</div>
				</Button>
			</Nav>
		</HeaderContainer>
	)
}