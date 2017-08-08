import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Search..."
        value={this.props.filterText}
        onChange={(event) => this.props.onFilterTextInput(event.target.value)}
        autoFocus={true}
      />
    );
  }
}

SearchBar.propTypes = {
  onFilterTextInput: PropTypes.func.isRequired,
  filterText: PropTypes.string
}
