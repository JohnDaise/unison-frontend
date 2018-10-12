import React, { Component } from 'react';
// import Login from './components/login'
import { Button } from 'semantic-ui-react'

// import logo from './logo.svg';
import './App.css';
import Auth from './Auth/Auth.js';



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
        <Button content="Home" onClick={this.goTo.bind(this, 'home')} />
          {
            !isAuthenticated() && (
            <Button content="Log In" onClick={this.login.bind(this)}/>
              )
          }
          {
            isAuthenticated() && (
            <Button content="Log Out" onClick={this.logout.bind(this)}/>
              )
          }
      </div>
    );
  }
}

export default App;
