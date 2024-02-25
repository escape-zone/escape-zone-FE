import config from '@src/config';

export const roomCreate = async (
	accessToken: string,
	body: {
		title: string;
		password: string;
		play_date: string;
		thema: string;
		location: string;
		max_player: number;
	}
) => {
	const url = `${config.apiUrl}/room`;
	return await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		},
		body: JSON.stringify(body)
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error('ROOM CREATE ERROR : ', error);
			return error;
		});
};

export const roomList = async (accessToken: string) => {
	const url = `${config.apiUrl}/room`;
	return await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`
		}
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error('ROOM LIST ERROR : ', error);
			return error;
		});
};
