import React from 'react';
import './App.css';
import store from './store';
import * as action from './actions/actions'

class App extends React.Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
    const { displayValue } = this.state

    return (
      <div className="calculator">
        <div className="calculator-display"><p>{ displayValue }</p></div>
          <div className="calculator-function-keys">           
            <button className="calculator-key-clear" onClick={() => action.clearDisplay()}>AC</button>
          </div>
        <div className="calculator-input-keys">               
          <p>
            <button className="calculator-operator-key" onClick={() => action.executeOperation('-') }>-</button>
            <button className="calculator-digit-key" onClick={() => action.inputDigit(7)}>7</button>
            <button className="calculator-digit-key" onClick={() => action.inputDigit(8)}>8</button>
            <button className="calculator-digit-key" onClick={() => action.inputDigit(9)}>9</button>
          </p>
            <button className="calculator-operator-key" onClick={() => action.executeOperation('+')}>+</button>  
            <button className="calculator-digit-key"onClick={() => action.inputDigit(4)}>4</button>
            <button className="calculator-digit-key"onClick={() => action.inputDigit(5)}>5</button>
            <button className="calculator-digit-key"onClick={() => action.inputDigit(6)}>6</button>
          <p>
            <button className="calculator-operator-key" onClick={() => action.executeOperation('*')}>x</button>  
            <button className="calculator-digit-key"onClick={() => action.inputDigit(1)}>1</button>
            <button className="calculator-digit-key"onClick={() => action.inputDigit(2)}>2</button>
            <button className="calculator-digit-key"onClick={() => action.inputDigit(3)}>3</button>
          </p>
            <button className="calculator-operator-key" onClick={() => action.executeOperation('/')}>÷</button>  
            <button className="calculator-digit-key" onClick={() => action.inputDigit(0)}>0</button>
            <button className="calculator-digit-key" onClick={() => action.inputDot()}>.</button>
            <button className="calculator-digit-key" onClick={() => action.executeOperation('=')}>=</button>
        </div>
      </div>
    );
  }
}

export default App;