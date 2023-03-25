import { getSession } from 'next-auth/react';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import BigList from '../../components/big-list';
import Layout from '../../components/layout';
import Section from '../../components/section';
import StatusBar from '../../components/status-bar';
import Context from '../../context';
import styles from './profile.module.css';

const Profile = ({ user, collection }) => {
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
        {user?.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <Image
            className={styles.profilePic}
            src={user?.image}
            height={100}
            width={130}
            alt="Profile picture"
          />
        ) : (
          <Image
            src="/images/profile.png"
            className={styles.profilePic}
            height={100}
            width={130}
            alt="Profile picture"
          />
        )}
        <div>{user?.name}</div>
        <div className={styles.userName}>@{user?.at}</div>
        <StatusBar
          data={{
            followers: user?.followers,
            following: user?.following,
            cars: 0,
          }}
        />
        <Section title="Collection">
          <BigList tileSettings={tileSettings} list={collection} />
        </Section>
      </div>
    </Layout>
  );
};

export default Profile;

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  debugger;
  if (!session) {
    res.statusCode = 403;
    return { props: { user: {} } };
  }

  const user = await prisma.user.findMany({
    where: { email: session.user.email },
  });

  let collection = await prisma.car.findMany({
    where: { authorId: session.user.id },
  });

  return {
    props: {
      user: user[0],
      collection: JSON.parse(JSON.stringify(collection)),
    },
  };
};
