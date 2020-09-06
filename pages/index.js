/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import Head from 'next/head';
import styles from './index.module.scss';
import MainNavbar from '../components/MainNavbar/MainNavbar';
import SideNavbar from '../components/SideNavbar/SideNavbar';
import CityCard from '../components/CityCard/CityCard';
import ForecastTable from '../components/ForecastTable/ForecastTable';

const Home = () => (
  <main id={styles.app}>
    <div className={styles.mainContent}>
      <MainNavbar />
      <h1>
        Weather
        <strong> Forecast</strong>
      </h1>
      <div className={styles.places}>
        <CityCard name="Istanbul, Turkey" imageUrl="/image/istanbul.jpg" isActive />
        <CityCard name="Paris, France" imageUrl="/image/paris.png" />
        <CityCard name="New York, USA" imageUrl="/image/newyork.jpg" />
        <CityCard name="Paris, France" imageUrl="/image/paris.png" />
      </div>
      <div>
        {/* <DailyWeatherChart /> */}
        <ForecastTable cityName="Istanbul" />
      </div>
    </div>
    <div className={styles.sidebar}>
      <SideNavbar />
    </div>
  </main>
);

export default Home;
