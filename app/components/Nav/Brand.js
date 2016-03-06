import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Isvg from 'react-inlinesvg'
import css from './Brand.scss'

export default class Brand extends Component {
  constructor(props){
    super(props)
  }
  logoSVG() {
    return require('./SumoCreationsLogo.svg')
  }
  render() {
    return (
      <nav className="brand" role="navigation">
        <Isvg src={this.logoSVG()}>
          <img className="brand-logo" src={this.logoSVG()} />
        </Isvg>
      </nav>
    )
  }
}
