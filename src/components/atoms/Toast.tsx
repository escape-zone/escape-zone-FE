import { TbInfoCircle, TbCircleCheck } from 'react-icons/tb';

import Icon from '@atoms/Icon';

import useTimeout from '@hooks/useTimeout';
import useToast from '@hooks/useToast';

const Toast = () => {
	const { toast, resetToast } = useToast();

	// 알럿창 열린 후 2초뒤에 자동으로 닫히기
	useTimeout(resetToast, 2000);

	const findIcon = (type: string) => {
		if (type === 'info')
			return (
				<Icon>
					<TbInfoCircle size="20px" />
				</Icon>
			);
		if (type === 'success')
			return (
				<Icon>
					<TbCircleCheck size="20px" />
				</Icon>
			);
	};

	const getBackgroundColor = (type: string) => {
		if (type === 'info') return 'bg-amber-300';
		if (type === 'success') return 'bg-lime-300';
	};

	return (
		<div className="toast toast-top" style={{ zIndex: 9999 }}>
			<div className={`alert border-0 ${getBackgroundColor(toast.type)}`}>
				<div className="flex gap-2">
					{findIcon(toast.type)}
					<span>{toast.text}</span>
				</div>
			</div>
		</div>
	);
};

export default Toast;
