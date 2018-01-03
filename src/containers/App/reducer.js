// action
export const TOGGLE = "TOGGLE";

// action creator
export const toggle = () => ({ type: TOGGLE });

// selector
export const appIsOn = (state) => state.app.isOn;

// reducer
export default (state = { isOn: false}, action) => {
  switch (action.type) {

    case TOGGLE:
      return Object.assign({}, state, { isOn: !state.isOn });

    default:
      return state;
  }
};
