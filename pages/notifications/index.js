import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import NoItems from '../../components/no-items';
import Notification from '../../components/notification';

const Notifications = () => {
  const [list, setList] = useState();

  const headerSettings = {
    showLeft: true,
    showCenter: false,
    showRight: true,
    showLogout: false,
    title: 'Notifications',
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await fetch('/api/notifications');
      const json = await res.json();
      setList(json);
    };

    fetchNotifications();
  });

  return (
    <Layout headerSettings={headerSettings}>
      {list && list.lenght !== 0 ? (
        list.map((notification) => (
          <Notification key={notification.id} data={notification} />
        ))
      ) : (
        <NoItems />
      )}
    </Layout>
  );
};

export default Notifications;
