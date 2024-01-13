import config from '@src/config';

export const aliveCheck = async () => {
	try {
		const ALIVE_CHECK = `${config.apiUrl}/check`;
		return await fetch(ALIVE_CHECK, {
			method: 'GET'
		}).then((res) => res.json());
	} catch (error) {
		console.error('ALVIE CHECK ERROR : ', error);
	}
};
