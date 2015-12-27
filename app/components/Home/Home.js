import React, { Component } from 'react';
import { render } from 'react-dom';
import { Parse } from 'parse';
import SumoWrestler, { ANIMATION_STATE } from '../SVG/SumoWrestler';

require('./Home.scss');

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-scene">
          <SumoWrestler animationState={ANIMATION_STATE.WAIT} />
        </div>
      </div>
    );
  }
}

export default (Home);
