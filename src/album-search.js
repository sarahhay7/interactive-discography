import React, { Component } from 'react'
import { albums } from '../data'

export default class AlbumSearch extends Component {
  getSongs (songs) {
    return songs.map((i) => {
      const title = i.song
      return <div key={title}>{title}</div>
    })
  }

  findSongs (album) {
    const entries = albums.filter((i) => i.album === album)
    return this.getSongs(entries)
  }

  findLead (lead) {
    const entries = albums.filter((i) => lead.indexOf(i.leadVocals) !== -1)
    return this.getSongs(entries)
  }

  render () {
    return(
      <div>
        <h2>Please Please Me</h2>
        {this.findSongs('Please Please Me')}
        <h2>Let it Be</h2>
        {this.findSongs('Let it Be')}
        <h2>George</h2>
        {this.findLead('George')}
        <h2>Ringo</h2>
        {this.findLead('Ringo')}
      </div>
    )
  }
}
