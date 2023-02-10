import styles from './status-bar-item.module.css';

const StatusBarItem = ({ data }) => {
  const { label, value } = data;

  return (
    <div className={styles.container}>
      <div>{!!value ? value : 0}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default StatusBarItem;
