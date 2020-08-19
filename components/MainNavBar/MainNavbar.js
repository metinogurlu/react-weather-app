import styles from './MainNavbar.module.scss'
import SearchBar from '../Searchbar/Searchbar'
export default function MainNavbar() {
    return (
      <div className={styles.navbar}>
        <SearchBar />
      </div>
    )
  }