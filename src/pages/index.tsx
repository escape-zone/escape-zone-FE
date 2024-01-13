import React, { useEffect } from 'react';

import Layout from '@src/components/molecules/Layout';
import { useSetRecoilState } from 'recoil';
import { toastState } from '@src/recoil/toast';

const Home = () => {
	const setToast = useSetRecoilState(toastState);

	useEffect(() => {
		setToast({ isOpen: true, text: 'tes ', type: 'info' });
	}, []);

	return (
		<Layout isBottomNav={true}>
			<div>HOME</div>
		</Layout>
	);
};

export default Home;
