import React from 'react';
import styles from './MainNavbar.module.scss';
import SearchBar from '../Searchbar/Searchbar';
import Dropdown from '../Dropdown/Dropdown';

const dropDownItems = [
  { value: 1, label: 'January', imageUrl: './image/istanbul.jpg' },
  { value: 2, label: 'February', imageUrl: './image/istanbul.jpg' },
  { value: 3, label: 'March', imageUrl: './image/istanbul.jpg' },
  { value: 4, label: 'April', imageUrl: './image/istanbul.jpg' },
  { value: 5, label: 'May', imageUrl: './image/istanbul.jpg' },
];

export default function MainNavbar() {
  return (
    <div className={styles.navbar}>
      <section className={styles.search}>
        <SearchBar />
      </section>
      <Dropdown
        labelItem="All places"
        list={dropDownItems}
      />
    </div>
  );
}
