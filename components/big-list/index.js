import { useState } from 'react';
import BigTile from '../big-tile';
import styles from './big-list.module.css';

const BigList = ({ tileSettings, isLarge }) => {
  const [list] = useState([
    { description: 'Audi RS5 2020', userName: 'Shmee150' },
    { description: 'Audi RS5 2021', userName: 'Toneko' },
    { description: 'Audi RS5 2022', userName: 'Juancito' },
    { description: 'Audi RS5 2023', userName: 'Pepito' },
  ]);

  return (
    <div
      className={`${styles.container} ${isLarge ? styles.large : styles.short}`}
    >
      {list.map((car) => (
        <BigTile key={car.description} car={car} settings={tileSettings} />
      ))}
    </div>
  );
};

export default BigList;
