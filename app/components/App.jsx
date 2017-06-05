import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import PropTypes from 'prop-types'

import MessageListContainer from './MessageListContainer'

export default class App extends Component {
  render() {
    return (
      <div className="messages">
        <MessageListContainer />
      </div>
    )
  }
}

