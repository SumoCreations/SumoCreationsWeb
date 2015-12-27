import { SET_NAVIGATION_STATE, NavigationStates } from '../config/actions';

const { INACTIVE } = NavigationStates;

function navigationState(state = INACTIVE, action) {
  switch (action.type) {
  case SET_NAVIGATION_STATE:
    return action.state;
  default:
    return state;
  }
}

module.exports = navigationState;
