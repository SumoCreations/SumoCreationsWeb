/*
 * action types
 */

export const SET_NAVIGATION_STATE = 'SET_NAVIGATION_STATE';

/*
 * other constants
 */

export const NavigationStates = {
  ACTIVE: true,
  INACTIVE: false
};

/*
 * action creators
 */

export function setNavigationState(state) {
  return { type: SET_NAVIGATION_STATE, state };
}
