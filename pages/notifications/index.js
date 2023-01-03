import { useState } from 'react';
import Layout from '../../components/layout';
import Notification from '../../components/notification';

const Notifications = () => {
  const [list] = useState([
    {
      id: '1',
      name: 'John Doe',
      content: 'liked your Mercedes-Benz SLS AMG Black Series',
      date: '3 days ago',
    },
    {
      id: '2',
      name: 'John Doe',
      content: 'liked your Mercedes-Benz SLS AMG Black Series',
      date: '3 days ago',
    },
    {
      id: '3',
      name: 'John Doe',
      content: 'liked your Mercedes-Benz SLS AMG Black Series',
      date: '3 days ago',
    },
    {
      id: '4',
      name: 'John Doe',
      content: 'liked your Mercedes-Benz SLS AMG Black Series',
      date: '3 days ago',
    },
  ]);

  const headerSettings = {
    showLeft: true,
    showCenter: false,
    showRight: true,
    showLogout: false,
    title: 'Notifications',
  };

  return (
    <Layout headerSettings={headerSettings}>
      {list.map((notification) => (
        <Notification key={notification.id} data={notification} />
      ))}
    </Layout>
  );
};

export default Notifications;
