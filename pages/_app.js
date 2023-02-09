import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { Montserrat } from '@next/font/google';
import { useReducer } from 'react';
import Context from '../context';
import appReducer from '../reducer';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(appReducer, { showFooter: true });

  return (
    <SessionProvider session={pageProps.session}>
      <Context.Provider value={{ state, dispatch }}>
        <main className={montserrat.className}>
          <Component {...pageProps} />
        </main>
      </Context.Provider>
    </SessionProvider>
  );
}
