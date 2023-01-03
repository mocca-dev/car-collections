import Image from 'next/image';
import styles from './notification.module.css';

const Notification = ({ data }) => {
  const { title, content, name, date } = data;
  return (
    <div className={styles.container}>
      <Image
        priority
        src="/images/profile.png"
        className={styles.profilePic}
        height={100}
        width={130}
        alt=""
      />
      <span>
        <div>
          <strong>{name}</strong> {content}
        </div>
        <div className={styles.date}>{date}</div>
      </span>
      <Image
        priority
        src="/images/cars/car2.jpg"
        className={styles.postPic}
        height={55}
        width={100}
        alt=""
      />
    </div>
  );
};

export default Notification;
