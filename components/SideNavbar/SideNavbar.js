import React from 'react';
import styles from './SideNavbar.module.scss';

export default function SideNavbar() {
  const count = 4;
  return (
    <>
      <div className={styles.navbar}>
        <button
          type="button"
          className={styles.linkButton}
        >
          Notifications
          {' '}
          <span className={styles.indicator}>{count}</span>
        </button>
        <button
          type="button"
          className={styles.linkButton}
        >
          Places
        </button>
        <figure className={styles.profile}>
          <img
            src="./image/profile.jpg"
            className={styles.profile}
            alt="current user"
          />
        </figure>
      </div>
    </>
  );
}
