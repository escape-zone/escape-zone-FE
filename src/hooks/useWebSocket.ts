import { useEffect, useRef, useState } from 'react';

import config from '@src/config';

import useUser from './useUser';

import * as StompJs from '@stomp/stompjs';

const SOCKET_URL = `${config.socketServer}/ws`;

export enum SocketStatus {
	NotConnected = 'Not Connected',
	Connected = 'Connected',
	Closed = 'Closed',
	Error = 'Error'
}

const useWebSockect = () => {
	const { accessToken } = useUser();

	const [message, setMessage] = useState<string[]>([]);
	const [status, setStatus] = useState(SocketStatus.NotConnected);

	const webSocket = useRef<WebSocket | null>(null);
	const client = useRef<StompJs.Client | any>(null);

	// useEffect(() => {
	// 	console.log(accessToken);
	// 	client.current = new StompJs.Client({
	// 		brokerURL: SOCKET_URL,
	// 		connectHeaders: { Authorization: `Bearer ${accessToken}` },
	// 		debug: (str) => {
	// 			console.log('debug', str);
	// 		}
	// 		// reconnectDelay: 5000, // 자동 재 연결
	// 		// heartbeatIncoming: 4000,
	// 		// heartbeatOutgoing: 4000
	// 	});

	// 	// 구독
	// 	client.current.onConnect = () => {
	// 		console.log('onConnect');
	// 		// clientdata.subscribe('/sub/channels/' + chatroomId, callback);
	// 	};

	// 	client.current.onStompError = function (frame: StompJs.IFrame) {
	// 		console.log('Broker reported error: ' + frame.headers['message']);
	// 		console.log('Additional details: ' + frame.body);
	// 	};

	// 	client.current.activate();
	// 	// const callback = function (message) {
	// 	// 	if (message.body) {
	// 	// 		let msg = JSON.parse(message.body);
	// 	// 		setChatList((chats) => [...chats, msg]);
	// 	// 	}
	// 	// };
	// }, []);

	// const socket = new SockJS(SOCKET_URL);

	// useEffect(() => {
	// 	const stompClient = Stomp.over(socket);
	// 	stompClient.connect({}, (frame) => {
	// 		console.log('Connected: ' + frame);
	// 	});

	// 	stompClient.subscribe('/topic/some-topic', (message) => {
	// 		console.log('Received message:', message.body);
	// 	});

	// 	stompClient.send('/app/send-message', {}, JSON.stringify({ content: 'Hello, server!' }));
	// }, []);

	// useEffect(() => {
	// 	const client = new W3CWebSocket(SOCKET_URL, undefined, undefined, headers);

	// 	client.onopen = () => {
	// 		console.log('WebSocket Client Connected');
	// 	};

	// 	client.onmessage = (message) => {
	// 		console.log('Received:', message.data);
	// 	};

	// 	client.onclose = () => {
	// 		console.log('WebSocket Client Closed');
	// 	};

	// 	// Clean up the WebSocket connection when the component unmounts
	// 	return () => {
	// 		client.close();
	// 	};
	// }, []);

	useEffect(() => {
		if (!accessToken) return;

		webSocket.current = new WebSocket(SOCKET_URL);

		webSocket.current.onopen = () => {
			console.log('WebSocket 연결!');
			setStatus(SocketStatus.Connected);
			webSocket.current?.send(JSON.stringify({ type: 'authentication', token: accessToken }));
		};

		webSocket.current.onclose = (error) => {
			setStatus(SocketStatus.Closed);
			console.log('onclose', error);
		};

		webSocket.current.onerror = (error) => {
			setStatus(SocketStatus.Error);
			console.log('onerror', error);
		};

		webSocket.current.onmessage = (event: MessageEvent) => {
			setMessage((prev) => [...prev, event.data]);
		};

		return () => {
			closeServer();
		};
	}, []);

	const sendMessage = (message: string) => {
		if (webSocket.current?.readyState === WebSocket.OPEN) {
			webSocket.current?.send(message);
		}
	};

	const closeServer = () => {
		webSocket.current?.close();
	};

	return { status, message, sendMessage };
};

export default useWebSockect;
