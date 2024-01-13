import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@src/components/molecules/Layout';
import SearchBar from '@components/molecules/SearchBar';
import MaskStar from '@components/molecules/Mask/MaskStar';

const TEST = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Theme = () => {
	const navigate = useNavigate();

	return (
		<Layout isBottomNav={true}>
			<div className="grid gap-4 grid-cols-1">
				<SearchBar />
				<div className="flex justify-center">
					<button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => navigate('/theme/create')}>
						내가 찾는 테마가 없다면?
					</button>
				</div>
				{TEST.map((product, index) => (
					<div key={index} className="flex py-3 border p-2 rounded-xl">
						<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
							<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
						<div className="ml-4 flex flex-1 flex-col">
							<div>
								<div className="flex justify-between text-base font-medium text-gray-900">
									<h3>
										<a href={''}>테마이름름름름</a>
									</h3>
									{/* <p className="ml-4">난이도오오오</p> */}
									<div className="badge badge-neutral">
										<MaskStar index={index} />
									</div>
								</div>
								<p className="mt-1 text-sm text-gray-500">여긴뭘둘까</p>
							</div>
							<div className="flex flex-1 items-end justify-between text-sm pr-1">
								<p className="text-gray-500">여기도뭘두지</p>
								<div className="flex">
									<button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
										상세보기
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default Theme;
