import React, { Component } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import './message-form.scss'

export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleChange(e) {
    this.setState({
      newItem: e.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    var form = ReactDOM.findDOMNode(this)

    window.fetch('/stages', {
      method: 'post',
      // body: new FormData(form),

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: form.text.value,
      }),
    })

    // socket.emit('comment', form.text.value);

    this.props.add(this.state.newItem);
    this.setState({
      newItem: '',
    });
  }

  init() {
    console.log('Message form')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          name="text"
          value={this.state.newItem}
          className="message__input"
          placeholder="iMessage"
          onChange={this.handleChange.bind(this)}
        />
        <span className="voice-input"></span>
        <button hidden>Add Comment</button>
      </form>
    )
  }
}
