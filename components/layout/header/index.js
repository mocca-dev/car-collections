import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <div>{'<'}</div>
      <div>logo</div>
      <Image
        priority
        src="/images/profile.png"
        className={styles.profilePic}
        height={50}
        width={50}
        alt=""
      />
    </div>
  );
};

export default Header;
