import React, { useState } from 'react';

import Layout from '@components/layout';
import MaskStar from '@components/Mask/MaskStar';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { dialogState } from '@recoil/dialog';
import { useRouter } from 'next/router';

import { RiImageAddLine } from 'react-icons/ri';

const CATEGORY = [
	{ index: 0, text: '전체' },
	{ index: 1, text: '공포' },
	{ index: 2, text: '19금' },
	{ index: 3, text: '추리' },
	{ index: 4, text: '액션' },
	{ index: 5, text: '감성' },
	{ index: 6, text: '모험' },
	{ index: 7, text: 'SF/판타지' },
	{ index: 8, text: '야외' }
];

const ThemeCreate = () => {
	const setDialog = useSetRecoilState(dialogState);

	const [category, setCategory] = useState(CATEGORY[0]);

	const router = useRouter();

	const _handleCategory = (value: string) => {
		setCategory(CATEGORY.find((item) => item.text === value) || CATEGORY[0]);
	};

	const _handleSave = () => {};

	const _handleCancel = () => {
		setDialog({
			isOpen: true,
			type: 'warning',
			title: '취소하시겠습니까?',
			text: ['작성된 내용이 저장되지 않고', '페이지를 나가게 됩니다'],
			callbackFunc: () => {
				router.back();
			}
		});
	};

	return (
		<Layout isBottomNav={true}>
			<div className="m-2">
				<div className="border-b border-gray-900/10 pb-12">
					<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="col-span-full">
							<h2 className="text-base font-semibold leading-7 text-gray-900">카테고리</h2>
							<div className="mt-2">
								<select className="select select-sm w-full" onChange={(e) => _handleCategory(e.target.value)} value={category.text}>
									{CATEGORY.map((item) => (
										<option key={item.index}>{item.text}</option>
									))}
								</select>
							</div>
						</div>

						<div className="col-span-full">
							<h2 className="text-base font-semibold leading-7 text-gray-900">난이도</h2>
							<div className="mt-2">
								<MaskStar index={1} size="lg" />
							</div>
						</div>

						<div className="col-span-full">
							<h2 className="text-base font-semibold leading-7 text-gray-900">포스터 및 대표사진</h2>
							<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
								<div className="text-center">
									<RiImageAddLine size="30px" color="grey" />
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
						</div>

						<div className="col-span-full">
							<h2 className="text-base font-semibold leading-7 text-gray-900">위치</h2>
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

						<div className="col-span-full">
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
							<p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
						</div>
					</div>
				</div>

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
				</div>

				<div className="border-b border-gray-900/10 pb-12 pt-12">
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
				</div>

				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button type="button" className="btn btn-ghost" onClick={() => _handleCancel()}>
						취소
					</button>
					<button type="button" className="btn btn-primary" onClick={() => _handleSave()}>
						저장
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default ThemeCreate;
