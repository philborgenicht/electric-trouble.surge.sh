import React, {Component} from 'react'

class Message extends Component {

state={
  name: this.props.name,
  message: this.props.message
}

onChange=(e)=>{
  let key=e.target.name
  this.setState({[key]:e.target.message})
}


  render() {
    return (
  <div className="container list-group">

<div className="row">
<div className="col-4 list-group-heading">
<h4>sender</h4>
</div>
<div className="col-4 list-group-heading">
<h4>body</h4>
</div>
</div>

  <div className="row">

      <div className="col-4">
        <div className="list-group-item">{this.props.name}</div>
      </div>

      <div className="col-4">
        <div className="list-group-item">{this.props.message}</div>
      </div>

      <div className="col-2">
      <button id={this.props.id} onClick={(e)=>([...document.getElementsByClassName(`${this.props.id}`)]).map(tag=>tag.style.visibility="visible")} className="btn btn-warning">Edit</button>
      &nbsp;
      </div>

      <div className="col-2">
      <button id={this.props.id} onClick= {(e)=>this.props.deleteMessage(e)} type="button" className="btn btn-danger">Delete</button>

      </div>
  </div>

  <br/>
  <br/>

  <div className="row justify-content-center">
          <form className={this.props.id} id={this.props.id} onSubmit={(e)=>this.props.editMessage(e)} style={{visibility:"hidden"}}>
            <input className={this.props.id} style={{visibility:"hidden"}}  name="name" placeholder="name" onChange={this.onChange} value={this.state.name} type="text" id="newName" required={true}/>
            <input className={this.props.id} style={{visibility:"hidden"}}  name="message" placeholder="message" onChange={this.onChange} value={this.state.message} type="text" id="newMessage" required={true}/>
            <button onClick={(e)=>([...document.getElementsByClassName(`${this.props.id}`)]).map(tag=>tag.style.visibility="hidden")} id={this.props.id} required={true}> Save </button>
          </form>
  </div>
  <br/><br/>



  </div>

    )
  }
}
export default Message
