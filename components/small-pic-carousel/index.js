import Image from 'next/image';
import styles from './small-pic-carousel.module.css';

import carImage from '../../public/images/cars/car1.jpg';
import NoItems from '../no-items';
import Link from 'next/link';

const SmallPicCarousel = ({ list }) => (
  <div className={styles.container}>
    {list && list.length !== 0 ? (
      list.map((car) => (
        <Link
          href={'/detail'}
          className={styles.itemContainer}
          key={car.description}
        >
          <div className={styles.imageContainer}>
            <Image className={styles.pic} src={carImage} alt="car image" />
            <div className={styles.userName}>@{car.userName}</div>
          </div>
          <div className={styles.backPannel}>{car.description}</div>
        </Link>
      ))
    ) : (
      <NoItems />
    )}
  </div>
);

export default SmallPicCarousel;
