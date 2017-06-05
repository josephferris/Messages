'use strict'

import React from 'react'
// import io from 'socket.io-client'

import Chat from './chat'
import AddMessage from './add-message'
import MessageList from './message-list'

// var socket = io()

export default class MessageListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  handleAddItem(newItem) {
    this.setState({
      list: this.state.list.concat([newItem]),
    });
  }

  componentDidMount() {
    // Move to angular service...
    window.fetch('http://127.0.0.1:3000/stages')
      .then(response => response.json())
      .then(list => {
        this.setState({list})
      })
      .catch(error => { throw error; })

    // socket.on('comment', this.handleAddItem.bind(this))
  }

  render() {
    return (
      <div className="Message-List-Container">
        <Chat />
      </div>
    )
    // return (
    //   <div className="container">
    //     <Chat />
    //     <h3 className="text-center">Messages</h3>
    //     <MessageList
    //       items={this.state.list}
    //     />
    //     <AddMessage add={this.handleAddItem.bind(this)} />
    //   </div>
    // );
  }
}
