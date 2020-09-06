/* eslint-disable no-undef */
import React from 'react';
import ArrowDown from '../Icons/ArrowDown';
import styles from './Dropdown.module.scss';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      labelItem: props.labelItem,
    };
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
    if (this.state.labelItem !== value) {
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
        onClick={() => this.chooseItem(item.label)}
      >
        <a>
          <img src={item.imageUrl} alt={item.label} />
          {' '}
          {item.label}
        </a>
      </li>
    );
  }

  render() {
    const { list } = this.props;
    return (
      <div className={`${styles.dropdown} ${this.state.isOpen ? styles.open : ''}`}>
        <button className={styles.dropdownToggle} type="button" onClick={this.showDropdown}>
          {this.state.labelItem}
          <ArrowDown className={styles.icon} />
        </button>
        <ul className={styles.dropdownMenu}>
          {list.map(this.renderDataDropDown)}
        </ul>
      </div>
    );
  }
}
