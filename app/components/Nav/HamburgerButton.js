import Segment from 'segment-js'
import { easeElasticIn, easeElasticOut, easeBounceOut } from 'd3-ease'
import React, { Component, PropTypes } from 'react'
import ReactDOM, { render } from 'react-dom'
import css from './HamburgerButton.scss'

const ACTIVE = 'active';

class HamburgerButton extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.toggle(this.props.active, false)
  }

  componentDidUpdate() {
    this.toggle(this.props.active, true)
  }

  toggle(visible=false, animated=false) {
    let pathA = document.getElementById('pathA')
    let pathB = document.getElementById('pathB')
    let pathC = document.getElementById('pathC')
    let segmentA = new Segment(pathA, 8, 32)
    let segmentB = new Segment(pathB, 8, 32)
    let segmentC = new Segment(pathC, 8, 32)

    if(visible) {
      this.inAC(segmentA)
      this.inB(segmentB)
      this.inAC(segmentC)
    } else {
      this.outAC(segmentA)
      this.outB(segmentB)
      this.outAC(segmentC)
    }
  }

  inAC(s) {
    s.draw('80% - 24', '80%', 0.3, {
      delay: 0.1,
      callback: () => this.inAC2(s)
    })
  }

  inAC2(s) {
    s.draw('100% - 54.5', '100% - 30.5', 0.6, {
      easing: easeElasticOut,
    })
  }

  inB(s) {
    s.draw(8 - 6, 32 + 6, 0.1, {
      callback: () => this.inB2(s)
    })
  }

  inB2(s) {
    s.draw(8 + 12, 32 - 12, 0.3, {
      easing: easeBounceOut,
    })
  }

  outAC(s) {
    s.draw('90% - 24', '90%', 0.1, {
      easing: easeElasticIn,
      callback: () => this.outAC2(s),
    })
  }

  outAC2(s) {
    s.draw('20% - 24', '20%', 0.3, {
      callback: () => this.outAC3(s),
    })
  }

  outAC3(s) {
    s.draw(0, 32, 0.7, {
      easing: easeElasticOut,
    })
  }

  outB(s) {
    s.draw(15, 79, 0.7, {
      delay: 0.1,
      easing: easeElasticOut,
    })
  }

  navStyles() {
    var styles = ['hamburger-button']
    if(this.props.active){
      styles.push('nav-active')
    }
    return styles.join(' ')
  }

  render() {
    return (
      <div className={this.navStyles()}>
        <button className="hamburger-button-text" onClick={() => this.props.onClick()}>Menu</button>
        <button className="hamburger-button-target" onClick={() => this.props.onClick()}><span></span></button>
        <svg width="100px" height="100px">
          <path id="pathB" class="st0" d="M15,49.7h79.3"/>
          <path id="pathC" class="st1" d="M3,38.3h85.7c0,0,18.8-6.9-6.8-12.3s-67.6-7.4-59.1,1.5s7.5,6.6,7.5,6.6L69.5,76"/>
          <path id="pathA" class="st1" d="M0.1,61h85.7c0,0,18.8,6.9-6.8,12.3s-61.4,7.9-52.9-0.9s7.5-6.6,7.5-6.6l33-42.5"/>
        </svg>
      </div>
    )
  }
}

HamburgerButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default HamburgerButton
