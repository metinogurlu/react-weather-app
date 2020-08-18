import Head from 'next/head'
import styles from './index.module.scss'
import Header from '../components/Header/header.js'

const Home = () => (
    <main>
      <div class={styles.mainContent}>
        Main Content
      </div>
      <div class={styles.sidebar}>
        Sidebar
      </div>
    </main>
)

export default Home