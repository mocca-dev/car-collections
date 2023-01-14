import Image from 'next/image';
import styles from './big-tile.module.css';
import carImage from '../../public/images/cars/car1.jpg';
import Link from 'next/link';

const BigTile = ({ car, settings }) => {
  const { isEditable, isLikeable } = settings;

  return (
    <Link
      href="/detail/0"
      className={styles.itemContainer}
      key={car.description}
    >
      <div className={styles.imageContainer}>
        <Image className={styles.pic} src={carImage} alt="car image" />
        {isEditable ? (
          <div className={styles.icons}>
            <Link className={styles.button} href="/new">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 24 24"
              >
                <g data-name="Layer 2">
                  <g data-name="edit">
                    <rect width="40" height="40" opacity="0" />
                    <path d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z" />
                  </g>
                </g>
              </svg>
            </Link>

            <button className={styles.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 24 24"
              >
                <g data-name="Layer 2">
                  <g data-name="trash-2">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z" />
                    <path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z" />
                    <path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z" />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        ) : null}

        {isLikeable ? (
          <div className={styles.likeContainer}>
            <button className={styles.like}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 24 24"
              >
                <g data-name="Layer 2">
                  <g data-name="heart">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z" />
                  </g>
                </g>
              </svg>
            </button>
            <div className={styles.counter}>10</div>
          </div>
        ) : (
          <Link href={'/profile/1'} className={styles.userName}>
            @{car.userName}
          </Link>
        )}
      </div>
      <div className={styles.backPannel}>{car.description}</div>
    </Link>
  );
};

export default BigTile;
