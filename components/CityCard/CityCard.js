import React from 'react';
import PropTypes from 'prop-types';
import styles from './CityCard.module.scss';

export default function CityCard(props) {
  const { name, imageUrl, isActive } = props;
  return (
    <div className={`${styles.card} ${isActive ? styles.active : ''}`}>
      <button
        type="button"
      >
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </button>
    </div>
  );
}

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
