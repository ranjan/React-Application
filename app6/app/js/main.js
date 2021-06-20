import React from 'react';
import ReactDOM from 'react-dom';


const Welcome = ((props) => {
	return(
	  <div>
        <h4>Component call: My name is {props.firstname}</h4>
        <h4>Component call: Wecome {props.lastname}</h4>
      </div>
	)
})


 class App extends React.Component {
  nameMapper(nameArray){
  	return nameArray.map((name,i) =>
      <li>{name}</li>
  	)
  }

  render(){
    const nameArray = ['A', 'B', 'C', 'D']
    return(
      <div>
        <Welcome firstname="Ranjan"  lastname="kumar" />
        <ul>
         {this.nameMapper(nameArray)}
        </ul>
        <Welcome firstname="Hello"  lastname="World" />      
      </div>
    )
  }
}


ReactDOM.render(
<App />, document.getElementById('app1')
)