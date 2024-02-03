const server = '35.216.75.221:443';
const localServer = '192.168.0.30:8080';

const config = {
	basename: '/',
	defaultPath: '/',
	fontFamily: `'Roboto', sans-serif`,
	borderRadius: 12,
	apiUrl: `https://${server}`,
	socketServer: `wss://${server}`
};

export default config;
