import React from 'react';
import styles from './SideNavbar.module.scss';

export default function MainNavbar() {
  return (
    <div className={styles.navbar}>
      <a href="#">Notifications</a>
      <p className={styles.notifications} />
      <a href="#">Places</a>
    </div>
  );
}
