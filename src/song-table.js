import React, { Component } from 'react'
import SongRow from './song-row'
import PropTypes from 'prop-types'

export default class SongTable extends Component {
  sanitizeTerm (term) {
    return term.toLowerCase()
  }

  songMatchesFilter (song) {
    const title = this.sanitizeTerm(song.title)
    const text = this.sanitizeTerm(this.props.filterText)
    return title.indexOf(text) >= 0
  }

  filteredSongs () {
    return this.props.songs.filter(this.songMatchesFilter.bind(this))
  }

  songRow (song) {
    return (<SongRow song={song} key={song.title + song.year} />)
  }

  rows () {
    return this.filteredSongs().map(this.songRow)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Album</th>
            <th>Song</th>
          </tr>
        </thead>
        <tbody>{ this.rows() }</tbody>
      </table>
    );
  }
}

SongTable.propTypes = {
  songs: PropTypes.array.isRequired,
  filterText: PropTypes.string
}
