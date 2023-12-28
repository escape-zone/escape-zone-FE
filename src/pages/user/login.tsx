import React from 'react';
import Image from 'next/image';

import { Player } from '@lottiefiles/react-lottie-player';

import kakaoLogin from '@assets/images/users/kakao_login_large.png';
import loginLottie from '@assets/lottie/login.json';

const Login = () => {
	return (
		<div className="hero min-h-screen bg-base-100">
			<div className="hero-content flex-col">
				<div className="card w-96 shadow-2xl bg-neutral">
					<div className="card-body">
						<h1 className="text-4xl font-bold text-primary">새로운</h1>
						<h1 className="text-4xl font-bold text-primary">방탈출의 시작!</h1>
						<p className="text-sm text-gray-500">
							전국 방탈출이 모두 모여있는 Escape Zone에서 <br />
							당신의 모험을 시작해보세요
						</p>

						<Player autoplay speed={1} loop src={loginLottie} style={{ height: '300px', width: '300px' }} />

						<button className="btn btn-link">
							<Image alt="kakaoLogin" src={kakaoLogin.src} width={500} height={100} />
						</button>

						<div className="mt-6 items-center text-center">
							<p className="text-xs text-gray-600">
								회원가입 없이 소셜 계정을 통해 바로 이용 가능하며 <br />
								<span className="text-xs text-gray-600">첫 로그인시 </span>
								<span className="text-xs text-sky-500">이용약관 </span>
								<span className="text-xs text-gray-600">및 </span>
								<span className="text-xs text-sky-500">개인정보처리방침 </span>
								<span className="text-xs text-gray-600">동의로 간주됩니다</span>
							</p>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
