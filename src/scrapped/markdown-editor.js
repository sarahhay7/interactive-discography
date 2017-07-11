import React, { Component } from 'react'
import Remarkable from 'remarkable'

export default class MarkdownEditor extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: 'eat me' }
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  getRawMarkup() {
    var md = new Remarkable()
    return { __html: md.render(this.state.value)}
  }

  render () {
    return (
      <div className='editor'>
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value} />
        <h3>Output</h3>
        <div
          className='content'
          dangerouslySetInnerHTML={this.getRawMarkup()} />
      </div>
    )
  }
}
