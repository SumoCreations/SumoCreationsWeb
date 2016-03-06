import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { setNavigationState } from '../config/actions'

import Brand from './Nav/Brand'
import SideBar from './Nav/SideBar'

require('./Main.scss');

class Main extends Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <div className="main">
        <Brand />
        <SideBar active={this.props.active} onMenuToggle={() => dispatch(setNavigationState(!navigationState))} active={navigationState} />
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
