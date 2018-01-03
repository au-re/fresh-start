import { requestStatuses } from "redux-resource";

/* extend redux-resource to keep track of error objects */
export const errorPlugin = (resourceName, options) => (state, action) => {

  switch (action.type) {

    case requestStatuses.FAILED:
      return Object.assign({}, state, { isOn: !state.isOn });

    default:
      return state;
  }
};
