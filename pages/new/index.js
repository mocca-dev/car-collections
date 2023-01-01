import Layout from '../../components/layout';

const New = () => {
  const headerSettings = {
    showLeft: true,
    showCenter: false,
    showRight: true,
    showLogout: true,
  };

  return <Layout headerSettings={headerSettings}>New</Layout>;
};

export default New;
