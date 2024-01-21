import { atom } from 'recoil';

export interface IDialog {
	isOpen: boolean;
	type?: 'info' | 'success' | 'warning' | 'error';
	title: string;
	text: string[];
	children?: React.ReactNode;
	callbackFunc?: { (): void } | null;
}

export const dialogState = atom<IDialog>({
	key: 'dialogState',
	default: { isOpen: false, type: 'info', title: '', text: [''], children: null, callbackFunc: () => {} }
});
