const server = 'http://35.216.75.221:8080';
const serverSecurity = 'https://35.216.75.221:443';
const localServer = 'http://192.168.0.30:8080';

const config = {
	basename: '/',
	defaultPath: '/',
	fontFamily: `'Roboto', sans-serif`,
	borderRadius: 12,
	apiUrl: server,
	socketServer: `wss://${server}`
};

export default config;
