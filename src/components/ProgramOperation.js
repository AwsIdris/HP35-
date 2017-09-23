import store from './store'
import * as fn from '../actions/actions'
import  keyCodes from './KeyCodes'
import textCode from './ProgramTextCode'

export default function programOperation(keyCodes) {
    let [x, y, z, t] = store.state.stack,
        localStack = [x, y, z, t],
        textValue = store.state.textAreaValue.split(/\n/),
        newArray = []


        console.log('text value',textValue)
        for(let i=0 ; i < textValue.length; i++){
            if (Number(textValue[i])) {   
            textValue[i] = textValue[i]
            console.log('newArray',newArray) 
            localStack[3] = localStack[2]
            localStack[2] = localStack[1]
            localStack[1] = localStack[0]

            localStack[0] = textValue[i]
            store.setState({stack:localStack,
            textAreaValue : textValue})
        }  else   {
            fn.operations(keyCodes) // we need an error handler here for checking the right input
            console.log('not a number',textValue[i])
        }
        }
    
}
