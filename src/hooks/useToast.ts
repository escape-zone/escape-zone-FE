import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { toastState } from '@recoil/toast';

const useToast = () => {
	const toast = useRecoilValue(toastState);
	const setToast = useSetRecoilState(toastState);
	const resetToast = useResetRecoilState(toastState);

	return { toast, setToast, resetToast };
};

export default useToast;
