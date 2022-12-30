import styles from './searchbox.module.css';

const SearchBox = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for owner, car..."
      />
      <button className={styles.button}>S</button>
    </div>
  );
};

export default SearchBox;
