import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Context from '../../../../context';
import styles from './right.module.css';

const Right = ({ showRight, showLogout }) => {
  const { data: session, status } = useSession();
  const { state } = useContext(Context);
  const router = useRouter();
  console.log('ADSA', state);
  return (
    <>
      {!showLogout ? (
        <>
          {session ? (
            <Link
              className={`${!showRight ? styles.hidden : null}`}
              href="/profile/0"
            >
              <Image
                src={state?.user.image}
                className={styles.profilePic}
                height={50}
                width={50}
                alt=""
              />
            </Link>
          ) : (
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => router.push('/signin')}
            >
              <g data-name="Layer 2">
                <g data-name="person">
                  <rect width="24" height="24" opacity="0" />
                  <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                  <path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
                </g>
              </g>
            </svg>
          )}
        </>
      ) : (
        <svg
          className={styles.icon}
          onClick={() => signOut()}
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
    </>
  );
};
export default Right;
