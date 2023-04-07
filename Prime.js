import React, { Component } from 'react'

 class Prime extends  Component {
    constructor(props){
        super(props)
        this.state = {
            number:'',
            i:0
        }
        this.handle = this.handle.bind(this)
    }
    handle(e){
        this.setState({
            number:parseInt(e.target.value)
        })
    }
    handlePrime(e){
        for(this.state.i=2; this.state.i<e.target.value; this.state.i++){
            if(parseInt(e.target.value)%this.state.i===0)
            {
                console.log("not prime")
                this.setState({
                    status:" not prime"
                })
                break;
            }
            else{
                console.log(" prime")
                this.setState({
                    status:"prime"
                })
                break;
            }
        }
    }
  render(){
    return (
      <div>
        enter number<input type="number" value={this.state.number} onChange={this.handle}/>
        <button onClick={this.handlePrime}>click</button>

      </div>
    )
  }
}
export default Prime
