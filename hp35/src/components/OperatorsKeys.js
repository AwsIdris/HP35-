import React from 'react'
import './OperatorsKeys.css'
import store from '../store'
import * as action from '../actions/actions'

export default class OperatorsKeys extends React.Component {
  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
  	return(
            <div className="calculator-input-operators-keys">
              <button className="calculator-operator-key">-</button>
              <button className="calculator-operator-key">+</button>
              <button className="calculator-operator-key">x</button>
              <button className="calculator-operator-key">÷</button>
            </div>    
  		)
  }
 } 