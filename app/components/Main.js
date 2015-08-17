import React from 'react';
import { RouteHandler } from 'react-router';

require('./Main.scss');

export default class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar row" role="navigation">
          <div className="seven columns" style={{marginTop: 15}}>
            Add a nav!
          </div>
        </nav>
        <div className="row contents">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )
  }
};
