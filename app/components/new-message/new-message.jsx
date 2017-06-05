import React, { Component } from 'react'
import ReactDom, { render } from 'react-dom'
import PropTypes from 'prop-types'

export default class NewMessage extends Component {
  static PropTypes = {
    toggle: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
  }

  removeNewChat() {
    let newChat = document.getElementById('new-chat')
    newChat.classList.toggle('new-chat-hidden')
  }

  render() {
    return (
      <div id="new-chat">
        <div id="new-chat-overlay" className="new-chat-overlay" onClick={this.props.toggle}></div>
        <div id="new-chat-container" className="container">
          <header className="contacts-list__header">
            <span className="search-icon input input--akira">
              <svg fill="#909090" height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <input className="contacts-list__input" autoFocus />
              <label className="test">
                <span className="test-placeholder">Search</span>
              </label>
            </span>
          </header>
          <section className="contacts-list__body">
            <article className="left">
              <ul className="left-list">
                <li className="left-list__item">Buddies</li>
              </ul>
            </article>
            <article className="right">
              <ul className="right-list">
                <li className="right-list__item my-card-title">
                  <p>My Card</p>
                  <hr />
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    )
  }
}
