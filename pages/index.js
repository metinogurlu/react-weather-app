import Head from 'next/head'
import styles from './index.module.scss'
import MainNavbar from '../components/MainNavbar/MainNavbar'

const Home = () => (
    <main>
      <div className={styles.mainContent}>
        <MainNavbar />
      </div>
      <div className={styles.sidebar}>
        Sidebar
      </div>
    </main>
)

export default Home