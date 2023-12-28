import React from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import { dialogState } from '@recoil/dialog';

import { TbInfoCircle, TbCircleCheck, TbAlertTriangle, TbCircleX } from 'react-icons/tb';

const Dialog = () => {
	const dialog = useRecoilValue(dialogState);
	const resetDialog = useResetRecoilState(dialogState);

	// 확인 버튼
	const _handleConfirm = () => {
		if (dialog.callbackFunc) dialog.callbackFunc();
		resetDialog();
	};

	const _findIcon = (type: string) => {
		if (type === 'info') return <TbInfoCircle className="stroke-info" size="50px" />;
		if (type === 'success') return <TbCircleCheck className="stroke-success" size="50px" />;
		if (type === 'warning') return <TbAlertTriangle className="stroke-warning" size="50px" />;
		if (type === 'error') return <TbCircleX className="stroke-error" size="50px" />;
	};

	return (
		<div className={`modal modal-middle modal-${dialog.isOpen ? 'open' : ''}`}>
			<div className="modal-box bg-neutral">
				<div className="flex justify-center" style={{ justifyContent: 'center' }}>
					{_findIcon(dialog.type)}
				</div>
				<br />
				<h3 className="font-bold text-lg flex justify-center" style={{ justifyContent: 'center' }}>
					{dialog.title}
				</h3>
				<br />
				{dialog.text.map((item, index) => (
					<p key={index} className="py-2 flex justify-center" style={{ justifyContent: 'center' }}>
						{item}
					</p>
				))}
				<br />
				<div className="modal-action flex" style={{ justifyContent: 'center' }}>
					<label htmlFor="my-modal" className="btn btn-ghost" onClick={resetDialog}>
						취소
					</label>
					<label htmlFor="my-modal" className="btn  btn-primary" onClick={_handleConfirm}>
						확인
					</label>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
