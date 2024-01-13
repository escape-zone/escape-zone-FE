import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Player } from '@lottiefiles/react-lottie-player';

import loginLottie from '@assets/lottie/login.json';

import UserLayer from '@pages/user/userLayer';

import Input, { InputType } from '@components/atoms/Input';
import Button, { ButtonType } from '@components/atoms/Button';
import Divider, { DividerType } from '@components/atoms/Divider';

const Login = () => {
	const navigate = useNavigate();

	return (
		<UserLayer>
			<h1 className="text-4xl font-bold text-primary">새로운</h1>
			<h1 className="text-4xl font-bold text-primary">방탈출의 시작!</h1>
			<p className="text-sm text-gray-500">
				전국 방탈출이 모두 모여있는 Escape Zone에서 <br />
				당신의 모험을 시작해보세요
			</p>

			<Player autoplay speed={1} loop src={loginLottie} style={{ height: '300px', width: '300px' }} />

			<Input type={InputType.Text} placeholder="아이디" />
			<Input type={InputType.Password} placeholder="비밀번호" />
			<Button
				type={ButtonType.Primary}
				text="시작하기"
				onClick={() => {
					console.log('LOGIN API');
				}}
			/>
			<Divider type={DividerType.Default} text="계정이 없다면" />
			<Button
				type={ButtonType.Primary}
				text="가입하기"
				onClick={() => {
					navigate('/register');
				}}
			/>
		</UserLayer>
	);
};

export default Login;
