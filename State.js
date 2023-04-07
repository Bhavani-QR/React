import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()
        this.state={
            name:"bhavani",
            age:"21"
        }
    }
  render() {
    return (
      <div><h1>
        hello {this.state.name} - {this.state.age}</h1></div>
    )
  }
}
