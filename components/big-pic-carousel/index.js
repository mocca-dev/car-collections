import styles from './big-pic-carousel.module.css';
import BigTile from '../big-tile';
import NoItems from '../no-items';

const BigPicCarousel = ({ list }) => (
  <div className={styles.container}>
    {list && list.lenght !== 0 ? (
      list.map((car) => (
        <BigTile
          key={car.description}
          car={car}
          settings={{ isEditable: false, isLinkeable: false }}
        />
      ))
    ) : (
      <NoItems />
    )}
  </div>
);

export default BigPicCarousel;
