import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import GSAP from 'react-gsap-enhancer'

export const ANIMATION_STATE = {
  NONE: "",
  WALK: "walk",
  CARRY: "carry",
  WAIT: "wait"
}

function makeWrestler(target) {
  return {
    root: target,
    legBack: target.find({name: 'leg-background'}),
    legFront: target.find({name: 'leg-foreground'}),
    arm: target.find({name: 'arm'}),
    towel: target.find({name: 'towel'}),
    head: target.find({name: 'head'}),
    torso: target.find({name: 'torso'}),
    clothing: target.find({name: 'clothing'})
  }
}

function walkAnimation({target}) {
  var wrestler = makeWrestler(target);
  return new TimelineMax({repeat: -1, yoyo: true})
    .set(wrestler.legFront, {transformOrigin:'50% 0%',  rotation: 25})
    .set(wrestler.legBack,  {transformOrigin:'50% 0%',  rotation: -25})
    .set(wrestler.arm,      {transformOrigin:'0% 100%', rotation: 110, y:-10})
    .set(wrestler.head,     {transformOrigin:'50% 100%', rotation: 15})
    .to(wrestler.legBack,   0.5,  {rotation: 25, ease: Power0.easeNone},      0)
    .to(wrestler.legFront,  0.5,  {rotation: -25, ease: Power0.easeNone},     0)
    .to(wrestler.arm,       0.5,  {rotation: 150, ease: Power0.easeNone},     0)
    .to(wrestler.head,      0.5,  {rotation: 20, ease: Power0.easeNone},      0)
    .to(wrestler.towel,     0.25, {rotation: 5, ease: Power0.easeNone},       0)
    .to(wrestler.towel,     0.25, {rotation: -5, ease: Power0.easeNone},      0.25)
    .to(wrestler.clothing,  0.5,  {rotation: 5, ease: Power0.easeNone},       0)
    .to(wrestler.torso,     0.5,  {rotation: 7, ease: Power0.easeNone},       0)
}

function waitAnimation({target}) {
  var wrestler = makeWrestler(target);
  return new TimelineMax({repeat: -1, yoyo: true})
    .set(wrestler.legFront, {transformOrigin:'50% 0%',  rotation: 0})
    .set(wrestler.legBack,  {transformOrigin:'50% 0%',  rotation: 0})
    .set(wrestler.arm,      {transformOrigin:'0% 100%', rotation: 110, y:-10})
    .set(wrestler.head,     {transformOrigin:'50% 100%', rotation: 0})
    .to(wrestler.arm,       1.0, {rotation: 115,  ease: Power0.easeNone},      0)
    .to(wrestler.torso,     1.0, {rotation: 2,    ease: Power0.easeNone},      0)
    .to(wrestler.clothing,  1.0, {rotation: 2,    ease: Power0.easeNone},      0)
    .to(wrestler.head,      1.0, {rotation: 1,    ease: Power0.easeNone},      0)
    .to(wrestler.towel,     0.5, {rotation: 1,    ease: Power0.easeNone},      0)
    .to(wrestler.towel,     0.5, {rotation: -1,   ease: Power0.easeNone},      0.5)
}

require('./SumoWrestler.scss');

class SumoWrestler extends Component {
  constructor(props) {
    super(props)
    this.state = { currentAnimation: ANIMATION_STATE.NONE }
  }

  componentDidMount() {
    this.setAnimation(this.props.animationState)
  }

  setAnimation(intendedState){
    if(this.state.currentAnimation !== intendedState) {
      if(typeof this.animationController !== 'undefined') {
          this.animationController.kill()
      }
      switch(intendedState) {
        case ANIMATION_STATE.WALK:
          this.animationController = this.addAnimation(walkAnimation)
          break
        default:
          this.animationController = this.addAnimation(waitAnimation)
      }
    }
  }

  onClick(event) {
    let toggleState = (this.state.currentAnimation === ANIMATION_STATE.WALK) ? ANIMATION_STATE.WAIT : ANIMATION_STATE.WALK;
    this.setAnimation(toggleState)
    this.setState({currentAnimation: toggleState})
  }

