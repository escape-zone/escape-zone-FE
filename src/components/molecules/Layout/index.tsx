import React from 'react';

import BottomNav from './BottomNav';
import Header from './Header';

interface Props {
	children: React.ReactNode;
	isBottomNav: boolean;
	title?: string;
}

const Layout = ({ children, title, isBottomNav = true }: Props) => {
	return (
		<div className="Main">
			<div className="flex justify-center">
				<div className="mockup-browser bg-white p-1 w-[780px]" style={{ borderRadius: 0 }}>
					<Header title={title} />
					<div className="flex bg-neutral-content justify-center p-4 border-base-300">
						<div className="flex bg-neutral-content justify-center overflow-auto">
							<div className="bg-neutral-content text-base-content min-h-screen overflow-auto">{children}</div>
							{isBottomNav && <BottomNav />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
