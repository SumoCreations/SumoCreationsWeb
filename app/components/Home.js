import React from 'react';
import { Parse } from 'parse';

export default class Home extends React.Component {
  handleSSO() {
    Parse.FacebookUtils.logIn(null, {
      success: function(user) {
        if (!user.existed()) {
          alert("User signed up and logged in through Facebook!");
        } else {
          alert("User logged in through Facebook!");
        }
      },
      error: function(user, error) {
        alert("User cancelled the Facebook login or did not fully authorize.");
      }
    });
  }

  render() {
    return (
      <div className="home invisible">
        <h2>Welcome Home!</h2>
        <a className="button" href="#">Anchor button</a>
        <button onClick={this.handleSSO.bind(this)}>Login w/ Facebook</button>
      </div>
    );
  }
};
