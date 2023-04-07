import React, { Component } from 'react'

export default class Converter extends Component {
    constructor(){
        super()
        this.state={
            isKilo:" ",
            isMeter:" ",
            n:" "
        }
        this.handleInput=this.handleInput.bind(this)
        this.handleKilo=this.handleKilo.bind(this)
        this.handleMeter=this.handleMeter.bind(this)
        
    }
    handleInput(e){
        this.setState({
            n:e.target.value
        })
    }
    handleKilo(e){
        console.log(typeof(parseInt(e.target.value)))
        var n=(parseInt(e.target.value))/1000
        this.setState({
            isKilo:n
        })
    }
    handleMeter(e){
        console.log(e.target.value)
        var n=(parseInt(e.target.value))*1000
        this.setState({
            isMeter:n
        })
    }
    render() {
        return (
            <div> 
                Enter Value :<input type="number" onChange={this.handleInput}/><br/><br/>
                <button onClick={this.handleKilo}>toKilometer</button><br/><br/>
                <button onClick={this.handleMeter}>toMeter</button>

            </div>
        )
    }
}