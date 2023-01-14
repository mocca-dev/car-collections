import styles from './stat-item.module.css';

const StatItem = ({ label, value }) => (
  <div className={styles.statContainer}>
    <div className={styles.tileContent}>{value}</div>
    <div className={styles.tileHeader}>{label}</div>
  </div>
);

export default StatItem;
