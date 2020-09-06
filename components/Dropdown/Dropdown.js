/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import ArrowDown from '../Icons/ArrowDown';
import styles from './Dropdown.module.scss';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      labelItem: props.labelItem,
    };
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.renderDataDropDown = this.renderDataDropDown.bind(this);
    this.chooseItem = this.chooseItem.bind(this);
  }

  showDropdown() {
    this.setState({ isOpen: true });
    document.addEventListener('click', this.hideDropdown);
  }

  hideDropdown() {
    this.setState({ isOpen: false });
    document.removeEventListener('click', this.hideDropdown);
  }

  chooseItem(value) {
    const { labelItem } = this.state;
    if (labelItem !== value) {
      this.setState({
        labelItem: value,
      });
    }
  }

  renderDataDropDown(item, index) {
    return (
      <li
        key={index}
        value={item.value}
      >
        <button
          type="button"
          value={item.label}
          onClick={(e) => this.chooseItem(e.target.value)}
        >
          <img src={item.imageUrl} alt={item.label} />
          {' '}
          {item.label}
        </button>
      </li>
    );
  }

  render() {
    const { list } = this.props;
    const {
      isOpen,
      labelItem,
    } = this.state;
    return (
      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        <button className={styles.dropdownToggle} type="button" onClick={this.showDropdown}>
          {labelItem}
          <ArrowDown className={styles.icon} />
        </button>
        <ul className={styles.dropdownMenu}>
          {list.map(this.renderDataDropDown)}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  labelItem: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
    }),
  ).isRequired,
};
