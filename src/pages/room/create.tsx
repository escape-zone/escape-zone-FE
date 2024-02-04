import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import Layout from '@src/components/molecules/Layout';
import Input, { InputSize, InputType } from '@components/atoms/Input';

import { RoomLocation, RoomTheme } from '@constants/enum';

import { dialogState } from '@recoil/dialog';

import { roomCreate } from '@api/room';

import useUser from '@hooks/useUser';
import useToast from '@hooks/useToast';

const CATEGORY = [
	{ index: -1, text: '선택하기', value: 'SELECT' },
	{ index: 0, text: '공포', value: RoomTheme.HORROR },
	{ index: 1, text: '추리', value: RoomTheme.MYSTERY },
	{ index: 2, text: '액션', value: RoomTheme.ACTION },
	{ index: 3, text: '감성', value: RoomTheme.SENTIMENTAL },
	{ index: 4, text: 'SF/판타지', value: RoomTheme.SF },
	{ index: 5, text: '그 외', value: RoomTheme.OTHER }
];

const LOCATION = [
	{ index: -1, text: '선택하기', value: 'SELECT' },
	{ index: 0, text: '전국', value: RoomLocation.NATIONWIDE },
	{ index: 1, text: '서울', value: RoomLocation.SEOUL },
	{ index: 2, text: '경기', value: RoomLocation.GYEONGGI },
	{ index: 3, text: '인천', value: RoomLocation.INCHEON },
	{ index: 4, text: '충청', value: RoomLocation.CHUNGCHEONG },
	{ index: 5, text: '경상', value: RoomLocation.GYEONGSANG },
	{ index: 6, text: '전라', value: RoomLocation.JEOLLA },
	{ index: 7, text: '강원', value: RoomLocation.GANGWON },
	{ index: 8, text: '제주', value: RoomLocation.JEJU },
	{ index: 9, text: '강남', value: RoomLocation.GANGNAM },
	{ index: 10, text: '홍대', value: RoomLocation.HONGDAE },
	{ index: 11, text: '신촌', value: RoomLocation.SINCHON },
	{ index: 12, text: '건대', value: RoomLocation.KONKUK },
	{ index: 13, text: '대학로', value: RoomLocation.DAEHANGNO },
	{ index: 14, text: '그 외', value: RoomLocation.OTHER }
];

const ThemeCreate = () => {
	const setDialog = useSetRecoilState(dialogState);

	const { setToast } = useToast();

	const { accessToken } = useUser();

	const [createInfo, setCreateInfo] = useState({ title: '', password: '', play_date: '', thema: CATEGORY[0], location: LOCATION[0], max_player: 2 });

	const handleCreate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCreateInfo((createInfo) => ({ ...createInfo, [name]: value.trim() }));
	}, []);

	const navigate = useNavigate();

	const setThema = (value: string) => {
		setCreateInfo((userInfo) => ({ ...userInfo, thema: CATEGORY.find((item) => item.text === value) || CATEGORY[0] }));
	};

	const setLocation = (value: string) => {
		setCreateInfo((userInfo) => ({ ...userInfo, location: LOCATION.find((item) => item.text === value) || LOCATION[0] }));
	};

	const handleSave = async () => {
		if (!accessToken) return;

		const checkEmpty = Object.values(createInfo).some((value) => value);
		if (!checkEmpty || createInfo.location.index === -1 || createInfo.thema.index === -1) {
			setToast({ isOpen: true, type: 'info', text: '정보를 입력해주세요' });
			return;
		}

		const result = await roomCreate(accessToken, {
			title: createInfo.title,
			password: createInfo.password,
			play_date: createInfo.play_date,
			thema: createInfo.thema.value,
			location: createInfo.location.value,
			max_player: createInfo.max_player
		});

		console.log(result);
		if (result.success) {
			navigate(`/chat/${result.data.room_id}`);
		}
	};

	const handleCancel = () => {
		setDialog({
			isOpen: true,
			type: 'warning',
			title: '취소하시겠습니까?',
			text: ['작성된 내용이 저장되지 않고', '페이지를 나가게 됩니다'],
			callbackFunc: () => {
				navigate(-1);
			}
		});
	};

	return (
		<Layout>
			<div className="flex justify-center">
				<div className="w-[550px] min-h-fit">
					<div className="grid grid-cols-1 gap-x-2 gap-y-8">
						<div className="col-span-full">
							<h2 className="text-base font-semibold leading-7 text-gray-900">카테고리</h2>
							<div className="mt-2">
								<select className="select select-bordered w-full" value={createInfo.thema.text} onChange={(e) => setThema(e.target.value)}>
									{CATEGORY.map((item) => (
										<option key={item.index}>{item.text}</option>
									))}
								</select>
							</div>
						</div>

						<div className="col-span-full">
							<h2 className="text-base font-semibold leading-7 text-gray-900">지역</h2>
							<div className="mt-2">
								<select className="select select-bordered w-full" value={createInfo.location.text} onChange={(e) => setLocation(e.target.value)}>
									{LOCATION.map((item) => (
										<option key={item.index}>{item.text}</option>
									))}
								</select>
							</div>
						</div>

						<Input type={InputType.Text} size={InputSize.Large} value={createInfo.title} label="제목" name="title" onChange={handleCreate} />
						<Input type={InputType.Password} size={InputSize.Large} value={createInfo.password} label="비밀번호" name="password" onChange={handleCreate} />
						<Input type={InputType.Date} size={InputSize.Large} value={createInfo.play_date} label="날짜" name="play_date" onChange={handleCreate} />
						<Input type={InputType.Number} size={InputSize.Large} value={createInfo.max_player} label="최대 참여자" name="max_player" onChange={handleCreate} />
					</div>
				</div>
			</div>
			<div className="mt-6 flex items-center justify-center gap-x-6">
				<button type="button" className="btn btn-ghost" onClick={() => handleCancel()}>
					취소
				</button>
				<button type="button" className="btn btn-primary" onClick={() => handleSave()}>
					생성
				</button>
			</div>
		</Layout>
	);
};

export default ThemeCreate;
