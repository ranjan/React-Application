import React from 'react';
import Button from './Button'

export default class HelloWorld extends React.Component {

  constructor(){
  	super();
  	this.state = {
  		firstName: 'Ranjan',
  		lastName: 'Kumar'
  	}
  }


	Changefn(){
		console.log(this);
		this.setState({
			firstName: "Hello",
		})
	}

	Changeln(){
		console.log(this);
		this.setState({
			lastName: "World"
		})
	}

	render(){
		return(
        <div>
        	<h1> Welocme to React</h1>
        	<h2> {this.state.firstName} </h2>
        	<h2> {this.state.lastName} </h2>
        	<button onClick={this.Changefn.bind(this)}> Change First Name</button>
        	<br></br>
        	<Button ln={this.state.lastName} ChangeMe={this.Changeln.bind(this)}/>
        </div>  
			)
	}

}
