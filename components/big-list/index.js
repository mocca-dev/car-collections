import BigTile from '../big-tile';
import NoItems from '../no-items';
import styles from './big-list.module.css';

const BigList = ({ tileSettings, isLarge, list }) => (
  <div
    className={`${styles.container} ${isLarge ? styles.large : styles.short}`}
  >
    {list ? (
      list.map((car) => (
        <BigTile key={car.description} car={car} settings={tileSettings} />
      ))
    ) : (
      <NoItems />
    )}
  </div>
);

export default BigList;
