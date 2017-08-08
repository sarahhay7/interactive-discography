import React, { Component } from 'react'
import SongList from './song-list'

export default class AddSong extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { songs: [], text: ''}
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    var newSong = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState((prevState) => ({
      songs: prevState.songs.concat(newSong),
      text: ''
    }))
  }

  render () {
    return (
      <div>
        <h3>Add Song</h3>
        <SongList songs={this.state.songs} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Add new song</button>
        </form>
      </div>
    )
  }
}
