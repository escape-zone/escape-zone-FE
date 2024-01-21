import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { progressState } from '@recoil/progress';

const useProgress = () => {
	const progress = useRecoilValue(progressState);
	const setProgress = useSetRecoilState(progressState);
	const resetProgress = useResetRecoilState(progressState);

	return { progress, setProgress, resetProgress };
};

export default useProgress;
