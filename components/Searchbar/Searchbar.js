import styles from './Searchbar.module.scss'
import Search from '../Icons/Search' 
export default function SearchBar() {
    return (
        <div className={styles.searchBar}>            
            <Search className={styles.icon}/>
            <input type="text" className={styles.search} placeholder="Search new place...">      
            </input>
        </div>
    )
  }