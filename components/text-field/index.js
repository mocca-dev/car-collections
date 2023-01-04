import styles from './text-field.module.css';

const TextField = ({ label, name, placeholder, isTextarea }) => {
  return (
    <span className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          className={styles.textarea}
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          // required
        />
      ) : (
        <input
          className={styles.input}
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          // required
        />
      )}
    </span>
  );
};

export default TextField;
