import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

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

	const router = useRouter();
	const isMobile = useDetectDevice();

	const toast = useRecoilValue<IToast>(toastState);
	const dialog = useRecoilValue<IDialog>(dialogState);
	const progress = useRecoilValue<IProgress>(progressState);

	return (
		<div className="flex bg-neutral-content justify-center">
			<div style={isMobile ? { width: '100vh' } : { minWidth: '760px', width: '1024px' }}>
				<Header />
				<div className="bg-neutral-content text-base-content min-h-screen pb-16">
					<div className="p-3">{children}</div>
				</div>
				{isBottomNav && <BottomNav isMobile={isMobile} />}

				{/* 공통영역 */}
				{toast.isOpen && <Toast />}
				{dialog.isOpen && <Dialog />}
				{progress.isOpen && <Progress />}
			</div>
		</div>
	);
};

export default Layout;
