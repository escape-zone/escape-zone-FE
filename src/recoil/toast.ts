import { atom } from 'recoil';

export interface IToast {
	isOpen: boolean;
	type: 'info' | 'success';
	text: string;
}

export const toastState = atom<IToast>({
	key: 'toastState',
	default: { isOpen: false, type: 'info', text: '' }
});
