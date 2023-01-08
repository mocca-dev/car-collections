import { useState } from 'react';
import styles from './text-carousel.module.css';

const TextCarousel = () => {
  const list = [
    { id: 0, text: 'Sport Cars' },
    { id: 1, text: 'Super Cars' },
    { id: 2, text: 'Hyper Cars' },
    { id: 3, text: 'Mega Cars' },
    { id: 4, text: 'Muscle Cars' },
  ];
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.container}>
      {list && list.length
        ? list.map((item) => (
            <button
              key={item.id}
              className={item.id === selected ? styles.selected : null}
              onClick={() => setSelected(item.id)}
            >
              {item.text}
            </button>
          ))
        : null}
    </div>
  );
};

export default TextCarousel;
