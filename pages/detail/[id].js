import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Context from '../../context';
import styles from './detail.module.css';

const Detail = () => {
  const { dispatch } = useContext(Context);
  const [isClosed, setIsClosed] = useState(false);
  const [detail, setDetail] = useState();
  const router = useRouter();
  const { id } = router.query;

  const headerSettings = {
    showLeft: true,
    showCenter: false,
    showRight: true,
    showLogout: false,
    title: '',
    transparent: true,
  };

  useEffect(() => {
    dispatch({ type: 'HIDE_FOOTER' });

    return () => dispatch({ type: 'SHOW_FOOTER' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchDetailData = async () => {
      const resp = await fetch(`/api/detail/${id}`);
      const json = await resp.json();
      setDetail(json);
    };

    if (id) fetchDetailData();
  }, [id]);

  return (
    <Layout headerSettings={headerSettings}>
      <div className={`${styles.card} ${isClosed ? styles.closed : null}`}>
        <div
          className={styles.barContainer}
          onClick={() => setIsClosed((prevValue) => !prevValue)}
        >
          <div className={styles.bar}></div>
        </div>
        <div className={styles.header}>
          <span>
            <h3>{detail?.name}</h3>
            <p className={styles.inCollection}>
              In collection since April 2022
            </p>
          </span>
          <Link href={'/profile/1'} className={styles.ownerContainer}>
            <span>
              <p className={styles.pOwner}>Owned by</p>
              <p className={styles.pOwner}>@{detail?.owner}</p>
            </span>
            <Image
              priority
              src="/images/shmee.jpg"
              className={styles.profilePic}
              height={40}
              width={40}
              alt="Profile picture"
            />
          </Link>
        </div>
        <h3>Description</h3>
        <div className={styles.descriptionContainer}>
          <div className={styles.fadeOut}></div>
          <p className={styles.description}>
            {detail?.description}
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className={styles.pic}></div>
    </Layout>
  );
};

export default Detail;
