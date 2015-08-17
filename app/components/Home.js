import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h2>Welcome Home!</h2>
        <a className="button" href="#">Anchor button</a>
        <button>Button element</button>
        <input type="submit" value="submit input" />
        <input type="button" value="button input" />
      </div>
    );
  }
};
