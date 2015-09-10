import React, { Component, PropTypes } from 'react';

export default class Nav extends Component {
  constructor(props){
    super(props);
  }
  navStyles() {
    var styles = ['nav-toggle'];
    if(this.props.active){ styles.push('nav-active'); }
    return styles.join(" ");
  }
  render() {
    return (
      <nav className="nav" role="navigation">
          <img className="nav-logo" />
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
