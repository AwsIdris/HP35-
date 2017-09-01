import React from 'react'
import './DigitsKeys.css'
import store from '../store'
import * as action from '../actions/actions'

export default class DigitsKeys extends React.Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
  	return (
  		<div className="calculator-digits-keys-div">
              <button className="calculator-digit-key" onClick={() => action.inputDigit(7)}>7</button>
              <button className="calculator-digit-key" onClick={() => action.inputDigit(8)}>8</button>
              <button className="calculator-digit-key" onClick={() => action.inputDigit(9)}>9</button>
              <button className="calculator-digit-key" onClick={() => action.inputDigit(4)}>4</button>
              <button className="calculator-digit-key" onClick={() => action.inputDigit(5)}>5</button>
              <button className="calculator-digit-key" onClick={() => action.inputDigit(6)}>6</button>
              <button className="calculator-digit-key" onClick={() => action.inputDigit(1)}>1</button>
              <button className="calculator-digit-key" onClick={() => action.inputDigit(2)}>2</button>
              <button className="calculator-digit-key" onClick={() => action.inputDigit(3)}>3</button>
              <button className="calculator-digit-key" onClick={() => action.inputDigit(0)}>0</button>
              <button className="calculator-digit-key" onClick={() => action.inputDot()}>.</button>
              <button className="calculator-digit-key" onClick={() => action.inputDigit(3.14159)}>π</button>
            </div>
  		)
  }	
}