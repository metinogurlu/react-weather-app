import React from 'react'
import styles from './DailyWeatherChart.module.scss'
import {HorizontalBar} from 'react-chartjs-2';

const minData = {
    datasets: [
      {
        backgroundColor: '#FF0000',
        xAxisID: 'x-axis-1',
        data: [ 13  ]
      }
    ]
}
export default class DailyWeatherChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = { min: props.min, max: props.max, weeklyMin: props.weeklyMin, weeklyMax: props.weeklyMax }
    }

    getOptions() {        
        const options = {
            layout: {
                padding: {
                    left: -20
                }
            },
            legend: { 
                display: false
            },
            scales: {
                xAxes: [{
                    id: 'x-axis-1',
                    type: 'linear',
                    display: false,
                    ticks: { 
                        min: 10,
                        max: 35
                    }
                }],
                yAxes: [{
                    gridLines: { 
                        display: false
                    }
                }]
            },            
        }

        return options;
    }

    render() {
        return (
            <>
            <div className={styles.dashdash}>
                <HorizontalBar
                    data={minData}
                    options={this.getOptions()}
                    width={110}
                    height={1}
                />
                <HorizontalBar
                    data={minData}
                    options={this.getOptions()}
                    width={110}
                    height={1}
                />      
            </div></>
        )
    }
}