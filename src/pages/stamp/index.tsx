import React from 'react';

import Layout from '@src/components/molecules/Layout';
import Tooltip from '@components/atoms/Tooltip';
import MaskStar from '@src/components/molecules/Mask/MaskStar';

import useDetectDevice from '@hooks/useDetectDevice';

const STAMPLIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Stamp = () => {
	const isMobile = useDetectDevice();

	return (
		<Layout isBottomNav={true}>
			<h1 className="text-2xl font-bold p-4">STAMP</h1>
			<div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-3'} grid-flow-row gap-4`}>
				{STAMPLIST.map((item, index) => (
					<div key={index} className="card w-30 bg-base-100">
						<div className="card-body items-center text-center">
							<div className="avatar indicator">
								<div className="w-24 rounded-full">
									<img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" width={200} height={200} alt="Shoes" />
									<div className="indicator-item indicator-bottom">
										<div className="rating rating-sm">
											<input type="radio" name="rating-3" className="mask mask-heart bg-red-400" defaultChecked />
										</div>
									</div>
								</div>
							</div>
							<h2 className="font-bold pt-2">방탈출 테마 이름</h2>
							<Tooltip text={'5.4'}>
								<div className="badge badge-neutral">
									<MaskStar index={index} />
								</div>
							</Tooltip>
							<p className="text-sm">2021-01-01</p>
						</div>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default Stamp;
