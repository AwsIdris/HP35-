import React from 'react'
import './App.css'
import store from './store'
import DisplayScreen from './components/DisplayScreen'
import FunctionKeys from './components/FunctionKeys'
import OperatorsKeys from './components/OperatorsKeys'
import DigitsKeys from './components/DigitsKeys'


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
    const { displayValueX, displayValueY, displayValueZ, displayValueT } = this.state

    return (
      <div className="calculator">
        <DisplayScreen />
          <FunctionKeys />
            <div className="calculator-digits-operators-div">
              <OperatorsKeys />
              <DigitsKeys />            
            </div>  
      </div>
    );
  }
}

export default App;