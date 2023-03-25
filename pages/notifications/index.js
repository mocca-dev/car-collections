import { getSession } from 'next-auth/react';
import Layout from '../../components/layout';
import NoItems from '../../components/no-items';
import Notification from '../../components/notification';

const Notifications = ({ notifications }) => {
  const headerSettings = {
    showLeft: true,
    showCenter: false,
    showRight: true,
    showLogout: false,
    title: 'Notifications',
  };

  // useEffect(() => {
  //   const fetchNotifications = async () => {
  //     const res = await fetch('/api/notifications');
  //     const json = await res.json();
  //     setList(json);
  //   };

  //   fetchNotifications();
  // });

  return (
    <Layout headerSettings={headerSettings}>
      {notifications && notifications.lenght !== 0 ? (
        notifications.map((notification) => (
          <Notification key={notification.id} data={notification} />
        ))
      ) : (
        <NoItems />
      )}
    </Layout>
  );
};

export default Notifications;

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { user: {} } };
  }

  let notifications = await prisma.notification.findMany({
    where: { to: session.user.id },
  });

  const fetchCar = async (id) => {
    prisma.car.findMany({
      where: { id },
    });
  };

  const fetchUser = async (id) => {
    prisma.user.findFirst({
      where: { id },
    });
  };

  let fullNotifications = [];

  for (let i = 0; i < notifications.length; i++) {
    const car = await fetchCar(notifications[i].car);
    const author = await fetchUser(notifications[i].authorId);

    fullNotifications[i] = {
      name: author?.name,
      content: ` liked your ${car?.name}`,
      date: '2 days ago',
    };
  }

  return {
    props: {
      notifications: JSON.parse(JSON.stringify(fullNotifications)),
    },
  };
};
