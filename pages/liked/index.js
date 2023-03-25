import { getSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';
import BigList from '../../components/big-list';
import Layout from '../../components/layout';
import Section from '../../components/section';
import styles from './liked.module.css';

const Liked = ({ collection }) => {
  // const [likedList, setLikedList] = useState();
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

  // useEffect(() => {
  //   const fetchLikedData = async () => {
  //     const res = await fetch('/api/liked');
  //     const json = await res.json();
  //     setLikedList(json);
  //   };

  //   fetchLikedData();
  // }, []);

  return (
    <Layout headerSettings={headerSettings}>
      <div className={styles.container}>
        <Section>
          <BigList
            tileSettings={tileSettings}
            isLarge={true}
            list={collection}
          />
        </Section>
      </div>
    </Layout>
  );
};

export default Liked;

// export const getServerSideProps = async ({ req, res }) => {
//   const session = await getSession({ req });
//   if (!session) {
//     res.statusCode = 403;
//     return { props: { user: {} } };
//   }

//   let collection = await prisma.liked.findMany({
//     where: { userId: session.user.id },
//   });

//   return {
//     props: {
//       collection: JSON.parse(JSON.stringify(collection)),
//     },
//   };
// };
