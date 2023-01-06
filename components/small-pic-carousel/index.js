import Image from 'next/image';
import styles from './small-pic-carousel.module.css';

import carImage from '../../public/images/cars/car1.jpg';
import { useState } from 'react';
import NoItems from '../no-items';

const SmallPicCarousel = ({ list }) => (
  <div className={styles.container}>
    {list && list.length !== 0 ? (
      list.map((car) => {
        return (
          <span className={styles.itemContainer} key={car.description}>
            <div className={styles.imageContainer}>
              <Image className={styles.pic} src={carImage} alt="car image" />
              <div className={styles.userName}>@{car.userName}</div>
            </div>
            <div className={styles.backPannel}>{car.description}</div>
          </span>
        );
      })
    ) : (
      <NoItems />
    )}
  </div>
);

export default SmallPicCarousel;
