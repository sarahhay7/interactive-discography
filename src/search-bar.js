import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this)
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value)
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
      </form>
    );
  }
}
