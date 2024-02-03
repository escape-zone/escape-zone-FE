import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CardLayout from '@components/molecules/Layout/CardLayer';
import Input, { InputType } from '@components/atoms/Input';
import Button, { ButtonType } from '@components/atoms/Button';
import Divider, { DividerType } from '@components/atoms/Divider';

import useToast from '@hooks/useToast';
import useUser from '@hooks/useUser';

import { Player } from '@lottiefiles/react-lottie-player';

import loginLottie from '@assets/lottie/login.json';

import { emailSpecialTextReg, koreanReg } from '@constants/regex';
import { aliveCheck } from '@api/aliveCheck';

const Login = () => {
	const navigate = useNavigate();

	const { setToast } = useToast();

	const { login } = useUser();

	const [userInfo, setUserInfo] = useState({ email: '', password: '' });

	useEffect(() => {
		aliveCheck();
	}, []);

	const handleUser = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		const inputValue = name === 'email' ? value.replace(koreanReg, '').replace(emailSpecialTextReg, '').trim() : value.trim();
		setUserInfo((userInfo) => ({ ...userInfo, [name]: inputValue }));
	}, []);

	const handleLogin = async () => {
		const checkEmpty = Object.values(userInfo).some((value) => value);
		if (!checkEmpty) {
			setToast({ isOpen: true, type: 'info', text: '이메일 또는 비밀번호를 입력해주세요' });
			return;
		}

		await login(userInfo);
	};

	const handleRegister = () => {
		navigate('/register');
	};

	return (
		<CardLayout>
			<h1 className="text-4xl font-bold text-primary">새로운</h1>
			<h1 className="text-4xl font-bold text-primary">방탈출의 시작!</h1>
			<p className="text-sm text-gray-500">
				전국 방탈출이 모두 모여있는 Escape Zone에서
				<br />
				당신의 모험을 시작해보세요
			</p>

			<Player autoplay speed={1} loop src={loginLottie} style={{ height: '250px', width: '250px', padding: '10px' }} />

			<Input type={InputType.Text} placeholder="이메일" name="email" value={userInfo.email} onChange={handleUser} />
			<Input type={InputType.Password} placeholder="비밀번호" name="password" value={userInfo.password} onChange={handleUser} />
			<Button type={ButtonType.Primary} text="시작하기" onClick={handleLogin} />
			<Divider type={DividerType.Default} text="계정이 없다면" />
			<Button type={ButtonType.Primary} text="가입하기" onClick={handleRegister} />
		</CardLayout>
	);
};

export default Login;
