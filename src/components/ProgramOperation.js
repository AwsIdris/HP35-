import store from './store'
import * as fn from '../actions/actions'
import * as C from './ProgramTextCode'

export default function programOperation(keyCodes) {
    let [x, y, z, t] = store.state.stack,
        localStack = [x, y, z, t],
        textValue = store.state.textAreaValue.split(/\n/),
        newArray = []
    // let textArray = textCode.map(arrayCode){
    //    let newArray  arrayCode.TextKeyCode
    //         arrayCode.label
    //     })


        console.log('text value',textValue)
        for(let i=0 ; i < textValue.length; i++){
            if (Number(textValue[i])) {   
            
            console.log('newArray',newArray) 
            localStack[3] = localStack[2]
            localStack[2] = localStack[1]
            localStack[1] = localStack[0]

            localStack[0] = textValue[i]
            store.setState({stack:localStack,textAreaValue:textValue})
        }  else  if (C.textObject[textValue[i]]){ 
            let codeText = C.textObject[textValue[i]]
            console.log('text code',codeText)
            fn.operations(codeText)
        } else {
            alert('invalid')
        }
        }
    
}
