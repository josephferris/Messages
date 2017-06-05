import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './messages-nav-item.scss'

export default class MessagesNavItem extends Component {
  // static PropTypes = {
  //   add: PropTypes.func.isRequired,
  // }

  constructor(props) {
    super(props)
    this.selectMessage = this.selectMessage.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  selectMessage(message) {
    console.log('Message: ' + message)
    let activeItems = document.getElementsByClassName('active')
    if (activeItems.length >= 1) {
      activeItems[0].classList.remove('active')
      this.setState({
        activeMessage: message
      })
    }
  }

  deleteItem(message) {
    console.log('Deleting: ' + message)
  }

  render() {
    return (
      <ul className="messages__list">
        {this.props.messages.map(message =>
          <li key={message.id} onClick={() => this.selectMessage(message.id)} className={`list__item` + message.class}>
            <img src={message.image} />
            <span className="close-item" onClick={() => this.deleteItem(message.id)}></span>
          </li>
        )}
      </ul>
    )
  }
}
