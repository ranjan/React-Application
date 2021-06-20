import React from 'react';

export default class Welcome extends React.Component{
	render(){
		return(
			<div>
      	<h4>Component call: My name is {this.props.firstname}</h4>
      	<h4>Component call: Wecome {this.props.lastname}</h4>
    	</div>
		)
	}
}