import Layout from '../../components/layout';

const Notifications = () => {
  const headerSettings = {
    showLeft: true,
    showCenter: false,
    showRight: true,
    showLogout: true,
  };

  return <Layout headerSettings={headerSettings}>Notifications</Layout>;
};

export default Notifications;
