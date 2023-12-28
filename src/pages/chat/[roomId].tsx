import React from 'react';
import Image from 'next/image';

import Layout from '@components/layout';

import { TbSend } from 'react-icons/tb';
import useDetectDevice from '@hooks/useDetectDevice';

const CHAT = [
	{ id: 'me', text: 'It was said that you would, destroy the Sith, not join them.' },
	{ id: 'me', text: 'It was said that you would, destroy the Sith, not join them.' },
	{ id: 'you', text: 'It was said that you would, destroy the Sith, not join them.' },
	{ id: 'me', text: 'It was said that you would, destroy the Sith, not join them.' },
	{ id: 'you', text: 'It was said that you would, destroy the Sith, not join them.' },
	{ id: 'you', text: 'It was said that you would, destroy the Sith, not join them.' },
	{ id: 'me', text: 'It was said that you would, destroy the Sith, not join them.' },
	{ id: 'you', text: 'It was said that you would, destroy the Sith, not join them.' }
];

const ChatRoom = () => {
	const isMobile = useDetectDevice();

	return (
		<Layout isBottomNav={false}>
			{CHAT.map((item, index) =>
				item.id === 'me' ? (
					<div key={index} className="chat chat-end p-3">
						<div className="chat-bubble chat-bubble-primary">{item.text}</div>
					</div>
				) : (
					<div key={index} className="chat chat-start p-3">
						<div className="chat-image avatar">
							<div className="w-10 rounded-full">
								<Image width={500} height={500} src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Album" />
							</div>
						</div>
						<div className="chat-bubble chat-bubble-secondary">{item.text}</div>
					</div>
				)
			)}

			<div className="btm-nav" style={isMobile ? {} : { minWidth: '760px', width: '1024px', left: '50%', transform: 'translate(-50%, -50%)', bottom: '-30px' }}>
				<div className="flex flex-row justify-center m-2">
					<input type="text" placeholder="검색어를 입력해주세요" className="input input-bordered input w-full" />
					<button className="btn btn-ghost">
						<TbSend size="20px" />
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default ChatRoom;
