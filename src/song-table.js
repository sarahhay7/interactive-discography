import React, { Component } from 'react'
import SongRow from './song-row'
import PropTypes from 'prop-types'

export default class SongTable extends Component {
  rows () {
    var rows = []
    this.props.songs.forEach((song) => {
      const title = song.title.toLowerCase()
      const text = this.props.filterText.toLowerCase()
      if (title.indexOf(text) === -1) {
        return
      }
      rows.push(<SongRow song={song} key={song.title + song.year} />)
    })
    return rows
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
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
