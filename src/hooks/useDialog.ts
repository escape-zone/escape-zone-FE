import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { dialogState } from '@recoil/dialog';

const useDialog = () => {
	const dialog = useRecoilValue(dialogState);
	const resetDialog = useResetRecoilState(dialogState);
	const setDialog = useSetRecoilState(dialogState);

	return { dialog, resetDialog, setDialog };
};

export default useDialog;
