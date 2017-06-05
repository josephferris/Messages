'use strict'

import React from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'

// import io from 'socket.io-client'

// var socket = io()

export default class AddMessage extends React.Component {
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
    event.preventDefault()

    var form = ReactDOM.findDOMNode(this)

    window.fetch('http://127.0.0.1:3000/api/comments', {
      method: 'post',
      // body: new FormData(form),

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: document.getElementById('new-item').value,
        // text: form.text.value,
      }),
    })

    // socket.emit('comment', form.text.value);

    this.props.add(this.state.newItem);
    this.setState({
      newItem: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          id="new-item"
          className="form-control"
          name="text"
          value={this.state.newItem}
          placeholder="New Message"
          onChange={this.handleChange.bind(this)}
        />
        <button hidden>Add Comment</button>
      </form>
    );
  }
}
