import { changeInfo, userInfo, userLogin, userLogout } from '@api/user';

import useToast from '@hooks/useToast';
import { userState } from '@src/recoil/user';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

const useUser = () => {
	const navigate = useNavigate();

	const { setToast } = useToast();

	const user = useRecoilValue(userState);
	const setUser = useSetRecoilState(userState);
	const resetUser = useResetRecoilState(userState);

	const accessToken = localStorage.getItem('accessToken');

	const setAccessToken = ({ accessToken }: { accessToken: string }) => {
		if (accessToken) localStorage.setItem('accessToken', accessToken);
	};

	const login = async (body: { email: string; password: string }) => {
		const response = await userLogin(body);
		if (response?.success) {
			setToast({ isOpen: true, type: 'success', text: '로그인 완료 되었습니다' });
			setAccessToken(response.data);
			navigate('/');
		} else {
			setToast({ isOpen: true, type: 'warning', text: '로그인 실패 되었습니다' });
		}
	};

	const logout = async (body: { email: string }) => {
		if (accessToken) {
			const response = await userLogout(accessToken, body);
			if (response?.success) {
				localStorage.removeItem('accessToken');
				resetUser();
				setToast({ isOpen: true, type: 'success', text: '로그아웃 완료 되었습니다' });
				navigate('/login');
			} else {
				setToast({ isOpen: true, type: 'warning', text: '로그아웃 실패 되었습니다' });
			}
		}
	};

	const getUserInfo = async () => {
		if (accessToken) {
			const response = await userInfo(accessToken);
			setUser(response);
		}
	};

	const changePassword = async (password: string) => {
		if (accessToken) {
			const response = await changeInfo(accessToken, { email: user.email, password });
			if (response.success) {
				setToast({ isOpen: true, type: 'success', text: '비밀번호 변경이 완료 되었습니다' });
				getUserInfo();
			}
		}
	};

	const changeNickname = async (nickname: string) => {
		if (accessToken) {
			const response = await changeInfo(accessToken, { email: user.email, nickname });
			if (response.success) {
				setToast({ isOpen: true, type: 'success', text: '닉네임 변경이 완료 되었습니다' });
				getUserInfo();
			}
		}
	};

	return { user, accessToken, login, logout, setUser, resetUser, getUserInfo, changePassword, changeNickname };
};

export default useUser;
