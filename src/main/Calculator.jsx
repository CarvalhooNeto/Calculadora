import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0 
}

export default class Calculator extends Component {

    state = {...initialState}//criei um clone do objeto 

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState})
    }
    setOperation(operation) {
        if ( this.state.current === 0) {
            this.setState({operation, current: 1, clearDisplay: true})
        } else {
            const resultado = operation === '='
            const currentOperation = this.state.operation
            const values = [...this.state.values]
            
            switch(currentOperation){
                case '+':
                   values[0] = values[0] + values[1]
                    break
                case '-':
                    values[0] = values[0] - values[1]
                    break
                case '*':
                    values[0] = values[0] * values[1]
                    break
                case '/':
                    values[0]  = values[0] / values[1]
                    break       
            }

            this.setState({
                displayValue: values[0],
                operation: resultado ? null : operation,
                current: resultado ? 0 : 1,
                clearDisplay: !resultado,
                values
            })
        }
    }
    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes ('.')){
            return
        }
        //esta linha de código abaixo impede q apareçam mais de um 0 no display, e está fazendo com que todos os números mostrem no display
        const clearDisplay = this.state.displayValue === '0'|| this.state.clearDisplay 
        const currentValue = clearDisplay ? '' : this.state.displayValue// Ou o valor corrente é zero ou o valor do display
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})

        if (n != '.') {
            const i = this.state.current ////Qual valor[value] atual eu estou manipulando?
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }
    }
    render() {
       // const addDigit = n => this.addDigit(n)
        //const SetOperation = operation => this.setOperation(operation)

        return (
            <div className="calculator">
                
                <Display value={this.state.displayValue}/>
                 <Button label = "AC" click ={this.clearMemory} triple />
                 <Button label = "/" click = {this.setOperation} operation/>
                 <Button label = "7" click = {this.addDigit}/>
                 <Button label = "8"click = {this.addDigit} />
                 <Button label = "9"click = {this.addDigit} />
                 <Button label = "*"click = {this.setOperation} operation />
                 <Button label = "4"click = {this.addDigit} />
                 <Button label = "5"click = {this.addDigit} />
                 <Button label = "6"click = {this.addDigit} />
                 <Button label = "-"click = {this.setOperation} operation />
                 <Button label = "3"click = {this.addDigit} />
                 <Button label = "2"click = {this.addDigit} />
                 <Button label = "1"click = {this.addDigit} />
                 <Button label = "+"click = {this.setOperation} operation />
                 <Button label = "0"click = {this.addDigit} double />
                 <Button label = "."click = {this.addDigit} />
                 <Button label = "="click = {this.setOperation} operation />

            </div>
        )   
    }
}