import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { TbMessageCircle, TbSettings, TbDoor } from 'react-icons/tb';

import Icon from '@atoms/Icon';

const BOTTOM_NAVIGATION = [
	{ name: 'room', icon: <TbDoor size="20px" />, url: '/' },
	{ name: 'chat', icon: <TbMessageCircle size="20px" />, url: '/chat' },
	{ name: 'setting', icon: <TbSettings size="20px" />, url: '/setting' }
];

interface IBottomNav {
	isMobile: boolean;
}

const BottomNav = (props: IBottomNav) => {
	const { isMobile } = props;

	const navigate = useNavigate();
	const location = useLocation();

	/**
	 * @description 링크 이동
	 */
	const _handleNavLink = (url: string) => {
		navigate(url);
	};

	return (
		<div className="flex btm-nav btm-nav-sm z-20 bg-neutral">
			{BOTTOM_NAVIGATION.map((item) => (
				<button key={item.name} className={location.pathname === item.url ? 'active' : ''} onClick={() => _handleNavLink(item.url)}>
					<Icon>{item.icon}</Icon>
				</button>
			))}
		</div>
	);
};

export default BottomNav;
