import React, { Component } from 'react'
import SearchBar from './search-bar'
import SongTable from './song-table'

export default class FilterableSongList extends Component {
  constructor(props) {
    super(props);
    this.state = { filterText: '' }
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
  }

  handleFilterTextInput(filterText) {
    this.setState({ filterText: filterText })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <SongTable
          songs={this.props.songs}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
