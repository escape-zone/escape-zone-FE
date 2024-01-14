import React, { useCallback, useState } from 'react';

import Layout from '@components/molecules/Layout';
import Divider, { DividerType } from '@src/components/atoms/Divider';
import Input, { InputType } from '@src/components/atoms/Input';
import { englishReg } from '@src/constants/regex';
import Button, { ButtonType } from '@src/components/atoms/Button';
import Stamp from '../stamp';

const Setting = () => {
	const [isHistory, setIsHistory] = useState(false);
	const [isOpenSetting, setIsOpenSetting] = useState(false);

	const [userInfo, setUserInfo] = useState({ nickName: '', password: '' });

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
							<div className="stat-value">Hi, 지윤님</div>
							<div className="stat-title"></div>
							<div className="stat-desc text-secondary">Logout</div>
						</div>
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
											<Input type={InputType.Text} name="nickName" placeholder="닉네임" value={userInfo.nickName} onChange={handleUser} />
										</td>
										<td className="w-1/5">
											<Button type={ButtonType.Primary} onClick={() => {}} text="변경" />
										</td>
									</tr>
									<tr>
										<td className="w-1/5">비밀번호</td>
										<td className="w-2/5">
											<Input type={InputType.Password} name="password" placeholder="비밀번호" value={userInfo.password} onChange={handleUser} />
										</td>
										<td className="w-1/5">
											<Button type={ButtonType.Primary} onClick={() => {}} text="변경" />
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
