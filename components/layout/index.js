import Footer from './footer';
import Header from './header';
import styles from './layout.module.css';

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <main className={styles.main} {...props}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
