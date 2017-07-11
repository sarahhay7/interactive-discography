import React, { Component } from 'react'

export default class SongRow extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.song.album}</td>
        <td>{this.props.song.title}</td>
      </tr>
    )
  }
}
