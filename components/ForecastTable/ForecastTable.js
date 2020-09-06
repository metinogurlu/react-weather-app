import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import styles from './ForecastTable.module.scss';
import * as response from '../../onecall.json';

const cities = {
  Istanbul: { fullName: 'Istanbul, Turkey', lat: 41.015137, long: 28.979530 },
  Paris: { fullName: 'Paris, France', lat: 48.8587741, long: 2.2069771 },
  NewYork: { fullName: 'New York, USA', lat: 40.730610, long: -73.935242 },
};

function DailyForecast(date, id, hum, cMin, cMax) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  this.day = days[date.getDay()];
  this.humidityPercent = (
    <i className="wi wi-raindrop">
      {' '}
      {hum}
      %
    </i>
  );
  this.status = <i className={`wi wi-owm-${id}`} />;
  this.calciusMin = cMin;
  this.calciusMax = cMax;
}

function WeeklyForecast(cityName, dailyForecasts) {
  const city = cities[cityName];
  this.cityName = city.fullName;
  this.lat = city.lat;
  this.long = city.long;
  this.forecasts = dailyForecasts ?? [];
}

export default class ForecastTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weeklyForecast:
        new WeeklyForecast(props.cityName, ForecastTable.getDailyForecast().slice(1)),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateWeeklyForecast(), 1000 * 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  static getDailyForecast() {
    return response.daily.map((daily) => new DailyForecast(
      new Date(daily.dt * 1000),
      daily.weather[0].id,
      daily.humidity,
      daily.temp.min,
      daily.temp.max,
    ));
  }

  updateWeeklyForecast() {
    const { cityName } = this.props;
    this.setState({
      weeklyForecast: new WeeklyForecast(cityName, ForecastTable.getDailyForecast().slice(1)),
    });
  }

  render() {
    const { weeklyForecast } = this.state;
    return (
      <Table className={styles.table} responsive>
        <tbody>
          {Array.from({ length: weeklyForecast.forecasts.length }).map((_, dayIndex) => (
            <tr key={_}>
              { Array.from({ length: Object.values(weeklyForecast.forecasts[dayIndex]).length })
                .map((val, index) => (
                  <td key={val} style={{ border: 0 }}>
                    {
                      Object.values(weeklyForecast.forecasts[dayIndex])[index]
                    }
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

ForecastTable.propTypes = {
  cityName: PropTypes.string.isRequired,
};
