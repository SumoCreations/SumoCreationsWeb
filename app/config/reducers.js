import { combineReducers } from 'redux';
import { SET_NAVIGATION_STATE, NavigationStates } from './actions';
const { INACTIVE } = NavigationStates;

function navigationState(state = INACTIVE, action) {
  switch (action.type) {
  case SET_NAVIGATION_STATE:
    return action.state;
  default:
    return state;
  }
}

const sumoApp = combineReducers({
  navigationState
});

export default sumoApp;
