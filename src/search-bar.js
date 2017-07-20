import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={(event) => this.props.onFilterTextInput(event.target.value)}
          autoFocus={true}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  onFilterTextInput: PropTypes.func.isRequired,
  filterText: PropTypes.string
}
