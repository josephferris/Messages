import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import PropTypes from 'prop-types'

import NewMessage from '../new-message'

import './messages-header.scss'

function CurrentMessage(props) {
  return (
    <div className="header__send-to">
      <label className="to-recipients">To: {this.props.recepient}</label>
    </div>
  )
}

function EmptySendTo(props) {
  return (
    <div className="header__send-to">
      <label className="to-recipients">To:</label>
      <input type="text" className="input__new-message" autoFocus placeholder="No recipients" />
    </div>
  )
}

function SendTo(props) {
  return (
    <p>To: {this.state.recepient}</p>
  )
}

function AddIcon(props) {
  return (
    <div id="add-icon" className="add-icon">
      <span className="circle-icon-plus">
        <span className="plus">+</span>
      </span>
    </div>
  )
}

export default class MessagesHeader extends Component {
  static defaultProps = {
    messages: []
  }

  constructor(props) {
    super(props)
    this.removeRecipient = this.removeRecipient.bind(this)
    this.handleAddRecipient = this.handleAddRecipient.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {
      messages: [],
      recepient: 'Joey Ferris',
      isLoggedIn: true,
      showContacts: true,
      newMessageRendered: false,
    }
  }

  removeRecipient() {
    console.log('Removing new recipient')
    ReactDOM.unmountComponentAtNode(document.getElementById('new-message'))
    this.setState({showContacts: true, newMessageRendered: false})
  }

  handleAddRecipient() {
    if (document.getElementById('new-message').innerHTML === '' || null || undefined) {
      render(<NewMessage toggle={this.handleAddRecipient} />, document.getElementById('new-message'))

    } else if (this.state.newMessageRendered === true) {
      console.log('New message Rendered isnt equal to true')
      ReactDOM.unmountComponentAtNode(document.getElementById('new-message'))
    } else {
      ReacDOM.unmountComponentAtNode(document.getElementById('new-message'))
    }

    this.setState({showContacts: true, newMessageRendered: true})
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
    console.log('Handling logout')
  }

  componentWillMount() {
    this.state = {
      recepient: 'Joey Ferris',
      details: 'Details',
      isLoggedIn: true,
      showContacts: true,
      newMessageRendered: false,
    }
  }

  componentDidMount() {
    // render(<CurrentMessage recepient={this.state.recepient} />, document.getElementById('current-message'))
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    const showContacts = this.state.showContacts
    const newMessageRendered = this.state.newMessageRendered

    let recepient = null
    let details = null
    let triangle = null
    let contactList = null
    let container = null
    let newMessageActive = null

    if (isLoggedIn) {
      recepient = <div className="header__send-to">
        <label className="to-recipients">To: {this.state.recepient}</label>
      </div>
      details = <div className="header__details">
        <p>{this.state.details}</p>
      </div>
    } else {
      newMessageActive = <NewMessage />
      recepient = <EmptySendTo onClick={this.handleLoginClick} />
      // details = <ToggleNewMessage onClick={this.handleAddRecipient} />; {/* <AddIcon onClick={this.handleAddRecipient} /> */}
      if (showContacts) {
        <div className="contacts-list">
          <header className="contacts-list__header">
            <div className="arrow-up"></div>
            <input className="contacts-list__input" placeholder="Search" autoFocus />
          </header>
        </div>
      }
    }

    return (
      <header className="messages__header--new">
        {recepient}
        <div id="current-message"></div>
        <div id="empty-message"></div>
        <div id="add-icon" className="add-icon" onClick={this.handleAddRecipient}>
          <span className="circle-icon-plus">
            <span className="plus">+</span>
          </span>
          <div id="new-message"></div>
        </div>
      </header>
    )
  }
}

