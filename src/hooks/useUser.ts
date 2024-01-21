import { userLogin } from '@api/user';

import useToast from '@hooks/useToast';
import { useNavigate } from 'react-router-dom';

const useUser = () => {
	const navigate = useNavigate();

	const { setToast } = useToast();

	const accessToken = localStorage.getItem('accessToken');

	const setAccessToken = ({ accessToken }: { accessToken: string }) => {
		if (accessToken) localStorage.setItem('accessToken', accessToken);
	};

	const login = async (userInfo: { email: string; password: string }) => {
		const response = await userLogin(userInfo);
		if (response?.success) {
			setToast({ isOpen: true, type: 'success', text: '로그인 완료 되었습니다' });
			setAccessToken(response.data);

			setTimeout(() => {
				navigate('/');
			}, 500);
		} else {
			setToast({ isOpen: true, type: 'warning', text: '로그인 실패 되었습니다' });
			return;
		}
	};

	return { accessToken, login };
};

export default useUser;
