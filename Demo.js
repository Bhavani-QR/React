import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(){
        super()
        this.state={
            status:''
        }
        this.handleEven = this.handleEven.bind(this)
    }
    handleEven(){
        console.log(typeof(parseInt(e.target.value)))
        if(parseInt(e.target.value) %2===0){
            console.log("even")
            this.setState({ status:'even'})
        }
        else{
            console.log("odd")
            this.setState({
                status:'odd'
            })
        }
    }
  render() {
    return (
      <div>
        Enter Number<input type="number" onChange={this.handleEven}/>
      </div>
    )
  }
}
