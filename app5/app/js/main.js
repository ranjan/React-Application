import React from 'react';
import ReactDOM from 'react-dom';




//var React = require('react');
//You need this npm package to do createReactClass
var createReactClass = require('create-react-class');

    var App = createReactClass({
            render:function(){
                return(
                    <div>
                        <h1> the list  </h1>
                    </div>   
                )
            }
})
// You a

// var App = React.createClass({
	
//  render: function(){
//  	return (
//       <div>
//         <ul>
//            {this.nameMapper}
//         </ul>
//       </div>
//  	)
//  }  

// })


ReactDOM.render(
<App />, document.getElementById('app1')
         )