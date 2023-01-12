import Link from 'next/link';
import BigTile from '../big-tile';
import NoItems from '../no-items';
import styles from './big-list.module.css';

const BigList = ({ tileSettings, isLarge, list }) => (
  <div
    className={`${styles.container} ${isLarge ? styles.large : styles.short}`}
  >
    {list ? (
      list.map((car) => (
        <Link href={'/detail/0'} key={car.description}>
          <BigTile car={car} settings={tileSettings} />
        </Link>
      ))
    ) : (
      <NoItems />
    )}
  </div>
);

export default BigList;
