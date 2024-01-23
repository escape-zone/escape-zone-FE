import config from '@src/config';

export const userRegister = async (body: { email: string; password: string; name: string; nickname: string }) => {
	const url = `${config.apiUrl}/users/register`;
	return await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})
		.then((res) => res.json())
		.catch((error: any) => {
			console.error(error);
			return error;
		});
};

export const userLogin = async (body: { email: string; password: string }) => {
	const url = `${config.apiUrl}/users/login`;
	return await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})
		.then((res) => res.json())
		.catch((error: any) => {
			console.error(error);
			return error;
		});
};

export const userLogout = async (accessToken: string, body: { email: string }) => {
	const url = `${config.apiUrl}/users/logout/${body.email}`;
	return await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	})
		.then((res) => res.json())
		.catch((error: any) => {
			console.error(error);
			return error;
		});
};

export const userInfo = async (accessToken: string) => {
	const url = `${config.apiUrl}/users/info`;
	return await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	})
		.then((res) => res.json())
		.catch((error: any) => {
			console.error(error);
			return error;
		});
};

export const changeInfo = async (accessToken: string, body: { email: string; password?: string; nickname?: string }) => {
	const url = `${config.apiUrl}/users/change`;
	return await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		},
		body: JSON.stringify(body)
	})
		.then((res) => res.json())
		.catch((error: any) => {
			console.error(error);
			return error;
		});
};
