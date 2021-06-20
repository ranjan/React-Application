import React from 'react';

export default class Button extends React.Component {
	constructor(){
		super()
	}

	render() {
		return (
			<button onClick={this.props.ChangeMe}>{this.props.ln}</button>
		)
	}
}