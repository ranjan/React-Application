import React from 'react';
import ReactDOM from 'react-dom';

function Demo() {
  let name = {
  	first: "Ranjan",
  	last: "Kumar"
  }
  return(
       <div> 
         <p>Function call: My name is {name.first} {name.last}</p>
         <h1> hello </h1> 
       </div>
  	)
}

const Welcome = ((props) => {
	return(
	  <div>
        <h4>Component call: My name is {props.firstname}</h4>
        <h4>Component call: Wecome {props.name}</h4>
      </div>
	)
})

const App = (() => {
	const nameArray = ["A", "B", "c"]
    
    // Same using function
	const nameMapper = (() =>
        nameArray.map((name) =>
          <li> {name} </li>
        )
	);

	const changeHandler = ((event) => {
		console.log(event.target.value);
	})
	return(
      <div>
        <Welcome firstname="ranjan" lastname="kumar" />
        
        // Iteration using const Array
        {nameArray.map((name) =>
        	<li> {name} </li>
        	)}

        // Iteration using jsx/component
        <ul>
          {nameMapper()}
        </ul>	
        <Welcome name="React" />
        <input onChange={changeHandler} />
      </div>
	)
}

)

{/* Rendering using function call */}
ReactDOM.render(
 <Demo />,
 document.getElementById('app1')
	)

{/*  Rendering using jsx/component */}
ReactDOM.render(
 <App />,
 document.getElementById('app2')
	)	