  render() {
    return (
      <svg viewBox="0 0 54 94" className="SumoWrestler" onClick={this.onClick.bind(this)}>
      <g name="wrestler">
      	<g name="leg-background">
      		<path className="skin" d="M22.1,71.2v-6.7c0,0,1-5.7,6.8-5.7s6.7,5.9,6.7,5.9l0,16.5c0,0-0.9,5.8-6.7,5.8s-6.8-6.2-6.8-6.2L22.1,71.2z"
      			/>
      		<g>
      			<path className="attributes" d="M28.9,87.6c-4.1,0-7.4-3.3-7.4-7.4l0-14.5c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.3,7.4,7.4l0,14.5
      				C36.3,84.3,33,87.6,28.9,87.6z M28.9,59.5c-3.4,0-6.1,2.8-6.1,6.1l0,14.5c0,3.4,2.8,6.1,6.1,6.1s6.1-2.8,6.1-6.1l0-14.5
      				C35.1,62.3,32.2,59.5,28.9,59.5z"/>
      		</g>
      	</g>
      	<g name="leg-foreground">
      		<path className="skin" d="M27.1,72.7v-7.3c0,0,1.1-6.2,7.5-6.2s7.3,6.5,7.3,6.5v18c0,0-1,6.3-7.3,6.3s-7.5-6.7-7.5-6.7V72.7z"/>
      		<g>
      			<path className="attributes" d="M34.6,90.6c-4.5,0-8.1-3.6-8.1-8.1V66.7c0-4.5,3.6-8.1,8.1-8.1s8.1,3.6,8.1,8.1v15.8
      				C42.6,87,39,90.6,34.6,90.6z M34.6,60c-3.7,0-6.7,3-6.7,6.7v15.8c0,3.7,3,6.7,6.7,6.7s6.7-3,6.7-6.7V66.7
      				C41.3,63,38.2,60,34.6,60z"/>
      		</g>
      	</g>
      	<g name="clothing">
      		<path name="towel" className="attributes" d="M45.9,54.1c0,0-0.7,14.9-4.1,18.1h7.3V57.3L45.9,54.1z"/>
      		<g name="underwear">
      			<g>
      				<path className="attributes" d="M50.8,52.2H14.6c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2h1.6c-0.2,1.3,0,2.7,0.9,4.1
      					c2.8,4.5,10.8,7.2,17.7,6.1c4.6-0.7,7.6-3,8.3-5.8c0.2,0,0.3,0,0.3,0s-0.1-2.9,3.3-4.5h4.1c1.8,0,3.2-1.4,3.2-3.2
      					C54,53.6,52.5,52.2,50.8,52.2z"/>
      			</g>
      		</g>
      	</g>
      	<g name="torso">
      		<g>
      			<path className="skin" d="M47.9,44.3c0.6,4.2,1.2,7.8-2.3,9.6c-0.8,0.4-2.9,0.8-8.7,0.8c-7.3,0-16.4-0.7-18.3-0.9
      				c-0.8-1.3-4.1-7-4.1-10.6c0-0.5,0-1.1,0-1.7c-0.1-3.2-0.1-7.5,1.6-10.5l0,0c0,0,2.1-3.5,5.3-4.6c2.2-0.7,5.4,0.6,7,1.4
      				c0,0,0,0,0,0c0.2,0.1,0.3,0.2,0.5,0.2c0,0,0.1,0,0.1,0.1c0.3,0.2,0.5,0.3,0.5,0.3l0,0c0.5,0.2,1,0.5,1.5,0.8
      				c10.1,5.7,16.3,10.9,16.8,14.4L47.9,44.3z"/>
            <path className="attributes" d="M30.2,27.2l-0.3,0.5c-0.3-0.2-0.6-0.3-0.9-0.5c0.2-0.1,0.4-0.3,0.6-0.4C29.8,27,30,27.1,30.2,27.2z"/>
      			<path className="attributes" d="M29.9,27.8l-0.4,0.6c-0.2-0.1-0.3-0.2-0.5-0.2c-0.1,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.3-0.1-0.5-0.2
      				c0.2-0.2,0.4-0.3,0.6-0.5C29.3,27.4,29.6,27.6,29.9,27.8z"/>
            <path className="attributes" d="M29.5,28.4L29.5,28.4c0,0-0.2-0.1-0.5-0.2C29.2,28.2,29.4,28.3,29.5,28.4z"/>
      			<path className="attributes" d="M28.9,28c-0.2-0.1-0.3-0.1-0.5-0.2c0,0,0,0,0,0C28.6,27.9,28.8,28,28.9,28z"/>
      			<path className="attributes" d="M21.4,26.4c-3.2,1.1-5.3,4.6-5.3,4.6l0,0c0.2-0.3,0.4-0.7,0.6-1c-0.2,0-0.5-0.1-0.7-0.2
      				c0.7-1.1,1.5-2,2.4-2.5c2-1.2,2.7-2,4.2-1.9c1.2,0.1,3.1,0.2,6.5,1.9c-0.2,0.2-0.4,0.3-0.6,0.5C26.8,27,23.6,25.7,21.4,26.4z"/>
            <path className="attributes" d="M15.3,29.6c0.8-1.2,2.8-3.6,5.6-4.5c3.7-1.2,9.1,2,9.3,2.1l0,0c-0.2-0.1-0.4-0.2-0.6-0.3
      				c-0.2,0.1-0.4,0.3-0.6,0.4c-3.4-1.7-5.2-1.8-6.5-1.9c-1.5-0.1-2.2,0.7-4.2,1.9c-0.9,0.6-1.7,1.5-2.4,2.5
      				C15.7,29.8,15.5,29.7,15.3,29.6z"/>
            <path className="attributes" d="M16.7,30c-0.2,0.3-0.4,0.6-0.6,1l-0.5-0.3c0.1-0.3,0.3-0.6,0.4-0.8C16.2,29.9,16.5,29.9,16.7,30z"/>
      			<path className="attributes" d="M16,29.8c-0.2,0.2-0.3,0.5-0.4,0.8l-0.6-0.4c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3
      				C15.5,29.7,15.7,29.8,16,29.8z"/>
            <path className="attributes" d="M15.3,29.6C15.3,29.6,15.3,29.6,15.3,29.6c-0.1,0.1-0.1,0.2-0.2,0.4C15.1,29.8,15.2,29.7,15.3,29.6z"/>
      			<path className="attributes" d="M14,45.3c0-2-0.8-8.1,0-10.9c0.4-1.3,0.9-2.6,1.5-3.7l0.5,0.3c-1.7,3-1.7,7.3-1.6,10.5c0,0.6,0,1.2,0,1.7
      				c0,3.6,3.3,9.3,4.1,10.6c1.9,0.2,11,0.9,18.3,0.9c5.8,0,7.9-0.4,8.7-0.8c3.5-1.8,2.9-5.4,2.3-9.6l-0.1-0.7
      				c-0.5-3.5-6.7-8.7-16.8-14.4c-0.5-0.3-1-0.6-1.5-0.8l0.4-0.6c0.5,0.3,1,0.6,1.5,0.9c5,3,9.9,5.9,11.7,7.8
      				c1.8,1.8,4.3,4.4,4.3,4.4l1.4,4.9l0.3,4.8c0,0-0.8,4.5-5.8,4.7l-25-0.9C18.4,54.3,14,47.2,14,45.3z"/>
            <path className="attributes" d="M17.6,54.7c-0.2-0.3-4.5-7.1-4.5-11.6c0-0.5,0-1,0-1.6c0-3.5-0.1-7.9,1.8-11.2l0.6,0.4
      				c-0.6,1.1-1.1,2.4-1.5,3.7c-0.8,2.9,0,8.9,0,10.9c0,2,4.3,9,4.3,9l25,0.9c5-0.2,5.8-4.7,5.8-4.7l-0.3-4.8l-1.4-4.9
      				c0,0-2.6-2.6-4.3-4.4c-1.8-1.8-6.7-4.8-11.7-7.8c-0.5-0.3-1-0.6-1.5-0.9l0.3-0.5c0.5,0.2,0.9,0.5,1.5,0.8
      				c7.5,4.2,16.7,10.4,17.5,15.4l0.1,0.7c0.6,4.3,1.3,8.8-3.1,10.8c-1.3,0.7-4.4,1-9.3,1c-8.2,0-18.7-0.9-18.8-0.9h-0.3L17.6,54.7z"
      				/>
      		</g>
      	</g>
      	<g name="head">
      		<circle className="skin" cx="19.9" cy="15.3" r="14.1"/>
      		<path className="attributes" d="M19.8,30.4c-8.3,0-15.1-6.8-15.1-15.2S11.5,0,19.8,0s15.1,6.8,15.1,15.2S28.2,30.4,19.8,30.4z M19.8,1.3
      			c-7.6,0-13.7,6.2-13.7,13.9c0,7.6,6.2,13.9,13.7,13.9s13.7-6.2,13.7-13.9C33.6,7.5,27.4,1.3,19.8,1.3z"/>
      		<g>
      			<g>
      				<g>
      					<g>
      						<path className="attributes" d="M26,1.4c-3.5-0.9-9.7-2.1-13.9,0S6.2,6.1,6,8.8s-1.4,9.1,1.2,13.1s3.4,7.5,10.5-3.8
      							c0.8-1.2,1.4-2.2,1.9-3.1l4,4.2l3.3-1.2l-4.4-7c1.4-0.7,6.8-3.6,7.2-5.2C30.2,4,29.5,2.3,26,1.4z M22.4,10.9L22.4,10.9
      							C22.9,10.1,22.6,10.5,22.4,10.9z"/>
      					</g>
      				</g>
      				<circle className="attributes" cx="3.8" cy="13.3" r="3.8"/>
      			</g>
      		</g>
      	</g>
      	<g name="arm">
      		<g>
      			<path className="skin" d="M30.4,44.7c0,0,4.7-9.3,7.3-12.6c2.6-3.3,8.4-11.8,9.5-12.1c1.1-0.2,3.8,0.1,4.5,2.3
      				c0.7,2.2,0.1,3.2-0.7,4.8c-0.8,1.6-10.1,11.8-12.8,14.3C35.5,43.8,32.9,44.1,30.4,44.7z"/>
      		</g>
      		<g>
      			<g>
      				<path className="attributes" d="M51.4,20.6c0.4,0.4,0.8,0.9,0.9,1.5c0.8,2.4,0.1,3.6-0.6,5.1l-0.1,0.2c-0.9,1.7-10.2,12-13,14.5
      					c-2.6,2.3-5,2.8-7.3,3.3c-0.3,0.1-0.5,0.1-0.8,0.2l-1.4,0.3l0.7-1.3C30,44,34.6,35,37.2,31.7c0.7-0.9,1.6-2.1,2.5-3.5
      					c4.6-6.4,6.4-8.7,7.4-8.9C48,19.1,50.1,19.3,51.4,20.6z M31.7,43.7c2-0.5,4-1,6-2.9c2.8-2.5,12-12.6,12.7-14.1l0.1-0.2
      					c0.7-1.4,1.1-2.2,0.6-4.1c-0.1-0.4-0.3-0.7-0.6-1c-0.9-0.9-2.4-1-3.1-0.9c-0.8,0.4-4.4,5.4-6.6,8.3c-1,1.3-1.9,2.6-2.6,3.5
      					C36.3,35,33.1,41,31.7,43.7z"/>
      			</g>
      		</g>
      	</g>
      </g>
      </svg>
    )
  }
}

SumoWrestler.propTypes = {
  animationState: PropTypes.string.isRequired
}

export default GSAP()(SumoWrestler)
