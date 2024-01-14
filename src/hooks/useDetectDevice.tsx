import { useEffect, useState } from 'react';

const useDetectDevice = () => {
	const [isMobile, setMobile] = useState(true);

	useEffect(() => {
		const agent = window.navigator.userAgent;
		const mobileRegex = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
		const data = mobileRegex.some((mobile) => agent.match(mobile));
		setMobile(data);
	}, []);

	return isMobile;
};

export default useDetectDevice;
