import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    value : null,
    displayValue: '0',
    waitingForOperator : false,
    operator : null
  }

  inputDigit(digit) {
    const { displayValue, waitingForOperator } = this.state

    if (waitingForOperator) {
        this.setState({ 
            displayValue : String(digit),
            waitingForOperator : false
        })
    } else {
      this.setState({displayValue: displayValue === '0' ? String(digit) : displayValue + digit})
    }  
  }

  inputDot() {
    const { displayValue, waitingForOperator } = this.state

      if(waitingForOperator) {
        this.setState ({
            displayValue : String('.'),
            waitingForOperator : false
        })
      } else if(displayValue.indexOf('.') === -1 ) {
        this.setState({
            displayValue : displayValue + '.',
            waitingForOperator: false
      })
    }
  }

  clearDisplay() {
    const { displayValue } = this.state

    this.setState({ displayValue : '0'})
  }



  executeOperation(nextOperator) {
    const { value, displayValue, operator } = this.state
    const nextValue = parseFloat(displayValue)

    const operations = {
        '/': (prevValue, nextValue) => prevValue / nextValue,
        '*': (prevValue, nextValue) => prevValue * nextValue,
        '+': (prevValue, nextValue) => prevValue + nextValue,
        '-': (prevValue, nextValue) => prevValue - nextValue,
        '=': (prevValue, nextValue) => nextValue
    }
 
    if (value == null) {
      this.setState({
        value: nextValue
      }) 
    } else if (operator) {
      const currentValue = value || 0
      const calculatedValue = operations[operator](currentValue, nextValue)

      this.setState({
        value: calculatedValue,
        displayValue: String(calculatedValue)
      })
    }


    this.setState({ 
        waitingForOperator : true,
        operator : nextOperator
     })
  }




  render() {
    const { displayValue } = this.state

    return (
      <div className="calculator">
        <div className="calculator-display"><p>{ displayValue }</p></div>
          <div className="calculator-function-keys">           
            <button className="calculator-key-clear" onClick={() => this.clearDisplay()}>AC</button>
          </div>
        <div className="calculator-input-keys">               
          <p>
            <button className="calculator-operator-key" onClick={() => this.executeOperation('-') }>-</button>
            <button className="calculator-digit-key" onClick={() => this.inputDigit(7)}>7</button>
            <button className="calculator-digit-key" onClick={() => this.inputDigit(8)}>8</button>
            <button className="calculator-digit-key" onClick={() => this.inputDigit(9)}>9</button>
          </p>
            <button className="calculator-operator-key" onClick={() => this.executeOperation('+')}>+</button>  
            <button className="calculator-digit-key"onClick={() => this.inputDigit(4)}>4</button>
            <button className="calculator-digit-key"onClick={() => this.inputDigit(5)}>5</button>
            <button className="calculator-digit-key"onClick={() => this.inputDigit(6)}>6</button>
          <p>
            <button className="calculator-operator-key" onClick={() => this.executeOperation('*')}>x</button>  
            <button className="calculator-digit-key"onClick={() => this.inputDigit(1)}>1</button>
            <button className="calculator-digit-key"onClick={() => this.inputDigit(2)}>2</button>
            <button className="calculator-digit-key"onClick={() => this.inputDigit(3)}>3</button>
          </p>
            <button className="calculator-operator-key" onClick={() => this.executeOperation('/')}>÷</button>  
            <button className="calculator-digit-key" onClick={() => this.inputDigit(0)}>0</button>
            <button className="calculator-digit-key" onClick={() => this.inputDot()}>.</button>
            <button className="calculator-digit-key" onClick={() => this.executeOperation('=')}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
