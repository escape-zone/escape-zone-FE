import React from 'react';

import logoText from '@assets/images/logo_icon.png';
import Button, { ButtonType } from '@src/components/atoms/Button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	return (
		<div className="flex fixed btm-nav top-0 px-2 bg-white z-50">
			<div className="input bg-primary-content h-fit">
				<div className="flex items-center w-full navbar bg-primary-content p-0 min-h-0">
					<div className="navbar-start">
						<Button
							text=""
							type={ButtonType.Ghost}
							icon={<img src={logoText} alt="" width={30} />}
							onClick={() => {
								navigate('/');
							}}
						/>
					</div>
					<div className="navbar-center">title</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
