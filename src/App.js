import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login'

class App extends Component {

componentDidMount(){
  fetch(`http://localhost:3001/api/v1/users`)
    .then(res => res.json())
      .then(json => console.log(json))
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login/>
        
        </header>
      </div>
    );
  }
}

export default App;
