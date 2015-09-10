import React from 'react';
import { RouteHandler } from 'react-router';
import Nav from './Nav/Nav';
import { connect } from 'react-redux';
import { setNavigationState } from '../config/actions';

require('./Main.scss');

class Main extends React.Component {
  render() {
    const { dispatch, navigationState } = this.props;
    console.log(navigationState);
    return (
      <div className="main">
        <Nav onMenuToggle={() => dispatch(setNavigationState(!navigationState))} active={navigationState}/>
        <div className="container">
          <div className="row contents">
            <RouteHandler {...this.props}/>
          </div>
        </div>
      </div>
    )
  }
}

function select(state) {
  return {
    navigationState: state.navigationState
  };
}

export default connect(select)(Main);
