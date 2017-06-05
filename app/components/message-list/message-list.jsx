import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MessageList extends Component {
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
          <button type="button" className="button">
            <span className="compose-new-message"></span>
            <span className="pencil-icon"></span>
          </button>
        </div>
        <ul className="messages__list">
          <li className="list__item"><span className="contact-image"></span></li>
          <li className="list__item"><span className="contact-image"></span></li>
          <li className="list__item"><span className="contact-image"></span></li>
          <li className="list__item"><span className="contact-image"></span></li>
          <li className="list__item"><span className="contact-image"></span></li>
          <li className="list__item"><span className="contact-image"></span></li>
          <li className="list__item"><span className="contact-image"></span></li>
          <li className="list__item"><span className="contact-image"></span></li>
          <li className="list__item"><span className="contact-image"></span></li>
          <li className="list__item"><span className="contact-image"></span></li>
        </ul>
      </nav>
    )
  }
}
