import type { AppProps } from 'next/app';

import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '@src/styles/globals.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<Hydrate state={pageProps?.dehydrateState}>
					<Component {...pageProps} />
				</Hydrate>
			</RecoilRoot>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
