const server = '35.216.75.221:8080';
const localServer = '192.168.0.30:8080';

const config = {
	basename: '/',
	defaultPath: '/',
	fontFamily: `'Roboto', sans-serif`,
	borderRadius: 12,
	apiUrl: `http://${server}`,
	baseUrl: 'http://local.escapezone.com:3000',
	socketServer: `ws://${server}`
};

export default config;
