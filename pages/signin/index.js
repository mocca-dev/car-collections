import Link from 'next/link';
import Layout from '../../components/layout';
import styles from './signin.module.css';

const Signin = () => {
  const headerSettings = {
    showLeft: true,
    showCenter: false,
    showRight: false,
    showLogout: false,
    title: 'Sign In',
  };

  return (
    <Layout headerSettings={headerSettings}>
      <div className={styles.container}>
        <p>Sign in with one of the following options</p>
        <Link className={styles.socialLink} href="/api/auth/signin">
          <svg className={styles.icon} viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="google">
                <polyline points="0 0 24 0 24 24 0 24" opacity="0" />
                <path d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93 6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29 10.12 10.12 0 0 0 11.57 22 10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5" />
              </g>
            </g>
          </svg>
        </Link>
        <Link className={styles.socialLink} href="/api/auth/signin">
          <svg className={styles.icon} viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="twitter">
                <polyline points="0 0 24 0 24 24 0 24" opacity="0" />
                <path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20" />
              </g>
            </g>
          </svg>
        </Link>
      </div>
    </Layout>
  );
};

export default Signin;
