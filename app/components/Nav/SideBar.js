import GSAP from 'gsap'
import React, { Component, PropTypes } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Link, IndexLink } from 'react-router'
import css from './SideBar.scss'

const ACTIVE = 'active';

class SideBar extends Component {
  constructor(props){
    super(props)
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
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    this.toggleSideBar(this.props.active, true)
  }

  navStyles() {
    var styles = ['nav-toggle']
    if(this.props.active){
      styles.push('nav-active')
    }
    return styles.join(' ')
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
          <div className={this.navStyles()} ref="toggle">
            <button className="nav-button nav-button-text" onClick={() => this.props.onMenuToggle()}>Menu</button>
            <button className="nav-button nav-handle" onClick={() => this.props.onMenuToggle()}><span></span></button>
          </div>
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
