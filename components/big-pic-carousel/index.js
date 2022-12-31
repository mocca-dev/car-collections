import { useState } from 'react';
import styles from './big-pic-carousel.module.css';
import BigTile from '../big-tile';

const BigPicCarousel = () => {
  const [list] = useState([
    { description: 'Audi RS5 2020', userName: 'Shmee150' },
    { description: 'Audi RS5 2021', userName: 'Toneko' },
    { description: 'Audi RS5 2022', userName: 'Juancito' },
    { description: 'Audi RS5 2023', userName: 'Pepito' },
  ]);

  return (
    <div className={styles.container}>
      {list.map((car) => (
        <BigTile
          key={car.description}
          car={car}
          settings={{ isEditable: false, isLinkeable: false }}
        />
      ))}
    </div>
  );
};

export default BigPicCarousel;
