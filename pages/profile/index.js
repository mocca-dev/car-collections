import Image from 'next/image';
import BigList from '../../components/big-list';
import Layout from '../../components/layout';
import Section from '../../components/section';
import StatusBar from '../../components/status-bar';
import styles from './profile.module.css';

const Profile = () => {
  const headerSettings = {
    showLeft: true,
    showCenter: false,
    showRight: true,
    showLogout: true,
  };

  return (
    <Layout headerSettings={headerSettings}>
      <div className={styles.container}>
        <Image
          priority
          src="/images/profile.png"
          className={styles.profilePic}
          height={100}
          width={130}
          alt=""
        />
        <div>John Doe</div>
        <div className={styles.userName}>@John_Doe1</div>
        <StatusBar />
        <Section title="Collection">
          <BigList />
        </Section>
      </div>
    </Layout>
  );
};

export default Profile;
