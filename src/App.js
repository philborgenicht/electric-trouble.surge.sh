import React, { Component } from 'react'
import './App.css'
import Composition from './components/composition'
import Messages from './components/messages'

class App extends Component {

  state = { messages: [] }

  componentDidMount = async() => {
     const response = await fetch("https://philborgassessment.herokuapp.com/messages/", {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
       }
     })
     const messages = await response.json()
     const newState = {messages:[...messages]}
     this.setState(newState)
   }

   postMessage = async (e) => {
     e.preventDefault()
     let id = e.target.id.value
     let name = e.target.name.value
     let message = e.target.message.value
     let newMessage = {}
     newMessage.id = id
     newMessage.name = name
     newMessage.message = message
     await fetch('https://philborgassessment.herokuapp.com/messages/', {
      method: 'POST',
      body: JSON.stringify ({
        id: id,
        name: name,
        message: message
      }),
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    const response = await fetch('https://philborgassessment.herokuapp.com/messages/')
    const json = await response.json()
    this.setState({messages: json})
   }

   editMessage = async (e) => {
     e.preventDefault()
     let id = e.target.id
     await fetch(`https://philborgassessment.herokuapp.com/messages/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: e.target.newName.value,
        message: e.target.newMessage.value,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const response = await fetch('https://philborgassessment.herokuapp.com/messages/')
    const json = await response.json()
    this.setState({messages: [...json]})
  }

   deleteMessage = async (e) => {
     let id = e.target.id
     await fetch(`https://philborgassessment.herokuapp.com/messages/${id}`, {
      method: 'DELETE',
    })
    const response = await fetch('https://philborgassessment.herokuapp.com/messages/')
    const json = await response.json()
    this.setState({messages: json})
   }

  render() {
    return (
      <div className="App">
        <Composition postMessage={this.postMessage}/>
        <Messages messages={this.state.messages} editMessage={this.editMessage} deleteMessage={this.deleteMessage}/>
      </div>
    );
  }
}

export default App
