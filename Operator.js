import React, { Component } from 'react'

export default class Operator extends Component {
  constructor(){
    super()
    this.state={
      isuser:" ",
      ispass:" ",
      isclick:" ",
    }
    this.handleUser=this.handleUser.bind(this)
    this.handlePassword=this.handlePassword.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }
  handleUser(e){
    console.log(e.target.value)
    if(e.target.value.length>10)
    {
      this.setState({
        isuser:" "
      })
    }
    else{
      this.setState({
        isuser:"invalid username"
      })
    }
  }
  handlePassword(e){
    if(e.target.value.length>6){
      this.setState({
        ispass:"password should be 6 characters"
      })
    }
    else{
      this.setState({
        ispass:" "
      })
    }
  }
  handleClick(){
    console.log(this.state.isuser,"user")
    console.log(this.state.ispass,"ispasss")
    if(this.state.isuser!=="valid username" && this.state.ispass!=="valid password")
    {
      this.setState({
        isclick:"successfully login"
      })
      
    }
    else{
      this.setState({
        isclick:"please enter the valid userame and password"
      })
    }
  }
  render() {
    return (
      <div>
        Enter UserName<input type="type" onChange={this.handleUser}/> {this.state.isuser}<br/><br/>
        Enter password<input type="password" onChange={this.handlePassword}/> {this.state.ispass}<br/><br/>
        <button onClick={this.handleClick}>login</button>
        {this.state.isclick}
      </div>
    )
  }
}
