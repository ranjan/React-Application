import React from 'react';
import ReactDOM from 'react-dom';


{/* function */}

const MyApp = ((props) => {
const element = (
  <div>
    <h1>Hello to Virtual Dom </h1>
    <h3> I have been render {props} times </h3>
  </div>
)

ReactDOM.render(
  element, document.getElementById('app1')
)

})

var num=0
setInterval(() => {
  num += 1
  MyApp(num)	
},1000)
