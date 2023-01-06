import { useEffect, useState } from 'react';
import NoItems from '../no-items';
import StatusBarItem from './status-bar-item';
import styles from './status-bar.module.css';

const StatusBar = ({ data }) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    setList([
      { label: 'Followers', value: data?.followers },
      { label: 'Following', value: data?.following },
      { label: 'Cars', value: data?.cars },
    ]);
  }, [data]);

  return (
    <div className={styles.container}>
      {list && list.lenght !== 0 ? (
        list.map((statusItem) => (
          <StatusBarItem key={statusItem.label} data={statusItem} />
        ))
      ) : (
        <NoItems />
      )}
    </div>
  );
};

export default StatusBar;
