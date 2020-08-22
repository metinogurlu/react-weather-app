import React from 'react'
import Table from 'react-bootstrap/Table'

function DailyForecast() {
    this.day= 'monday';
    this.humidityPercent= Math.random();
    this.status= 'open';
    this.calciusMin = 23;
    this.calciusMax = 24;
}

function WeeklyForecast() {
    this.cityName = 'San Francisco';
    this.cityCode = 2;
    this.forecasts = [new DailyForecast()];
}


export default class ForecastTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {weeklyForecast: new WeeklyForecast()};
    }

    updateWeeklyForecast() {
        this.setState(prev => {
            prev.weeklyForecast.forecasts = [new DailyForecast()]
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
        console.log(weeklyForecast.cityName)
        console.log(weeklyForecast.forecasts)
        console.log(weeklyForecast.forecasts[0]);
        console.log(Object.values(weeklyForecast.forecasts[0]).length)
        return ( 
            <Table responsive>
                <tbody>
                    {Array.from({ length: weeklyForecast.forecasts.length }).map((_, dayIndex) => (
                        <tr key={weeklyForecast.forecasts[dayIndex].day}>                            
                            <td>{weeklyForecast.forecasts[dayIndex].day}</td>
                            { Array.from({ length: Object.values(weeklyForecast.forecasts[dayIndex]).length }).map((_, index) => (
                                <td key={index}>{Object.values(weeklyForecast.forecasts[dayIndex])[index]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                </Table>
        )
    }
}