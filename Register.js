import React, { Component } from 'react'

export default class Register extends Component {
    constructor(){
        super()
        this.state={
            isfName:" ",
            islName:" ",
            isPass:" ",
            isNum:" ",
            isBtn:" "
        }
        this.handlefName=this.handlefName.bind(this)
        this.handlelName=this.handlelName.bind(this)
        this.handlePass=this.handlePass.bind(this)
        this.handleNumber=this.handleNumber.bind(this)
        this.handleButton=this.handleButton.bind(this)
    }
    handlefName(e){
        console.log(e.target.value)
        if(e.target.value.length>10){
            this.setState({
                isfName:" FirstName should be in less than 10 characters"
            })
        }
        else{
            this.setState({
                isfName:" "
            })
        }
    }
    handlelName(e){
        console.log(e.target.value)
        if(e.target.value.length>10){
            this.setState({
                islName:"LastName should be in less than 10 characters"
            })
        }
        else{
            this.setState({
                islName:" "
            })
        }
    }
    handlePass(e){
        if(e.target.value.length>6){
            this.setState({
                isPass:"Password should be in less than 6 characters"
            })
        }
    }
    handleNumber(e){
        console.log(e.target.value)
        if(e.target.value===[0-9])
        {
            this.setState({
                isNum:"Please enter the integers "
            })
        }
        else{
            this.setState({
                isNum:" "
            })
        }
    }
    handleButton(){
        if(this.state.isfName==='' && this.state.islName==='' && this.state.isPass==="" && this.state.isNum===" ")
        {
            this.setState({
                isBtn:"successfully register"
            })
        }
    }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <p>it's free and always will be</p>
        <input type="text" placeholder='FirstName' onChange={this.handlefName}></input>{this.state.isfName}
        <input type="text" placeholder='LastName' onChange={this.handlelName}></input>{this.state.islName}<br/><br/>
        <input type="text" placeholder="E-Mail"></input><br/><br/>
        <input type="password" placeholder="password" onChange={this.handlePass}></input>{this.state.isPass}<br/><br/>
        <input type="number" placeholder="Phone Number" onChange={this.handleNumber}></input>{this.state.isNum}<br/><br/>
        <p>Birthday</p>
        <input type="number"placeholder="DD"></input>
        <input type="number"placeholder="YY"></input>
        <input type="number"placeholder="MM"></input><br/><br/>
        Female<input type="radio" name="demo"></input>
        Male<input type="radio" name="demo"></input><br/><br/>
        <button onClick={this.handleButton}>Sign Up</button>{this.state.isBtn}

      </div>
    )
  }
}
