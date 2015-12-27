import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Isvg from 'react-inlinesvg';

require('./Nav.scss');

export default class Nav extends Component {
  constructor(props){
    super(props);
  }
  navStyles() {
    var styles = ['nav-toggle'];
    if(this.props.active){ styles.push('nav-active'); }
    return styles.join(' ');
  }
  logoSVG() {
    return require('./SumoCreationsLogo.svg');
  }
  render() {
    return (
      <nav className="nav" role="navigation">
          <Isvg src={this.logoSVG()}>
            <img className="nav-logo" src={this.logoSVG()} />
          </Isvg>
          <div className={this.navStyles()}>
            <button className="nav-button nav-button-text" onClick={() => this.props.onMenuToggle()}>Menu</button>
            <button className="nav-button nav-handle" onClick={() => this.props.onMenuToggle()}><span></span></button>
          </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};
