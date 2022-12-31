import Image from 'next/image';
import styles from './big-tile.module.css';
import carImage from '../../public/images/cars/car1.jpg';

const BigTile = ({ car }) => (
  <span className={styles.itemContainer} key={car.description}>
    <div className={styles.imageContainer}>
      <Image className={styles.pic} src={carImage} alt="car image" />
      <div className={styles.userName}>@{car.userName}</div>
    </div>
    <div className={styles.backPannel}>{car.description}</div>
  </span>
);

export default BigTile;
