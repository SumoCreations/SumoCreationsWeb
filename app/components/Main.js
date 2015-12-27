import GSAP from 'gsap';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from './Nav/Nav';
import { connect } from 'react-redux';
import { setNavigationState } from '../config/actions';

require('./Main.scss');

class Main extends Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <div className="main">
        <Nav onMenuToggle={() => dispatch(setNavigationState(!navigationState))} active={navigationState}/>
        {this.props.children}
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
