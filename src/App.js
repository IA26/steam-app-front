import React from 'react';
import './App.css';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    fetch(`https://partner-api.yelp.com/v1/business_info/`)
    .then(r => r.json())
    .then((applist) => 
      this.setState({
        applist
      })
    )}

  state = {
    applist : {}
  }


  render() {
    console.log(this.applist)
    return (
      <>
        <div className="App">
            Show me {this.applist}
        </div> 
      </>
    )
  }
}

export default App; 