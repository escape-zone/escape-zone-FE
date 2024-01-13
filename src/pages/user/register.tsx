import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRecoilState, useSetRecoilState } from 'recoil';

import UserLayer from '@pages/user/userLayer';

import logo from '@assets/images/logo_icon.png';

import Button, { ButtonType } from '@components/atoms/Button';
import Input, { InputType } from '@components/atoms/Input';

import { englishReg, koreanReg, specialTextReg } from '@constants/regex';

import { userRegister } from '@api/user';
import { IToast, toastState } from '@recoil/toast';

function Register() {
	const navigate = useNavigate();

	const setToast = useSetRecoilState(toastState);

	const [userInfo, setUserInfo] = useState({ name: '', nickName: '', id: '', password: '' });

	const handleUser = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		let inputValue = value.trim();

		if (name === 'name') {
			inputValue = value.replace(englishReg, '');
		} else if (name === 'id') {
			inputValue = value.replace(koreanReg, '').replace(specialTextReg, '');
		}

		setUserInfo((userInfo) => ({ ...userInfo, [name]: inputValue }));
	}, []);

	const handleRegister = () => {
		console.log('?? handleRegister');
		const checkEmpty = Object.values(userInfo).some((value) => value);
		if (!checkEmpty) {
			console.log(checkEmpty);
			// toast
			setToast({ isOpen: true, type: 'info', text: '정보를 입력해주세요' });
			return;
		}

		userRegister(userInfo);
	};

	return (
		<UserLayer>
			<div className="flex justify-center">
				<img src={logo} width={100} alt="logo" />
			</div>
			<Input type={InputType.Text} name="name" label="이름" placeholder="이름" value={userInfo.name} onChange={handleUser} />
			<Input type={InputType.Text} name="nickName" label="닉네임" placeholder="닉네임" value={userInfo.nickName} onChange={handleUser} />
			<Input type={InputType.Text} name="id" label="아이디" placeholder="아이디" value={userInfo.id} onChange={handleUser} />
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
