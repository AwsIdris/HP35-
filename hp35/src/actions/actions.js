import store from '../store'

export function clearDisplay() {
	
    store.setState({ displayValueX : '0'})
    
  }



export function inputDigit(digit) {

    const displayValueX  = store.state.displayValueX 

      store.setState({ displayValueX: displayValueX === '0' ? String(digit) : displayValueX + digit})
    }  


export function inputDot() {
    const { displayValueX, waitingForOperator } = store.state
    const decimal = displayValueX.indexOf('.')

      if(waitingForOperator) {
        store.setState ({
            displayValueX : String('0.'),
            waitingForOperator : false
        })
      } else if(decimal === -1 ) {
        store.setState({
            displayValueX : displayValueX + '.',
            waitingForOperator: false
      })
    }
    //console.log(decimal)
    //console.log(displayValue)
  }

