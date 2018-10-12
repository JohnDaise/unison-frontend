import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Profile extends Component {
  componentWillMount() {
    console.log(this.props)
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    console.log(this.state)
    const { profile } = this.state;
    return (
      <React.Fragment>
        <Button> Update Profile </Button>
      </React.Fragment>
    );
  }
}

export default Profile;
