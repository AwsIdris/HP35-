import React from 'react'
import './DisplayScreen.css'
import store from '../store'


export default class DisplayScreen extends React.Component {

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
			<div className="calculator-display">
        		<p>{ displayValueT }</p>
        		<p>{ displayValueZ }</p>
        		<p>{ displayValueY }</p>
        		<p>{ displayValueX }</p>
        	</div>
			)
	}
}