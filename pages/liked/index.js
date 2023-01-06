import { useEffect, useState } from 'react';
import BigList from '../../components/big-list';
import Layout from '../../components/layout';
import Section from '../../components/section';
import styles from './liked.module.css';

const Liked = () => {
  const [likedList, setLikedList] = useState();

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

  useEffect(() => {
    const fetchLikedData = async () => {
      const res = await fetch('/api/liked');
      const json = await res.json();
      setLikedList(json);
    };

    fetchLikedData();
  }, []);

  return (
    <Layout headerSettings={headerSettings}>
      <div className={styles.container}>
        <Section>
          <BigList
            tileSettings={tileSettings}
            isLarge={true}
            list={likedList}
          />
        </Section>
      </div>
    </Layout>
  );
};

export default Liked;
