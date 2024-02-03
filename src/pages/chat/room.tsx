import { TbSend, TbSwords } from 'react-icons/tb';

import Layout from '@molecules/Layout';
import Icon from '@atoms/Icon';

import useDialog from '@hooks/useDialog';
import useWebSockect from '@hooks/useWebSocket';

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
	const { setDialog } = useDialog();

	const { chatList, sendMessage } = useWebSockect('1');

	const readyUser = () => {
		return (
			<div className="grid grid-cols-4 gap-4">
				<div className="flex justify-center">
					<div className="avatar online placeholder">
						<div className="bg-primary text-neutral-content rounded-full w-24">
							<span className="text-3xl">D</span>
						</div>
					</div>
				</div>
				<div className="flex avatar placeholder justify-center">
					<div className="bg-primary text-neutral-content rounded-full w-24">
						<span className="text-3xl">D</span>
					</div>
				</div>
				<div className="flex avatar placeholder justify-center">
					<div className="bg-primary text-neutral-content rounded-full w-24">
						<span className="text-3xl">D</span>
					</div>
				</div>
				<div className="flex avatar placeholder justify-center">
					<div className="bg-primary text-neutral-content rounded-full w-24">
						<span className="text-3xl">D</span>
					</div>
				</div>
				<div className="flex avatar placeholder justify-center">
					<div className="bg-primary text-neutral-content rounded-full w-24">
						<span className="text-3xl">D</span>
					</div>
				</div>
				<div className="flex avatar placeholder justify-center">
					<div className="bg-primary text-neutral-content rounded-full w-24">
						<span className="text-3xl">D</span>
					</div>
				</div>
			</div>
		);
	};

	const handleDialog = () => {
		setDialog({
			isOpen: true,
			title: 'Ready!',
			text: [''],
			children: readyUser(),
			callbackFunc: () => {}
		});
	};

	return (
		<Layout isBottomNav={false} title={'채팅방 방제목'}>
			{CHAT.map((item, index) =>
				item.id === 'me' ? (
					<div key={index} className="chat chat-end p-3">
						<div className="chat-bubble chat-bubble-primary">{item.text}</div>
					</div>
				) : (
					<div key={index} className="chat chat-start p-3">
						<div className="chat-image avatar">
							<div className="w-10 rounded-full">
								<img width={500} height={500} src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Album" />
							</div>
						</div>
						<div className="chat-bubble chat-bubble-secondary">{item.text}</div>
					</div>
				)
			)}

			<div className="btm-nav">
				<div className="flex flex-row justify-center m-2">
					<button className="btn btn-ghost" onClick={handleDialog}>
						<Icon>
							<TbSwords size="20px" />
						</Icon>
					</button>
					<input type="text" placeholder="검색어를 입력해주세요" className="input input-bordered input w-full" />
					<button
						className="btn btn-ghost"
						onClick={() => {
							sendMessage('1231231');
						}}
					>
						<Icon>
							<TbSend size="20px" />
						</Icon>
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default ChatRoom;
