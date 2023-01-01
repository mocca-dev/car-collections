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
  };

  const tileSettings = {
    isEditable: true,
    isLikeable: true,
  };

  return (
    <Layout headerSettings={headerSettings}>
      <div className={styles.container}>
        <Section title="Liked">
          <BigList tileSettings={tileSettings} isLarge={true} />
        </Section>
      </div>
    </Layout>
  );
};

export default Liked;
