import config from '@src/config';

export const aliveCheck = async () => {
	const url = `${config.apiUrl}/check`;
	return await fetch(url)
		.then((res) => res.json())
		.catch((error) => {
			console.error('ALVIE CHECK ERROR : ', error);
			return error;
		});
};
