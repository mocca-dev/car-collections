import Image from 'next/image';
import styles from './small-pic-carousel.module.css';

import carImage from '../../public/images/cars/car1.jpg';
import { useState } from 'react';

const SmallPicCarousel = () => {
  const [list, setList] = useState([
    { description: 'Audi RS5 2020dddd', userName: 'Shmee150' },
    { description: 'Audi RS5 2021', userName: 'Toneko' },
    { description: 'Audi RS5 2022', userName: 'Juancito' },
    { description: 'Audi RS5 2023', userName: 'Pepito' },
    { description: 'Audi RS5 2023', userName: 'Pepito' },
    { description: 'Audi RS5 2023', userName: 'Pepito' },
    { description: 'Audi RS5 2023', userName: 'Pepito' },
  ]);
  return (
    <div className={styles.container}>
      {list.map((car) => {
        return (
          <span className={styles.itemContainer} key={car.description}>
            <div className={styles.imageContainer}>
              <Image className={styles.pic} src={carImage} alt="car image" />
              <div className={styles.userName}>@{car.userName}</div>
            </div>
            <div className={styles.backPannel}>{car.description}</div>
          </span>
        );
      })}
    </div>
  );
};

export default SmallPicCarousel;
