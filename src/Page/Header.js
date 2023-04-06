
import styled from "styled-components";
import UserInfo from "../component/UserInfo";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
	height: 100%;
	flex-basis: 20%;
	>.line {
		height:35px;
		width: calc(100% - 5px);
		background-color: rgba(49, 49, 49, 0.25);
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
	display: flex;
	justify-content: start;
	align-items: center;
	position: relative;
`

const Icon=styled.div`
font-size: 1.5rem;
margin-right: 1rem;

`
const NavStyle=styled(NavLink)`
font-size: 1.5rem;
align-text: start;
font-weight: 450;
&:link {
	transition : 0.5s;
	text-decoration: none;
}
&:visited {
	color: black;
}
`

export default function Header() {
	return (
		<HeaderContainer>
			<UserInfo/>
			<div className="line"></div>
			<Nav>
				<NavStyle to={'/'} active>
					<Button>
						<Icon><i class="fa-solid fa-house"></i></Icon>
						<div>All</div>
					</Button>
				</NavStyle>
				<NavStyle to={'/daily'}>
					<Button>
						<Icon><i class="fa-regular fa-star"></i></Icon>
						<div>Daily to do</div>
					</Button>
				</NavStyle>
				<NavStyle to={'/done'}>
					<Button>
					<Icon><i class="fa-regular fa-face-smile"></i></Icon>
					<div>Completed</div>
					</Button>
				</NavStyle>
			</Nav>
		</HeaderContainer>
	)
}