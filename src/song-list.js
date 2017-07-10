import React, { Component } from 'react'

export default class SongList extends Component {
  render () {
    return (
      <ul>
        { this.props.songs.map(song => (
          <li key={song.id}>{song.text}</li>
        ))}
      </ul>
    )
  }
}
