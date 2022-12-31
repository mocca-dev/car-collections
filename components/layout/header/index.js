import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.css';

const Header = ({ settings }) => {
  const { showLeft, showCenter, showRight, showLogout } = settings;
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={`${styles.tip} ${!showLeft ? styles.hidden : null}`}
        onClick={() => router.back()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <g data-name="arrow-ios-back">
              <rect
                width="24"
                height="24"
                transform="rotate(90 12 12)"
                opacity="0"
              />
              <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
            </g>
          </g>
        </svg>
      </button>
      <Link className={`${!showCenter ? styles.hidden : null}`} href="/">
        logo
      </Link>
      <Link className={`${!showRight ? styles.hidden : null}`} href="/profile">
        {!showLogout ? (
          <Image
            priority
            src="/images/profile.png"
            className={styles.profilePic}
            height={50}
            width={50}
            alt=""
          />
        ) : (
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <g data-name="log-out">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(90 12 12)"
                  opacity="0"
                />
                <path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z" />
                <path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z" />
              </g>
            </g>
          </svg>
        )}
      </Link>
    </div>
  );
};

export default Header;
