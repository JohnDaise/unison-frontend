import React, {Component} from 'react';
import Profile from '../Profile/Profile'

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <React.Fragment>
        {isAuthenticated() ?
          <div className="container">
            {
              <h1> Welcome Home! </h1>
            }
          </div>
          :
          <div className="container">
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
          </div>
        }
      </React.Fragment>
    );
  }
}

export default Home;
