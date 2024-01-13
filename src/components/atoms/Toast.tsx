import React from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import { toastState } from '@recoil/toast';

import { TbInfoCircle, TbCircleCheck } from 'react-icons/tb';
import useTimeout from '@hooks/useTimeout';

const Toast = () => {
	const toast = useRecoilValue(toastState);
	const resetToast = useResetRecoilState(toastState);

	// 알럿창 열린 후 2초뒤에 자동으로 닫히기
	useTimeout(resetToast, 2000);

	const _findIcon = (type: string) => {
		if (type === 'info') return <TbInfoCircle size="20px" />;
		if (type === 'success') return <TbCircleCheck size="20px" />;
	};

	return (
		<div className="toast toast-top" style={{ zIndex: 9999 }}>
			<div className={`alert alert-${toast.type}`}>
				<div>
					{_findIcon(toast.type)}
					<span>{toast.text}</span>
				</div>
			</div>
		</div>
	);
};

export default Toast;
