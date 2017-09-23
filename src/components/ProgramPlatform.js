import React from 'react'
import './ProgramPlatform.css'
import store from './store'
import programOperation from './ProgramOperation'
import textCode from './ProgramTextCode'

export default class ProgramPlatform extends React.Component {
componentWillMount() {
    this.subscription = store.subscribe(state => {
       this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove()
  }

  handleChange(event) {
    store.setState({
      textAreaValue: event.target.value,
    })
  }

  handleSubmit(event) {
    programOperation(store.state.textAreaValue)
    event.preventDefault()
  }

        render(){
            return (
                <form onSubmit={this.handleSubmit}>
                <div className='programWindow1'>
                    <div className='programWindow2'>
                        <textarea className='textArea' rows='30' cols="36" id='textarea' value={store.state.textAreaValue} onChange={this.handleChange}></textarea>
                        <p id='paragraph'></p>
                    </div>
                    <div>
                            <input type="submit" value="Run" />
                    </div>        
                </div> 
                </form>   
            )
        }       
}

    