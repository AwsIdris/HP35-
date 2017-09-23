import React from 'react'
import './ProgramPlatform.css'

export default class ProgramPlatform extends React.Component {

        render(){
            return (
             <form onSubmit={this.handleSubmit}>
              <div className='programWindow1'>
                <div className='programWindow2'>
                  <textarea className='textArea' rows='30' cols="36" id='textarea' ></textarea>
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

    