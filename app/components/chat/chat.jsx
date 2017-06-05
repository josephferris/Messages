import React, { Component } from 'react'
import ReactDom, { render } from 'react-dom'
import PropTypes from 'prop-types'

import MessageContent from '../message-content'
import MessagesHeader from '../messages-header'
import MessagesNav from '../messages-nav'
import MessageList from '../message-list'
import NewMessage from '../new-message'
import MessageForm from '../message-form'

export default class Chat extends Component {
  constructor() {
    super()
    this.state = {
      chats: [
      {
        id: 1,
        image: './images/profile-image.png',
        name: 'Nour Maatouk',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      },
      {
        id: 2,
        image: './images/nour.jpeg',
        name: 'Joey Ferris',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      },
      {
        id: 3,
        image: './images/profile-image.png',
        name: 'Nour Maatouk',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      },
      {
        id: 4,
        image: './images/new-message-image.png',
        name: 'Nour Maatouk',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      },
      {
        id: 5,
        image: './images/new-message-image.png',
        name: 'Nour Maatouk',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      },
      {
        id: 6,
        image: './images/nour.jpeg',
        name: 'Nour Maatouk',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      }
      ],
      activeChat: null,
      list: [],
    }
  }

  removeNewChat() {
    ReactDom.unmountComponentAtNode('new-message')
  }

  handleAddItem(newItem) {
    this.setState({
      list: this.state.list.concat([newItem]),
    });
  }

  componentWillMount() {
    this.setState({
      chats: [
      {
        id: 1,
        image: './images/profile-image.png',
        name: 'Nour Maatouk',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      },
      {
        id: 2,
        image: './images/nour.jpeg',
        name: 'Joey Ferris',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      },
      {
        id: 3,
        image: './images/profile-image.png',
        name: 'Nour Maatouk',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      },
      {
        id: 4,
        image: './images/new-message-image.png',
        name: 'Nour Maatouk',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      },
      {
        id: 5,
        image: './images/new-message-image.png',
        name: 'Nour Maatouk',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      },
      {
        id: 6,
        image: './images/nour.jpeg',
        name: 'Nour Maatouk',
        messages: [{
          id: 1,
          text: 'Message 1'
        },
        {
          id: 2,
          text: 'Message 2'
        },
        {
          id: 3,
          text: 'Message 3'
        }
        ]
      }
      ],
      activeChat: this.state.chats[0],
    })
  }

  render() {
    return (
      <section className="messages__container">
        <MessagesHeader />
        <article className="messages__content">
          <MessagesNav />
          <MessageContent data={this.state.activeChat} />
        </article>
        <footer className="messages__footer">
          <MessageForm add={this.handleAddItem.bind(this)} />
        </footer>
      </section>
    )
  }
}

