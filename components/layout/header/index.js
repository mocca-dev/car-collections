import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.css';

const Header = ({ settings }) => {
  const { showLeft, showCenter, showRight, showLogout, title, transparent } =
    settings;
  const router = useRouter();

  return (
    <div
      className={`${styles.container} ${
        transparent ? styles.transparent : null
      }`}
    >
      <button
        className={`${styles.tip} ${!showLeft ? styles.hidden : null}`}
        onClick={() => {
          if (!router.back()) router.push('/');
        }}
      >
        <svg
          className={`${transparent ? styles.shadow : null}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
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
      {title ? (
        <h3 className={styles.title}>{title}</h3>
      ) : (
        <Link className={`${!showCenter ? styles.hidden : null}`} href="/">
          <svg
            width="32"
            height="32"
            viewBox="0 0 270 299"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M110.852 185.464C123.236 185.464 133.895 183.433 142.828 179.373C151.761 175.109 161.101 168.409 170.846 159.273L193.991 183.027C171.455 207.999 144.046 220.485 111.765 220.485C79.6874 220.485 52.9896 210.131 31.6719 189.423C10.5573 168.714 0 142.524 0 110.852C0 79.1798 10.7603 52.7866 32.281 31.6719C54.0047 10.5573 81.3116 0 114.202 0C147.295 0 174.906 12.1815 197.036 36.5445L174.196 61.5166C164.044 51.7714 154.401 44.9701 145.265 41.1126C136.331 37.2551 125.774 35.3264 113.593 35.3264C92.072 35.3264 74.0027 42.3308 59.3849 56.3395C44.7671 70.1452 37.4582 87.9099 37.4582 109.634C37.4582 131.154 44.6656 149.224 59.0803 163.841C73.6982 178.256 90.9553 185.464 110.852 185.464Z"
              fill="white"
            />
            <path
              d="M183.816 263.932C196.2 263.932 206.859 261.902 215.792 257.841C224.725 253.578 234.064 246.878 243.81 237.742L266.954 261.496C244.419 286.468 217.01 298.954 184.729 298.954C152.651 298.954 125.953 288.599 104.636 267.891C83.5212 247.182 72.9639 220.992 72.9639 189.32C72.9639 157.648 83.7242 131.255 105.245 110.14C126.969 89.0257 154.275 78.4684 187.166 78.4684C220.259 78.4684 247.87 90.6499 270 115.013L247.16 139.985C237.008 130.24 227.365 123.438 218.228 119.581C209.295 115.724 198.738 113.795 186.556 113.795C165.036 113.795 146.967 120.799 132.349 134.808C117.731 148.614 110.422 166.378 110.422 188.102C110.422 209.623 117.629 227.692 132.044 242.31C146.662 256.725 163.919 263.932 183.816 263.932Z"
              fill="white"
            />
          </svg>
        </Link>
      )}
      <Link
        className={`${!showRight ? styles.hidden : null}`}
        href="/profile/0"
      >
        {!showLogout ? (
          <Image
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
