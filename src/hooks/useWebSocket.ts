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

const useWebSockect = (roomId: string) => {
	const { accessToken, user } = useUser();

	const [chatList, setChatList] = useState<string[]>([]);

	const client = useRef<StompJs.Client | any>(null);

	useEffect(() => {
		if (!accessToken) return;

		client.current = new StompJs.Client({
			brokerURL: SOCKET_URL,
			connectHeaders: { Authorization: accessToken }
		});

		client.current.onConnect = () => {
			client.current.publish({
				destination: `/pub/chat`,
				body: JSON.stringify({
					message_type: 'ENTER',
					sender_id: user.nickname,
					chat_room_id: roomId,
					message: ''
				})
			});

			// 구독
			client.current.subscribe(`/sub/chat/${roomId}`, (message: any) => {
				if (message.body) {
					const msg = JSON.parse(message.body);
					setChatList((chatList) => [...chatList, msg]);
				}
			});
		};

		client.current.onStompError = (frame: StompJs.IFrame) => {
			console.log('Broker reported error: ' + frame.headers['message']);
			console.log('Additional details: ' + frame.body);
		};

		client.current.activate();

		return () => {
			closeServer();
		};
	}, []);

	const sendMessage = (message: string) => {
		client.current.publish({
			destination: `/pub/chat`,
			body: JSON.stringify({
				message_type: 'TALK',
				sender_id: 1,
				chat_room_id: '1',
				message: message
			})
		});
	};

	const closeServer = () => {
		client.current.publish({
			destination: `/pub/chat`,
			body: JSON.stringify({
				message_type: 'EXIT',
				sender_id: 1,
				chat_room_id: '1',
				message: ''
			})
		});

		client.current.deactivate();
	};

	return { chatList, sendMessage, closeServer };
};

export default useWebSockect;
