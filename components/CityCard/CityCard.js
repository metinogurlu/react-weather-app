import React from 'react'
import styles from './CityCard.module.scss'
export default class CityCard extends React.Component {    
    constructor(props) {
      super(props);    
    }
    render () {
      const city = this.props;
      return (
        <div className={`${styles.card} ${city.isActive ? styles.active : ''}`}>
            <a>
                <img src={city.imageUrl} alt={city.name}></img>
                <p>{city.name}</p>
            </a>
        </div>
      )
    }
  }