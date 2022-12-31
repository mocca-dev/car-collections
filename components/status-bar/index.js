import { useState } from 'react';
import StatusBarItem from './status-bar-item';
import styles from './status-bar.module.css';

const StatusBar = () => {
  const [list] = useState([
    { label: 'Followers', value: '4K' },
    { label: 'Following', value: '1K' },
    { label: 'Cars', value: '8' },
  ]);

  return (
    <div className={styles.container}>
      {list.map((statusItem) => (
        <StatusBarItem key={statusItem.label} data={statusItem} />
      ))}
    </div>
  );
};

export default StatusBar;
