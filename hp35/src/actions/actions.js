import store from '../store'

export function clearDisplay() {
	
    store.setState({ displayValue : '0'})
  }


// i had a problem with setState being asynchronous
// thats why i wrote the setTimeout 
export function inputDigit(digit) {

    const displayValue  = store.state.displayValue 
    const waitingForOperator = store.state.waitingForOperator

    if (waitingForOperator) {
    	setTimeout(() => {
    		store.setState({ 
            displayValue : String(digit),
            waitingForOperator : false
        })
    	},1)
         
    } else {
      store.setState({ displayValue: displayValue === '0' ? String(digit) : displayValue + digit})
    }  
  }  


export function inputDot() {
    const { displayValue, waitingForOperator } = store.state
    const decimal = displayValue.indexOf('.')

      if(waitingForOperator) {
        store.setState ({
            displayValue : String('0.'),
            waitingForOperator : false
        })
      } else if(decimal === -1 ) {
        store.setState({
            displayValue : displayValue + '.',
            waitingForOperator: false
      })
    }
    //console.log(decimal)
    //console.log(displayValue)
  }


  export function executeOperation(nextOperator) {
    const  value = store.state.value
    const	displayValue = store.state.displayValue
    const	operator = store.state.operator

    const nextValue = parseFloat(displayValue)

    const operations = {
        '/': (prevValue, nextValue) => prevValue / nextValue,
        '*': (prevValue, nextValue) => prevValue * nextValue,
        '+': (prevValue, nextValue) => prevValue + nextValue,
        '-': (prevValue, nextValue) => prevValue - nextValue,
        '=': (prevValue, nextValue) => nextValue
    }
 
    if (value == null) {
      store.setState({
        value: nextValue
      }) 
    } else if (operator) {
      const currentValue = value || 0
      const calculatedValue = operations[operator](currentValue, nextValue)

      store.setState({
        value: calculatedValue,
        displayValue: String(calculatedValue)
      })
    }


    store.setState({ 
        waitingForOperator : true,
        operator : nextOperator
     })
  }