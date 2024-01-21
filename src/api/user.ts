import config from '@src/config';

import { KAKAO_REST_KEY } from '@src/constants/sns';

export const kakaoLogin = async () => {
	try {
		const redirectUri = `${config.baseUrl}/`;
		const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_KEY}&redirect_uri=${redirectUri}&prompt=none`;
		return await fetch(url).then((res) => res.json());
	} catch (error) {
		console.error('KAKAO LOGIN ERROR : ', error);
	}
};

export const naverLogin = async () => {
	try {
		const url = ``;
	} catch (error) {
		console.error('NAVER LOGIN ERROR : ', error);
	}
};

export const kakaoRegister = async () => {
	try {
		const redirectUrl = `${config.baseUrl}/user/register`;
		const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_KEY}&redirect_uri=${redirectUrl}`;
		return await fetch(url).then((res) => res.json());
	} catch (error) {
		console.error('KAKAO REGISTER ERROR : ', error);
	}
};

export const naverRegister = async () => {
	try {
		const url = ``;
	} catch (error) {
		console.error('NAVER REGISTER ERROR : ', error);
	}
};

const headers = {
	'Content-Type': 'application/json'
};

export const userRegister = async (body: { email: string; password: string; name: string; nickname: string }) => {
	const url = `${config.apiUrl}/users/register`;
	return await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) })
		.then((res) => res.json())
		.catch((error: any) => {
			console.error(error);
		});
};

export const userLogin = async (body: { email: string; password: string }) => {
	const url = `${config.apiUrl}/users/login`;
	return await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) })
		.then((res) => res.json())
		.catch((error: any) => {
			console.error(error);
		});
};
