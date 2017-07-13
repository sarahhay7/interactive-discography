import React, { Component } from 'react'
import SearchBar from './search-bar'
import SongTable from './song-table'
import PropTypes from 'prop-types'

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
        <SearchBar onFilterTextInput={this.handleFilterTextInput} />
        <SongTable
          songs={this.props.songs}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

FilterableSongList.propTypes = {
  songs: PropTypes.array.isRequired
}
