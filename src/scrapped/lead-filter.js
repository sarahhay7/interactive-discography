import React, { Component } from 'react'

export default class LeadFilter extends Component {
  constructor(props) {
    super(props)
  }

  leads () {
    var leads = []
    console.log(this.props.songs)
    this.props.songs.forEach((song) => {
      if (leads.indexOf(song.leadVocals) === -1) {
        leads.push(song.leadVocals)
      }
    })
    leads.reduce(( acc, cur ) => acc.concat(cur), [])
    console.log(leads)
    return leads
  }
  render () {
    return <div>{this.leads()}</div>
  }
}
