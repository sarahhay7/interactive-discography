import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

SongRow.propTypes = {
  song: PropTypes.shape({
    album: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
}
