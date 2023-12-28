import React from 'react';
import { useRouter } from 'next/router';

import { TbHome, TbMessageCircle, TbRubberStamp, TbSettings, TbDoor } from 'react-icons/tb';

const BOTTOM_NAVIGATION = [
	{ name: 'theme', icon: <TbDoor size="20px" />, url: '/theme' },
	{ name: 'stamp', icon: <TbRubberStamp size="20px" />, url: '/stamp' },
	{ name: 'home', icon: <TbHome size="20px" />, url: '/' },
	{ name: 'chat', icon: <TbMessageCircle size="20px" />, url: '/chat' },
	{ name: 'setting', icon: <TbSettings size="20px" />, url: '/setting' }
];

interface IBottomNav {
	isMobile: boolean;
}

const BottomNav = (props: IBottomNav) => {
	const { isMobile } = props;

	const router = useRouter();

	/**
	 * @description 링크 이동
	 */
	const _handleNavLink = (url: string) => {
		router.push(url);
	};

	return (
		<div
			className="flex btm-nav btm-nav-sm z-20 bg-neutral max-h-screen"
			style={isMobile ? {} : { minWidth: '760px', width: '1024px', left: '50%', transform: 'translate(-50%, -50%)', bottom: '-24px' }}
		>
			{BOTTOM_NAVIGATION.map((item) => (
				<button key={item.name} className={router.pathname === item.url ? 'active' : ''} onClick={() => _handleNavLink(item.url)}>
					{item.icon}
				</button>
			))}
		</div>
	);
};

export default BottomNav;
