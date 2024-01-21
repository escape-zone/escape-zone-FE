import useProgress from '@hooks/useProgress';

const Progress = () => {
	const { progress } = useProgress();

	return (
		<div className={`modal modal-middle modal-${progress.isOpen ? 'open' : ''}`}>
			<progress className="progress progress-primary w-56" style={{ background: '#fff' }}></progress>
		</div>
	);
};

export default Progress;
