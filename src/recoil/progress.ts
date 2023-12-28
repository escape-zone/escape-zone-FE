import { atom } from 'recoil';

export interface IProgress {
	isOpen: boolean;
}

export const progressState = atom<IProgress>({
	key: 'progressState',
	default: { isOpen: false }
});
