import BigList from '../../components/big-list';
import Layout from '../../components/layout';
import Section from '../../components/section';
import styles from './liked.module.css';

const Liked = () => {
  const headerSettings = {
    showLeft: true,
    showCenter: false,
    showRight: true,
    showLogout: false,
    title: 'Liked',
  };

  const tileSettings = {
    isEditable: false,
    isLikeable: true,
  };

  return (
    <Layout headerSettings={headerSettings}>
      <div className={styles.container}>
        <Section>
          <BigList tileSettings={tileSettings} isLarge={true} />
        </Section>
      </div>
    </Layout>
  );
};

export default Liked;
