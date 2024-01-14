import React, { ReactNode } from 'react';

import BottomNav from './BottomNav';
import Header from './Header';

import useDetectDevice from '@hooks/useDetectDevice';

interface ILayout {
	children: ReactNode;
	isBottomNav: boolean;
}

const Layout = (props: ILayout) => {
	const { children, isBottomNav = true } = props;

	const isMobile = useDetectDevice();

	return (
		<div className="flex justify-center">
			<div className="mockup-browser bg-white p-1 w-[780px]" style={{ borderRadius: 0 }}>
				<Header />
				<div className="flex bg-neutral-content justify-center p-4 border-base-300">
					<div className="flex bg-neutral-content justify-center overflow-auto">
						<div className="bg-neutral-content text-base-content min-h-screen overflow-auto">{children}</div>
						{isBottomNav && <BottomNav isMobile={isMobile} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
