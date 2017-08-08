import React, { Component } from 'react'
import { data } from '../data'
import ArtistFilter from './artist-filter'
import Timer from './timer'
import AddSong from './add-song'
import SongList from './song-list'
import MarkdownEditor from './markdown-editor'

export default class AlbumSearch extends Component {

  getSongs (songs) {
    return songs.map((i) => {
      const title = i.song
      return <div key={title}>{title}</div>
    })
  }

  findSongs (album) {
    const entries = data.filter((i) => i.album === album)
    return this.getSongs(entries)
  }

  findLead (lead) {
    const entries = data.filter((i) => lead.indexOf(i.leadVocals) !== -1)
    return this.getSongs(entries)
  }

  render () {
    return(
      <div>
        <Timer />
        <h2>Please Please Me</h2>
        {this.findSongs('Please Please Me')}
        <h2>Let it Be</h2>
        {this.findSongs('Let it Be')}
        <h2>George</h2>
        {this.findLead('George')}
        <h2>Ringo</h2>
        {this.findLead('Ringo')}
        <ArtistFilter name="The Beatles" />
        <AddSong />
        <MarkdownEditor />
      </div>
    )
  }
}
