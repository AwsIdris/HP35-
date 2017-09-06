import React from 'react'
import './FunctionKeys.css'
import store from '../store'
import * as action from '../actions/actions' 

export default class FunctionKeys extends React.Component {

  render() {
  	return (
  		<div className="calculator-function-keys-div">           
        <button className="calculator-key-function" >X<sup>Y</sup></button>
        <button className="calculator-key-function" >LOG</button>
        <button className="calculator-key-function" >LN</button>
        <button className="calculator-key-function" >e<sup>x</sup></button>
        <button className="calculator-key-function" onClick={() => action.clearDisplay()}>CLR</button>
        <button className="calculator-key-function" >&#8730; x</button>
        <button className="calculator-key-function" >ARC</button>
        <button className="calculator-key-function" >SIN</button>
        <button className="calculator-key-function" >COS</button>
        <button className="calculator-key-function" >TAN</button>
        <button className="calculator-key-function" ><sup>1</sup>/x</button>
        <button className="calculator-key-function" >x&#x2194;y</button>
        <button className="calculator-key-function" >R&#x2193;</button>
        <button className="calculator-key-function" >STO</button>
        <button className="calculator-key-function" >RCL</button>
        <button className="calculator-key-Enter" >Enter &#x2191;</button>
        <button className="calculator-key-function" >CHS</button>
        <button className="calculator-key-function" >EEX</button>
        <button className="calculator-key-function" >CLX</button>
      </div>
  		)
  }	
}