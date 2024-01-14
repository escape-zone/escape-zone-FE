import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';

import Button, { ButtonType } from '@components/atoms/Button';
import Input, { InputType } from '@components/atoms/Input';

import UserLayer from '@pages/user/userLayer';

import logo from '@assets/images/logo_icon.png';

import { emailSpecialTextReg, englishReg, koreanReg } from '@constants/regex';

import { userRegister } from '@api/user';

import { toastState } from '@recoil/toast';

function Register() {
	const navigate = useNavigate();

	const setToast = useSetRecoilState(toastState);

	const [userInfo, setUserInfo] = useState({ name: '', nickName: '', email: '', password: '' });

	const handleUser = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		let inputValue = value.trim();

		if (name === 'name') {
			inputValue = value.replace(englishReg, '');
		}

		if (name === 'email') {
			inputValue = value.replace(koreanReg, '').replace(emailSpecialTextReg, '');
		}

		setUserInfo((userInfo) => ({ ...userInfo, [name]: inputValue }));
	}, []);

	const handleRegister = () => {
		const checkEmpty = Object.values(userInfo).some((value) => value);
		if (!checkEmpty) {
			setToast({ isOpen: true, type: 'info', text: '정보를 입력해주세요' });
			return;
		}

		const response = userRegister(userInfo);
		console.log(response);
	};

	return (
		<UserLayer>
			<div className="flex justify-center">
				<img src={logo} width={100} alt="logo" />
			</div>
			<Input type={InputType.Text} name="name" label="이름" placeholder="이름" value={userInfo.name} onChange={handleUser} />
			<Input type={InputType.Text} name="nickName" label="닉네임" placeholder="닉네임" value={userInfo.nickName} onChange={handleUser} />
			<Input type={InputType.Text} name="email" label="이메일" placeholder="이메일" value={userInfo.email} onChange={handleUser} />
			<Input type={InputType.Password} name="password" label="비밀번호" placeholder="비밀번호" value={userInfo.password} onChange={handleUser} />

			<div className="grid gap-4 grid-cols-1 pt-3">
				<Button type={ButtonType.Primary} text={'가입하기'} onClick={handleRegister} />
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
