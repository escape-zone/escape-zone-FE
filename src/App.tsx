import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Chat from '@pages/chat';
import ChatRoom from '@src/pages/chat/room';
import Setting from '@pages/setting';
import Stamp from '@pages/stamp';
import Room from '@pages/room';
import RoomCreate from '@src/pages/room/create';
import Login from '@pages/user/login';
import Register from '@pages/user/register';

import Toast from '@atoms/Toast';
import Dialog from '@atoms/Dialog';
import Progress from '@atoms/Progress';

import { useRecoilValue } from 'recoil';
import { IToast, toastState } from '@recoil/toast';
import { IDialog, dialogState } from '@recoil/dialog';
import { IProgress, progressState } from '@recoil/progress';

function App() {
	const toast = useRecoilValue<IToast>(toastState);
	const dialog = useRecoilValue<IDialog>(dialogState);
	const progress = useRecoilValue<IProgress>(progressState);

	return (
		<>
			<Routes>
				<Route path="/" element={<Room />}></Route>
				<Route path="/create" element={<RoomCreate />}></Route>
				<Route path="/chat" element={<Chat />}></Route>
				<Route path="/chat/:id" element={<ChatRoom />}></Route>
				<Route path="/setting" element={<Setting />}></Route>
				<Route path="/stamp" element={<Stamp />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
			</Routes>

			{toast.isOpen && <Toast />}
			{dialog.isOpen && <Dialog />}
			{progress.isOpen && <Progress />}
		</>
	);
}

export default App;
