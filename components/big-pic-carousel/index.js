import Image from 'next/image';
import styles from './big-pic-carousel.module.css';

import carImage from '../../public/images/cars/car1.jpg';
import { useState } from 'react';

const BigPicCarousel = () => {
  const [list, setList] = useState([
    { description: 'Audi RS5 2020' },
    { description: 'Audi RS5 2021' },
    { description: 'Audi RS5 2022' },
    { description: 'Audi RS5 2023' },
  ]);
  return (
    <div className={styles.container}>
      {list.map((car) => {
        return (
          <span className={styles.itemContainer} key={car.description}>
            <Image
              // priority
              // src="/images/cars/car1.jpg"
              className={styles.pic}
              // la
              src={carImage}
              alt="car image"
            />
            <div className={styles.backPannel}>{car.description}</div>
          </span>
        );
      })}
    </div>
  );
};

export default BigPicCarousel;
