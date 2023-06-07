import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchFilter.module.css';

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { value } = this.props;

    return (
      <label className={styles.filter}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={this.handleInputChange}
          className={styles.filterInput}
        />
      </label>
    );
  }
}

SearchFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchFilter;
