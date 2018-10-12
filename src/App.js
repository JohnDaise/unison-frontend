import React, { Component } from 'react';
// import Login from './components/login'
import { Button } from 'semantic-ui-react';

// import logo from './logo.svg';
import './App.css';
// import Auth from './Auth/Auth.js';



class App extends Component {

componentDidMount(){
  fetch(`http://localhost:3001/api/v1/users`)
    .then(res => res.json())
      .then(json => console.log(json))
}

// const auth = new Auth();
// auth.login();

goTo(route) {
    this.props.history.replace(`/${route}`)
  }



  login() {
      this.props.auth.login();
    }


    logout() {
      this.props.auth.logout();
    }





  render() {
     const { isAuthenticated } = this.props.auth;

    return (
      <div className="App-header">
        <h1> Unison </h1>
        <Button inverted onClick={this.goTo.bind(this, 'home')}> Home </Button>
          {
            !isAuthenticated() && (
            <Button content="Log In" secondary onClick={this.login.bind(this)}/>
              )
          }
          {
            isAuthenticated() && (
            <Button inverted onClick={this.logout.bind(this)}> Log Out </Button>
              )
          }
      </div>
    );
  }
}

export default App;
