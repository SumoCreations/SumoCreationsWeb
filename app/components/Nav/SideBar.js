import GSAP from 'gsap'
import React, { Component, PropTypes } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Link, IndexLink } from 'react-router'
import HamburgerButton from './HamburgerButton.js'
import css from './SideBar.scss'

const ACTIVE = 'active';

class SideBar extends Component {
  constructor(props){
    super(props)
    this.resizeListener = (e) => handleResize(e)
  }

  handleResize(e) {
    this.toggleSideBar(this.props.active, true)
  }

  toggleSideBar(visible=false, animated=false) {
    let node = ReactDOM.findDOMNode(this)
    let toggle = ReactDOM.findDOMNode(this.refs['toggle'])
    let bodyX = (visible) ? -node.offsetWidth : 0
    let toggleX = (visible) ? 0 : -node.offsetWidth
    let duration = (animated) ? 0.25 : 0
    TweenMax.set(node, {x: node.offsetWidth, ease: Power3.easeOut})
    TweenMax.to(toggle, duration, {x: toggleX, ease: Power3.easeOut})
    TweenMax.to(document.body, duration, {x: bodyX, ease: Power3.easeOut})
  }

  componentDidMount() {
    this.toggleSideBar()
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  componentDidUpdate() {
    this.toggleSideBar(this.props.active, true)
  }

  sideBarStyles() {
    var styles = ['side-bar']
    if(this.props.active) {
      styles.push('side-bar-active')
    }
    return styles.join(' ')
  }

  render() {
    return (
      <nav className={this.sideBarStyles()} role="navigation">
          <HamburgerButton active={this.props.active} onClick={this.props.onMenuToggle} ref="toggle" />
          <ul>
            <li><IndexLink to="/" activeClassName={ACTIVE} onClick={() => this.props.onMenuToggle()}>Home</IndexLink></li>
            <li><Link to="/services" activeClassName={ACTIVE} onClick={() => this.props.onMenuToggle()}>Services</Link></li>
            <li><Link to="/portfolio" activeClassName={ACTIVE} onClick={() => this.props.onMenuToggle()}>Portfolio</Link></li>
            <li><Link to="/training" activeClassName={ACTIVE} onClick={() => this.props.onMenuToggle()}>Training</Link></li>
          </ul>
      </nav>
    )
  }
}

SideBar.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default SideBar
