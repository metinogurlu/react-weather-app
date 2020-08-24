import React from 'react'
import Table from 'react-bootstrap/Table'
import styles from './ForecastTable.module.scss'
import * as response from '../../onecall.json';

const cities = {
    Istanbul: { fullName: 'Istanbul, Turkey', lat: 41.015137, long: 28.979530 },
    Paris: { fullName: 'Paris, France', lat: 48.8587741, long: 2.2069771 },
    NewYork: { fullName: 'New York, USA', lat: 40.730610, long: -73.935242 },
}

function DailyForecast(date, id, hum, cMin, cMax) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.day= days[date.getDay()];
    this.humidityPercent= hum;
    this.status= <i className={`wi wi-owm-${id}`}></i>;
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
        this.updateWeeklyForecast();
        this.state = {weeklyForecast: new WeeklyForecast(props.cityName, this.getDailyForecast().slice(1))}
    }

    getDailyForecast() {
        return response.daily.map(daily => new DailyForecast(
            new Date(daily.dt * 1000), daily.weather[0].id, daily.humidity, daily.temp.min, daily.temp.max));
    }

    updateWeeklyForecast() {
        this.setState({
            weeklyForecast: new WeeklyForecast(this.props.cityName, this.getDailyForecast().slice(1))
        });
    }
    componentDidMount() {
        this.interval = setInterval(() => this.updateWeeklyForecast(), 1000 * 10);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const weeklyForecast = this.state.weeklyForecast;
        return ( 
            <Table className={styles.table} responsive>
                <tbody>
                    {Array.from({ length: weeklyForecast.forecasts.length }).map((_, dayIndex) => (
                        <tr key={dayIndex}>                            
                            { Array.from({ length: Object.values(weeklyForecast.forecasts[dayIndex]).length }).map((_, index) => (
                                <td style={{border:0}} key={index}>{Object.values(weeklyForecast.forecasts[dayIndex])[index]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                </Table>
        )
    }
}