import Head from 'next/head'
import styles from './index.module.scss'
import MainNavbar from '../components/MainNavbar/MainNavbar'
import CityCard from '../components/CityCard/CityCard'
import Table from 'react-bootstrap/Table'
import ForecastTable from '../components/ForecastTable/ForecastTable'

const Home = () => (
    <main id={styles.app}>
      <div className={styles.mainContent}>
        <MainNavbar />
        <h1>Weather <strong>Forecast</strong></h1>
        <div className={styles.places}>
          <CityCard name='Istanbul, Turkey' imageUrl='/image/istanbul.jpg' isActive={true} />
          <CityCard name='Paris, France' imageUrl='/image/paris.png' />
          <CityCard name='New York, USA' imageUrl='/image/newyork.jpg' />
          <CityCard name='Paris, France' imageUrl='/image/paris.png' />
        </div>        
        <div>
        <i class="wi wi-day-thunderstorm"></i>
          <ForecastTable />
        </div>
      </div>
      <div className={styles.sidebar}>
        Sidebar
      </div>
    </main>
)

export default Home