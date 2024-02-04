import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TAB = [
	{ id: 0, name: 'Home', url: '/' },
	{ id: 1, name: 'Room', url: '/room' },
	{ id: 2, name: 'Chat', url: '/chat' },
	{ id: 3, name: 'Setting', url: '/setting' }
];

interface Props {
	children: React.ReactNode;
}

const Layout = (props: Props) => {
	const { children } = props;

	const location = useLocation();

	const [selectedTab, setSelectedTab] = useState(TAB[0]);

	useEffect(() => {
		console.log(location.pathname.split('/')[1]);
		const findIndex = TAB.findIndex((item) => item.url === '/' + location.pathname.split('/')[1].trim());
		if (findIndex > -1) {
			setSelectedTab(TAB[findIndex]);
		}
	}, [location]);

	return (
		<>
			<div className="flex fixed flex-col w-screen z-10 bg-white">
				<div role="tablist" className="tabs tabs-lifted">
					{TAB.map((item, index) => (
						<a href={item.url} key={index} role="tab" className={`tab ${selectedTab.id === item.id ? 'tab-active' : ''}`}>
							{item.name}
						</a>
					))}
				</div>

				<div className="mockup-window border-base-300 border-b rounded-none"></div>
			</div>
			<div className="flex flex-col px-4 pt-24 pb-4 border-t border-base-300 min-h-screen bg-white">{children}</div>
		</>
	);
};

export default Layout;
