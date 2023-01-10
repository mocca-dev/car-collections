import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Context from '../../context';
import styles from './detail.module.css';

const Detail = () => {
  const { dispatch } = useContext(Context);
  const [isClosed, setIsClosed] = useState(false);

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
            <h3>Audi A4 2022</h3>
            <p className={styles.inCollection}>
              In collection since April 2022
            </p>
          </span>
          <Link href={'/profile/1'} className={styles.ownerContainer}>
            <span>
              <p className={styles.pOwner}>Owned by</p>
              <p className={styles.pOwner}>@Shmee150</p>
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
        <p className={styles.description}>
          Gracias al diseño progresivo con un aspecto frontal definido con
          precisión y una trasera característica, el carácter deportivo del Audi
          A4 Sedan se manifiesta más que nunca: un interior premium y funcional,
          tecnologías innovadoras en los ámbitos de la digitalización, el
          infoentretenimiento y los sistemas de asistencia al conductor, y una
          gama de potentes motores completan el paquete.
        </p>
      </div>
      <div className={styles.pic}></div>
    </Layout>
  );
};

export default Detail;
