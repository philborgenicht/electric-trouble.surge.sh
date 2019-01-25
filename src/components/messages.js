import React, {Component} from 'react'
import Message from './message.js'

class Messages extends Component {
  render() {
    return (
<div className="container list-group">
<h3>Message List</h3>
<br/><br/>
          {this.props.messages.sort((mess1, mess2) => mess1.id-mess2.id).map(message =>
            <Message
              id = {message.id}
              name = {message.name}
              message = {message.message}
              editMessage = {this.props.editMessage}
              deleteMessage = {this.props.deleteMessage}
            />
          )}

</div>
    )
  }
}

export default Messages
