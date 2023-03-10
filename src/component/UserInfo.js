import styled from "styled-components"
import icon from './../userimage.png'

const UserForm = styled.div`
	display: flex;
	align-items:center;
	> div{
		text-align: left;
	}
`

const Img = styled.div`
	border-radius: 50%;
	margin: 0.8rem;
	width: 50px;
	height: 50px;
	background-image: url(${icon});
	background-size: cover;
	background-position: center;
`

export default function UserInfo() {
	return (
		<UserForm>
			<Img/>
			<div>
				<p>홍길동</p>
				<p>방방곡곡@gmail.com</p>
			</div>
		</UserForm>
	)
}