import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MessageContent extends Component {
  componentWillMount() {
    this.state = {
      messages: this.props.data
    }
    let messages = this.state.messages
  }

  componentDidMount() {
    let messages = this.state.messages
  }

  selectMessage(message) {
    console.log(message)
  }

  render() {
    let messages = this.state.messages

    return (
      <section className="messages__body">
        <div className="body__content">
          <div className="to-messages">
            <ul className="to__list">
              {messages.messages.map(message =>
                <li key={message.id} onClick={() => this.selectMessage(message.id)} className="to__item">
                  <p>{message.text}</p>
                  <span className="close-item" onClick={() => this.deleteItem(message.id)}></span>
                </li>
              )}
            </ul>
          </div>
          <div className="from-messages">
            <ul className="from__list">
              <li className="from__item">How's it going?</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
