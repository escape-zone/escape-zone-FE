import React from 'react';

import { TbBell, TbSearch } from 'react-icons/tb';

// import logoText from '@assets/images/logo_text.png';

const Header = () => {
	return (
		<div className="input bg-primary-content h-fit">
			<div className="flex items-center w-full navbar bg-primary-content p-0 min-h-0">
				<div className="navbar-start">
					<button className="btn btn-square btn-ghost">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
				<div className="navbar-center">
					{/* <a className="btn btn-ghost normal-case text-xl"> */}
					{/* <img alt="logo" src={logoText.src} width={120} height={120} /> */}
					{/* </a> */}
				</div>
				<div className="navbar-end">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<button className="btn btn-ghost btn-circle">
								<div className="indicator">
									<TbBell size="20px" />
									<span className="badge badge-xs badge-primary indicator-item"></span>
								</div>
							</button>
						</label>
						<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>

					{/* <div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<Image alt="demo" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" width={100} height={100} />
						</div>
					</label>
					<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li onClick={() => router.push('/setting')}>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div> */}
				</div>
			</div>
		</div>
	);
};

export default Header;
