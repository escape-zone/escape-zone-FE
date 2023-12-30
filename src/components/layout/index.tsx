import React, { ReactNode } from 'react';

import BottomNav from './BottomNav';
import Header from './Header';

import { useRecoilValue } from 'recoil';
import { toastState, IToast } from '@recoil/toast';
import { IDialog, dialogState } from '@recoil/dialog';
import { IProgress, progressState } from '@recoil/progress';

import Toast from '@components/Toast';
import Dialog from '@components/Dialog';
import Progress from '@components/Progress';

import useDetectDevice from '@hooks/useDetectDevice';

interface ILayout {
	children: ReactNode;
	isBottomNav: boolean;
}

const Layout = (props: ILayout) => {
	const { children, isBottomNav = true } = props;

	const isMobile = useDetectDevice();

	const toast = useRecoilValue<IToast>(toastState);
	const dialog = useRecoilValue<IDialog>(dialogState);
	const progress = useRecoilValue<IProgress>(progressState);

	return (
		<div className="mockup-browser bg-white p-1">
			<Header />
			<div className="flex bg-neutral-content justify-center p-4 border-base-300">
				<div className="flex bg-neutral-content justify-center">
					<div className="bg-neutral-content text-base-content min-h-screen pb-16">{children}</div>
					{isBottomNav && <BottomNav isMobile={isMobile} />}

					{toast.isOpen && <Toast />}
					{dialog.isOpen && <Dialog />}
					{progress.isOpen && <Progress />}
				</div>
			</div>
		</div>
	);
};

export default Layout;
