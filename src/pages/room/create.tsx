import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import Layout from '@components/molecules/Layout';
import Input, { InputSize, InputType } from '@components/atoms/Input';

import { RoomLocation, RoomTheme } from '@constants/enum';

import { dialogState } from '@recoil/dialog';

const CATEGORY = [
	{ index: -1, text: '선택하기' },
	{ index: 0, text: '공포', value: RoomTheme.HORROR },
	{ index: 1, text: '추리', value: RoomTheme.MYSTERY },
	{ index: 2, text: '액션', value: RoomTheme.ACTION },
	{ index: 3, text: '감성', value: RoomTheme.SENTIMENTAL },
	{ index: 4, text: 'SF/판타지', value: RoomTheme.SF },
	{ index: 5, text: '그 외', value: RoomTheme.OTHER }
];

const LOCATION = [
	{ index: -1, text: '선택하기' },
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

	const [category, setCategory] = useState(CATEGORY[0]);
	const [location, setLocation] = useState(LOCATION[0]);

	const navigate = useNavigate();

	const _handleCategory = (value: string) => {
		setCategory(CATEGORY.find((item) => item.text === value) || CATEGORY[0]);
	};

	const _handleLocation = (value: string) => {
		setLocation(LOCATION.find((item) => item.text === value) || LOCATION[0]);
	};

	const _handleSave = () => {};

	const _handleCancel = () => {
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

	// /room
	// POST
	// title, password, play_date, thema, location, max_player

	return (
		<Layout isBottomNav={true} title={'방 만들기'}>
			<div className="border-b border-gray-900/10 pb-12 w-[550px] mx-2 min-h-fit">
				<div className="grid grid-cols-1 gap-x-2 gap-y-8">
					<div className="col-span-full">
						<h2 className="text-base font-semibold leading-7 text-gray-900">카테고리</h2>
						<div className="mt-2">
							<select className="select select-bordered w-full" value={category.text} onChange={(e) => _handleCategory(e.target.value)}>
								{CATEGORY.map((item) => (
									<option key={item.index}>{item.text}</option>
								))}
							</select>
						</div>
					</div>

					<div className="col-span-full">
						<h2 className="text-base font-semibold leading-7 text-gray-900">지역</h2>
						<div className="mt-2">
							<select className="select select-bordered w-full" value={location.text} onChange={(e) => _handleLocation(e.target.value)}>
								{LOCATION.map((item) => (
									<option key={item.index}>{item.text}</option>
								))}
							</select>
						</div>
					</div>

					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-900">제목</h2>
						<div className="mt-2">
							<Input name="title" value="" type={InputType.Text} size={InputSize.Large} onChange={() => {}} />
						</div>
					</div>

					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-900">비밀번호</h2>
						<div className="mt-2">
							<Input name="password" value="" type={InputType.Text} size={InputSize.Large} onChange={() => {}} />
						</div>
					</div>

					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-900">날짜</h2>
						<div className="mt-2">
							<input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
						</div>
					</div>

					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-900">경험자</h2>
						<div className="mt-2">
							<input type="number" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
						</div>
					</div>

					{/* <div className="col-span-full">
						<h2 className="text-base font-semibold leading-7 text-gray-900">난이도</h2>
						<MaskStar index={1} size="lg" />
					</div> */}

					{/* <div className="col-span-full">
						<h2 className="text-base font-semibold leading-7 text-gray-900">포스터 및 대표사진</h2>
						<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
							<div className="text-center">
								<Icon>
									<RiImageAddLine size="30px" color="grey" />
								</Icon>
								<div className="mt-4 flex text-sm leading-6 text-gray-600">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
									>
										<p>사진 올리기</p>
										<input id="file-upload" name="file-upload" type="file" className="sr-only" />
									</label>
								</div>
								<p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
							</div>
						</div>
					</div> */}

					{/* <div className="col-span-full">
						<h2 className="text-base font-semibold leading-7 text-gray-900">About</h2>
						<div className="mt-2">
							<textarea
								id="about"
								name="about"
								rows={3}
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								defaultValue={''}
							/>
						</div>
					</div> */}
				</div>
			</div>
			{/* 
				<div className="border-b border-gray-900/10 pb-12 pt-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
								First name
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="first-name"
									id="first-name"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
								Last name
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="last-name"
									id="last-name"
									autoComplete="family-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-4">
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
				</div> */}

			{/* <div className="border-b border-gray-900/10 pb-12 pt-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						{`We'll always let you know about important changes, but you pick what else you want to hear about.`}
					</p>

					<div className="mt-10 space-y-10">
						<fieldset>
							<legend className="text-sm font-semibold leading-6 text-gray-900">동의 사항</legend>
							<div className="mt-6 space-y-6">
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
									</div>
									<div className="text-sm leading-6">
										<label htmlFor="candidates" className="font-medium text-gray-900">
											본인이 작성한 내용이 방탈출 테마의 템플릿으로 사용이 됩니다.
										</label>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="candidates"
											name="candidates"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label htmlFor="candidates" className="font-medium text-gray-900">
											허위 작성 내용 어쩌고 저쩌고
										</label>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
									</div>
									<div className="text-sm leading-6">
										<label htmlFor="offers" className="font-medium text-gray-900">
											Offers
										</label>
									</div>
								</div>
							</div>
						</fieldset>
					</div>
				</div> */}

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button type="button" className="btn btn-ghost" onClick={() => _handleCancel()}>
					취소
				</button>
				<button type="button" className="btn btn-primary" onClick={() => _handleSave()}>
					생성
				</button>
			</div>
		</Layout>
	);
};

export default ThemeCreate;
