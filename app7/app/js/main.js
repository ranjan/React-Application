import React from 'react';
import ReactDOM from 'react-dom';
import {NameList} from './components/NameList'


 class App extends React.Component {
  render(){
    return(
      <NameList />
    )
  }
}


ReactDOM.render(
<App />, document.getElementById('app1')
)