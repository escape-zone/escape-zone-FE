import { atom } from 'recoil';

export interface IUser {
	id: string;
	pw: string;
	name: string;
}

export const user = atom<IUser>({
	key: 'user',
	default: {
		id: 'admin',
		pw: 'admin',
		name: '관리자'
	}
});
