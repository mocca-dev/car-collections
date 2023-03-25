import styles from './select.module.css';

const Select = ({ list, label }) => (
  <>
    <label className={styles.label} htmlFor="category">
      {label}
    </label>
    <span className={styles.container}>
      <select className={styles.select} name="category" id="category">
        <option
          className={styles.default}
          value="none"
          defaultValue={true}
          disabled
          hidden
        >
          Select an option
        </option>

        {list?.length &&
          list.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}

        {/* <option value="1">Sport</option>
          <option value="2">Super</option>
          <option value="3">Hyper</option>
          <option value="4">Mega</option>
          <option value="5">Muscle</option> */}
      </select>
      <svg
        className={styles.arrow}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g data-name="Layer 2">
          <g data-name="arrow-ios-back">
            <rect
              width="24"
              height="24"
              transform="rotate(90 12 12)"
              opacity="0"
            />
            <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
          </g>
        </g>
      </svg>
    </span>
  </>
);

export default Select;
