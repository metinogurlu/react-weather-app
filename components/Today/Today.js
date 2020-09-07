import React from 'react';
import styles from './Today.module.scss';

export default function Today(props) {
  return (
    <div className={styles.container}>
      <div className={`${styles.row} ${styles.today}`}>
        <i className={`wi wi-owm-${302} ${styles.icon}`} />
        <div className={styles.date}>
          <h4>Today</h4>
          <p>Sat, 3 Aug</p>
        </div>
      </div>
      <div className={styles.row}>
        <h1 className={styles.temperature}>
          {28}
          <span>℃</span>
        </h1>
      </div>
      <div className={styles.row}>
        <p>Istanbul, Turkey</p>
      </div>
      <div className={styles.row}>
        <p>Feels like 32&ensp;&ensp;•&ensp;&ensp;Sunset 20:15</p>
      </div>
    </div>
  );
}
