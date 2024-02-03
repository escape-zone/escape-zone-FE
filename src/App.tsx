import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Home from '@pages/Home';
import Chat from '@pages/chat';
import ChatRoom from '@src/pages/chat/room';
import Setting from '@pages/setting';
import Stamp from '@pages/stamp';
import Room from '@pages/room';
import RoomCreate from '@pages/room/create';
import Login from '@pages/user/login';
import Register from '@pages/user/register';
import PageNotFound from '@pages/PageNotFound';

import Toast from '@atoms/Toast';
import Dialog from '@atoms/Dialog';
import Progress from '@atoms/Progress';

import useUser from '@hooks/useUser';
import useToast from '@hooks/useToast';
import useDialog from '@hooks/useDialog';
import useProgress from '@hooks/useProgress';

function App() {
	const { toast } = useToast();
	const { dialog } = useDialog();
	const { progress } = useProgress();

	const navigate = useNavigate();
	const location = useLocation();

	const { accessToken, getUserInfo } = useUser();

	useEffect(() => {
		if (location.pathname !== '/login' && location.pathname !== '/register' && !accessToken) {
			navigate('/login');
		}

		// getUserInfo();
	}, [location]);

	return (
		<>
			<BrowserRouter basename="/escape-zone-FE">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/room" element={<Room />}></Route>
					<Route path="/create" element={<RoomCreate />}></Route>
					<Route path="/chat" element={<Chat />}></Route>
					<Route path="/chat/:id" element={<ChatRoom />}></Route>
					<Route path="/setting" element={<Setting />}></Route>
					<Route path="/stamp" element={<Stamp />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="*" element={<PageNotFound />}></Route>
				</Routes>
			</BrowserRouter>

			{toast.isOpen && <Toast />}
			{dialog.isOpen && <Dialog />}
			{progress.isOpen && <Progress />}
		</>
	);
}

export default App;
