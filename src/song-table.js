import React, { Component } from 'react'
import SongRow from './song-row'

export default class SongTable extends Component {
  render() {
    var rows = []
    this.props.songs.forEach((song) => {
      const title = song.title.toLowerCase()
      const text = this.props.filterText.toLowerCase()
      if (title.indexOf(text) === -1) {
        return
      }
      rows.push(<SongRow song={song} key={song.title + song.year} />)
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Album</th>
            <th>Song</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
