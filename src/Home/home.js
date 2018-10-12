import React, {Component} from 'react';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h1>
                Welcome Home!
              </h1>
            )
        }
        {
          !isAuthenticated() && (
              <h1>
                You are not logged in! Please{' '}
                <a href='#'
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h1>
            )
        }
      </div>
    );
  }
}

export default Home;
