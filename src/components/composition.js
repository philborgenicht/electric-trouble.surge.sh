import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Compose=(props)=>{
  return(
    <div class="container">
    <br/>
    <br/>
    <form onSubmit={e=>props.postMessage(e)}class="form-horizontal well">
      <div class="form-group">
        <div class="col-sm-12 col-sm-offset-2">
          <h2>Write a New Message to a Friend</h2>
        </div>
      </div>
      <div class="form-group text-left">
        <label name="name" id="name" htmlFor="name" class="col-sm-2 control-label">Name</label>
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name" required/>
        </div>
      </div>
      <div class="form-group text-left">
        <label name="message" id="message" htmlFor="message" class="col-sm-2 control-label">Message</label>
        <div class="col-sm-12">
          <textarea name="message" id="message" name="message" class="form-control" required></textarea>
        </div>
      </div>
      <div class="form-group text-left">
        <div class="col-sm-12 col-sm-offset-2">
          <input type="submit" value="Send" class="btn btn-success"/>
        </div>
      </div>
    </form>
    </div>
  )
}

export default Compose
