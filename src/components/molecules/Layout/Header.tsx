import { useNavigate } from 'react-router-dom';

import Button, { ButtonType } from '@components/atoms/Button';

import logoIcon from '@assets/images/logo_icon.png';

interface Props {
	title?: string;
}

const Header = ({ title }: Props) => {
	const navigate = useNavigate();

	return (
		<div className="flex fixed btm-nav top-0 px-2 bg-white z-50">
			<div className="input bg-primary-content h-fit">
				<div className="flex items-center w-full navbar bg-primary-content p-0 min-h-0">
					<div className="navbar-start w-[46%]">
						<Button
							text=""
							type={ButtonType.Ghost}
							icon={<img src={logoIcon} alt="" width={30} />}
							onClick={() => {
								navigate('/');
							}}
						/>
					</div>
					<div className="navbar-center">{title}</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
