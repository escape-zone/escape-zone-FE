const useDetectDevice = () => {
	const agent = window.navigator.userAgent;
	const mobileRegex = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
	const data = mobileRegex.some((mobile) => agent.match(mobile));
	return data;
};

export default useDetectDevice;
