import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './right.module.css';

const Right = ({ showRight, showLogout }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loadding') {
    return (
      <span>
        <svg
          width="24"
          height="24"
          stroke="#fff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle
              cx="12"
              cy="12"
              r="9.5"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                dur="1.5s"
                calcMode="spline"
                values="0 150;42 150;42 150;42 150"
                keyTimes="0;0.475;0.95;1"
                keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                dur="1.5s"
                calcMode="spline"
                values="0;-16;-59;-59"
                keyTimes="0;0.475;0.95;1"
                keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                repeatCount="indefinite"
              />
            </circle>
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="2s"
              values="0 12 12;360 12 12"
              repeatCount="indefinite"
            />
          </g>
        </svg>
      </span>
    );
  }

  return (
    <span className={`${!showRight ? styles.hidden : null}`}>
      {!showLogout ? (
        <>
          {session ? (
            <Link href="profile">
              <Image
                src={session?.user?.image}
                className={styles.profilePic}
                height={50}
                width={50}
                alt=""
              />
            </Link>
          ) : (
            <div className={styles.userContainer}>
              <div className={styles.userBackgorund}></div>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => router.push('/profile')}
              >
                <g data-name="Layer 2">
                  <g data-name="person">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                    <path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
                  </g>
                </g>
              </svg>
            </div>
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
    </span>
  );
};
export default Right;
