import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Isvg from 'react-inlinesvg'

require('./Nav.scss')

export default class Nav extends Component {
  constructor(props){
    super(props)
  }
  logoSVG() {
    return require('./SumoCreationsLogo.svg')
  }
  render() {
    return (
      <nav className="nav" role="navigation">
        <Isvg src={this.logoSVG()}>
          <img className="nav-logo" src={this.logoSVG()} />
        </Isvg>
      </nav>
    )
  }
}
