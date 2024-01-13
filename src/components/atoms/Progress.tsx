import React from 'react';

import { useRecoilValue } from 'recoil';
import { progressState } from '@recoil/progress';

const Progress = () => {
	const dialog = useRecoilValue(progressState);

	return (
		<div className={`modal modal-middle modal-${dialog.isOpen ? 'open' : ''}`}>
			<progress className="progress progress-primary w-56" style={{ background: '#fff' }}></progress>
		</div>
	);
};

export default Progress;
