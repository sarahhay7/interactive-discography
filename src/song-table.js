import React, { Component } from 'react'
import SongRow from './song-row'

export default class SongTable extends Component {
  render() {
    var rows = [];
    console.log(this.props.songs)
    this.props.songs.forEach((song) => {
      console.log(song)
      if (song.title.indexOf(this.props.filterText) === -1) {
        return
      }
      rows.push(<SongRow song={song} key={song.title} />)
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
