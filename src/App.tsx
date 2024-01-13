import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages';
import Chat from '@pages/chat';
import ChatRoom from '@pages/chat/chatRoom';
import Search from '@pages/search';
import Setting from '@pages/setting';
import Stamp from '@pages/stamp';
import Theme from '@pages/theme';
import ThemeCreate from '@pages/theme/create';
import Login from '@pages/user/login';
import UserSetting from '@pages/user/setting';
import Register from '@pages/user/register';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/chat" element={<Chat />}></Route>
			<Route path="/chat/:id" element={<ChatRoom />}></Route>
			<Route path="/search" element={<Search />}></Route>
			<Route path="/setting" element={<Setting />}></Route>
			<Route path="/stamp" element={<Stamp />}></Route>
			<Route path="/theme" element={<Theme />}></Route>
			<Route path="/theme/create" element={<ThemeCreate />}></Route>
			<Route path="/register" element={<Register />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/user/setting" element={<UserSetting />}></Route>
		</Routes>
	);
}

export default App;
