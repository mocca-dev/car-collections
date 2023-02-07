import Image from 'next/image';
import Link from 'next/link';
import Center from './center';
import styles from './header.module.css';
import Left from './left';
import Right from './right';

const Header = ({ settings }) => {
  const { showLeft, showCenter, showRight, showLogout, title, transparent } =
    settings;

  return (
    <div
      className={`${styles.container} ${
        transparent ? styles.transparent : null
      }`}
    >
      <Left showLeft={showLeft} transparent={transparent} />
      <Center showCenter={showCenter} title={title} />
      <Right showLogout={showLogout} showRight={showRight} />
    </div>
  );
};

export default Header;
