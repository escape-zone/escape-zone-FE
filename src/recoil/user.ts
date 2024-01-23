import { atom } from 'recoil';

export interface IUser {
	name: string;
	email: string;
	nickname: string;
	password: string;
}

export const userState = atom<IUser>({
	key: 'userState',
	default: { name: '', email: '', nickname: '', password: '' }
});
