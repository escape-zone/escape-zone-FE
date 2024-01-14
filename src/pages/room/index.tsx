import React from 'react';
import { useNavigate } from 'react-router-dom';

import MaskStar from '@components/atoms/MaskStar';
import Layout from '@components/molecules/Layout';

import { TbSearch } from 'react-icons/tb';
import Button, { ButtonType } from '@src/components/atoms/Button';

const TEST = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Room = () => {
	const navigate = useNavigate();

	return (
		<Layout isBottomNav={true}>
			<div className="flex grid gap-4 grid-cols-1">
				<div className="join gap-2">
					<button className="btn btn-primary btn-wide text-xl" onClick={() => navigate('/create')}>
						방 만들기
					</button>
					<div className="pr-2"></div>
					<input className="input input-bordered w-full" placeholder="Search" />
					<Button onClick={() => {}} text="" type={ButtonType.Default} icon={<TbSearch size={20} />} />
				</div>

				{TEST.map((product, index) => (
					<div key={index} className="flex border p-3 rounded-xl">
						<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
						</div>
						<div className="ml-4 flex flex-1 flex-col">
							<div>
								<div className="flex justify-between text-base font-medium text-gray-900">
									<h3>테마이름름름름</h3>
									<div className="badge badge-neutral">
										<MaskStar index={index} />
									</div>
								</div>
								<p className="mt-1 text-sm text-gray-500">여긴뭘둘까</p>
							</div>
							<div className="flex flex-1 items-end justify-between text-sm pr-1">
								<p className="text-gray-500">여기도뭘두지</p>
								<div className="flex text-indigo-600">참여 인원 : 1</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default Room;
