import React from 'react';
import styles from './MainNavbar.module.scss';
import SearchBar from '../Searchbar/Searchbar';
import Dropdown from '../Dropdown/Dropdown';

export default function MainNavbar() {
  return (
    <div className={styles.navbar}>
      <section className={styles.search}>
        <SearchBar />
      </section>
      <Dropdown
        labelItem="All places"
        list={[{ value: 1, label: 'January', imageUrl: '/image/istanbul.jpg' }, { value: 2, label: 'February' }, { value: 3, label: 'March' },
          { value: 4, label: 'April' }, { value: 5, label: 'May' }, { value: 6, label: 'June' }, { value: 7, label: 'July' },
          { value: 8, label: 'August' }, { value: 9, label: 'September' }, { value: 10, label: 'October' },
          { value: 11, label: 'November' }, { value: 12, label: 'December' }]}
      />
    </div>
  );
}
