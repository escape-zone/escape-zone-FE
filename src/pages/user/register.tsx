import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { aliveCheck } from '@src/api/aliveCheck';

import UserLayer from '@pages/user/userLayer';

import logo from '@assets/images/logo_icon.png';

import Button, { ButtonType } from '@components/atoms/Button';
import Input, { InputType } from '@components/atoms/Input';

function Register() {
	const navigate = useNavigate();

	useEffect(() => {
		// aliveCheck();
	}, []);

	return (
		<UserLayer>
			<div className="flex justify-center">
				<img src={logo} width={100} alt="logo" />
			</div>
			<Input type={InputType.Text} label="이름" placeholder="이름" />
			<Input type={InputType.Text} label="닉네임" placeholder="닉네임" />
			<Input type={InputType.Text} label="아이디" placeholder="아이디" />
			<Input type={InputType.Password} label="비밀번호" placeholder="비밀번호" />

			<div className="grid gap-4 grid-cols-1 pt-3">
				<Button
					type={ButtonType.Primary}
					text={'가입하기'}
					onClick={() => {
						console.log('REGISTER API');
					}}
				/>
				<Button
					type={ButtonType.Default}
					text={'취소'}
					onClick={() => {
						navigate('/login');
					}}
				/>
			</div>
		</UserLayer>
	);
}

export default Register;
