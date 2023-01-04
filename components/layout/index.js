import { useContext } from 'react';
import Context from '../../context';
import Footer from './footer';
import Header from './header';
import styles from './layout.module.css';

const Layout = ({ children, headerSettings, ...props }) => {
  const { state } = useContext(Context);

  return (
    <>
      <Header settings={headerSettings} />
      <main className={styles.main} {...props}>
        {children}
      </main>
      {state && state.showFooter ? <Footer /> : null}
    </>
  );
};
export default Layout;
