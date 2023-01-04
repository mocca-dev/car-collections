import Image from 'next/image';
import { useContext, useEffect } from 'react';
import BigList from '../../components/big-list';
import Layout from '../../components/layout';
import Section from '../../components/section';
import StatusBar from '../../components/status-bar';
import Context from '../../context';
import styles from './profile.module.css';

const Profile = () => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: 'HIDE_FOOTER' });
    return () => dispatch({ type: 'SHOW_FOOTER' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headerSettings = {
    showLeft: true,
    showCenter: false,
    showRight: true,
    showLogout: true,
  };

  const tileSettings = {
    isEditable: true,
    isLikeable: true,
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
          <BigList tileSettings={tileSettings} />
        </Section>
      </div>
    </Layout>
  );
};

export default Profile;
