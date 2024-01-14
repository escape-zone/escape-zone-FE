import { useEffect, useRef } from 'react';

const useTimeout = (callbackFunc: () => void, delay: number) => {
	const savedCallback = useRef(callbackFunc);

	useEffect(() => {
		savedCallback.current = callbackFunc;
	}, [callbackFunc]);

	useEffect(() => {
		const timeOut = setTimeout(() => savedCallback.current(), delay);
		return () => clearTimeout(timeOut);
	}, [delay]);
};

export default useTimeout;
