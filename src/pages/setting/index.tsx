import React, { useCallback, useState } from 'react';

import Layout from '@components/molecules/Layout';
import Divider, { DividerType } from '@components/atoms/Divider';
import Input, { InputType } from '@components/atoms/Input';
import Button, { ButtonSize, ButtonType } from '@components/atoms/Button';

import Stamp from '@pages/stamp';

import { englishReg } from '@constants/regex';

import useToast from '@hooks/useToast';
import useUser from '@hooks/useUser';

const Setting = () => {
	const { setToast } = useToast();
	const { user, logout, changePassword, changeNickname } = useUser();

	const [isHistory, setIsHistory] = useState(false);
	const [isOpenSetting, setIsOpenSetting] = useState(false);

	const [userInfo, setUserInfo] = useState({ nickname: '', password: '' });

	const setting = document.getElementById('setting');
	setting?.addEventListener('click', () => {
		setIsOpenSetting(!isOpenSetting);
	});

	const history = document.getElementById('history');
	history?.addEventListener('click', () => {
		setIsHistory(!isHistory);
	});

	const handleUser = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const inputValue = name === 'name' ? value.replace(englishReg, '').trim() : value.trim();
		setUserInfo((userInfo) => ({ ...userInfo, [name]: inputValue }));
	}, []);

	const handleChangeValue = async (type: 'nickname' | 'password') => {
		if (type === 'nickname') {
			if (!userInfo.nickname) {
				setToast({ isOpen: true, type: 'info', text: '변경할 내역을 입력해주세요' });
				return;
			}

			changeNickname(userInfo.nickname);
			setUserInfo((userInfo) => ({ ...userInfo, [type]: '' }));
		}

		if (type === 'password') {
			if (!userInfo.password) {
				setToast({ isOpen: true, type: 'info', text: '변경할 내역을 입력해주세요' });
				return;
			}

			changePassword(userInfo.password);
			setUserInfo((userInfo) => ({ ...userInfo, [type]: '' }));
		}
	};

	const handleLogout = async () => {
		await logout({ email: user.email });
	};

	console.log(user);

	return (
		<Layout isBottomNav={true} title={'My Info'}>
			<div className="flex justify-center">
				<div className="stats shadow bg-gray-50">
					<div className="stat">
						<div className="stat place-items-center">
							<div className="stat-title">성공률</div>
							<div className="stat-value text-primary">25.6K</div>
							<div className="stat-desc">탈출 성공한 방</div>
						</div>
					</div>
					<div className="stat">
						<div className="stat place-items-center">
							<div className="stat-title">인기</div>
							<div className="stat-value">31K</div>
							<div className="stat-desc"> 나의 인기도</div>
						</div>
					</div>

					<div className="stat">
						<div className="stat place-items-center">
							<div className="stat-figure text-secondary">
								<div className="flex ml-4">
									<div className="avatar placeholder">
										<div className="bg-primary text-neutral-content rounded-full w-16">
											<span className="text-3xl">D</span>
										</div>
									</div>
								</div>
							</div>
							<div className="stat-value row-span-3">{`Hi, ${user.nickname}님`}</div>
						</div>
						<Button text="Logout" size={ButtonSize.Tiny} type={ButtonType.Ghost} onClick={handleLogout} />
					</div>
				</div>
			</div>

			<Divider type={DividerType.Neutral} />

			<div className="flex justify-center">
				<div className="collapse collapse-arrow bg-gray-50">
					<input
						type="radio"
						id="history"
						checked={isHistory}
						onChange={() => {
							setIsHistory(!isHistory);
						}}
					/>
					<div className="collapse-title text-xl font-medium">참여내역</div>
					<div className="collapse-content">
						<div>
							<Stamp />
						</div>
					</div>
				</div>
			</div>

			<div className="p-2"></div>

			<div className="flex justify-center">
				<div className="collapse collapse-arrow bg-gray-50">
					<input
						type="radio"
						id="setting"
						checked={isOpenSetting}
						onChange={() => {
							setIsOpenSetting(!isOpenSetting);
						}}
					/>
					<div className="collapse-title text-xl font-medium">설정</div>
					<div className="collapse-content">
						<div className="overflow-x-auto">
							<table className="table">
								<tbody>
									<tr>
										<td className="w-1/5">닉네임</td>
										<td className="w-2/5">
											<Input type={InputType.Text} name="nickname" placeholder="닉네임" value={userInfo.nickname} onChange={handleUser} />
										</td>
										<td className="w-1/5">
											<Button type={ButtonType.Primary} onClick={() => handleChangeValue('nickname')} text="변경" />
										</td>
									</tr>
									<tr>
										<td className="w-1/5">비밀번호</td>
										<td className="w-2/5">
											<Input type={InputType.Password} name="password" placeholder="비밀번호" value={userInfo.password} onChange={handleUser} />
										</td>
										<td className="w-1/5">
											<Button type={ButtonType.Primary} onClick={() => handleChangeValue('password')} text="변경" />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Setting;
