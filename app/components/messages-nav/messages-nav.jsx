import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import MessagesNavItem from './messages-nav-item'

class EmptyMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      newMessage: e.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    var form = ReactDOM.findDOMNode(this)
    console.log(form.text.value)

    window.fetch('/api/messages/item.json', {
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
  }

  render() {
    return (
      <form noValidate onSubmit={this.handleSubmit.bind(this)} className="header__send-to">
        <label className="to-recipients">To:</label>
        <input className="input__new-message"
          autoFocus
          autoComplete="false"
          autoCorrect="false"
          name="text"
          value={this.state.newMessage}
          placeholder="No recipients"
          onChange={this.handleChange.bind(this)}
          />
          <button hidden>Add Recepient</button>
      </form>
    )
  }
}

export default class MessagesNav extends Component {
  static defaultProps = {
    messages: [],
  }

  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.handleAddRecipient = this.handleAddRecipient.bind(this)
    this.handleAddMessage = this.handleAddMessage.bind(this)
    this.createNewMessage = this.createNewMessage.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    var form = ReactDOM.findDOMNode(this)

    window.fetch('/api/comments', {
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
  }

  handleAddRecipient() {
    console.log('Adding new recepient')
  }

  handleAddMessage(messages) {
    let newMessage = {
      id: messages.length + 1,
      image: './images/new-message-image.png',
      name: '',
      class: ' active'
    }

    let activeItems = document.getElementsByClassName('active')
    if (activeItems.length >= 1) {
      activeItems[0].classList.remove('active')
      this.setState({

      })
    }

    let reversedList = this.state.messages.concat([newMessage]).reverse()

    this.setState({
      messages: reversedList
    })
  }

  addNewChat() {
    ReactDOM.render(<EmptyMessage submit={this.handleSubmit} toggle={this.handleAddRecipient} activeMessage={this.state.activeMessage} />, document.getElementById('empty-message'))
  }

  createNewMessage() {
    ReactDOM.render(<EmptyMessage message={this.state.messages[0]} submit={this.handleSubmit} toggle={this.handleAddRecipient} />, document.getElementById('empty-message'))
    console.log('Creating new message...')
    let messages = this.state.messages.reverse()
    this.handleAddMessage(messages)
  }

  componentWillMount() {
    this.state = {
      messages: [{
        id: 1,
        image: './images/new-message-image.png',
        name: 'Chat Number 1',
        class: ' inactive'
      },
      {
        id: 2,
        image: './images/new-message-image.png',
        name: 'Chat Number 2',
        class: ' active'
      },
      {
        id: 3,
        image: './images/new-message-image.png',
        name: 'Joey Ferris',
        class: ' inactive'
      },
      {
        id: 4,
        image: './images/new-message-image.png',
        name: 'Chat Number 3',
        class: ' inactive'
      },
      {
        id: 5,
        image: './images/profile-image.png',
        name: 'Nour Maatouk',
        class: ' inactive'
      }],
      activeMessage: 1,
    }

    let messages = this.state.messages.reverse()
  }

  render() {
    return (
      <nav className="messages__nav">
        <div className="new-message">
          <div className="buttons__container">
            <div className="close">
              <a className="closebutton" href="#"><span>x</span></a>
            </div>
            <div className="minimize">
              <a className="minimizebutton" href="#"><span>&ndash;</span></a>
            </div>
            <div className="zoom">
              <a className="zoombutton" href="#"><span>+</span></a>
            </div>
          </div>
          <button type="button" className="button" onClick={this.createNewMessage}>
            <span className="compose-new-message"></span>
            <span className="pencil-icon"></span>
          </button>
        </div>
        <MessagesNavItem messages={this.state.messages} />
        <div className="resize-border"></div>
      </nav>
    )
  }
}

