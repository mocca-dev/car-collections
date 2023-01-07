import Image from 'next/image';
import { useContext, useEffect } from 'react';
import Layout from '../../components/layout';
import Context from '../../context';
import styles from './detail.module.css';

const Detail = () => {
  const { dispatch } = useContext(Context);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout headerSettings={headerSettings}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span>
            <h3>Audi A4 2022</h3>
            <p className={styles.inCollection}>
              In collection since April 2022
            </p>
          </span>
          <span className={styles.ownerContainer}>
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
          </span>
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
