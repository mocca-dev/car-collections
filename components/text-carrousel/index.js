import { useState } from 'react';
import styles from './text-carousel.module.css';

const TextCarousel = () => {
  const [list, setList] = useState([
    'Sport Cars',
    'Super Cars',
    'Hyper Cars',
    'Mega Cars',
    'Muscle Cars',
  ]);
  return (
    <div className={styles.container}>
      {list.map((item) => (
        <button
          key={item}
          className={item === 'Sport Cars' ? styles.selected : null}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default TextCarousel;
