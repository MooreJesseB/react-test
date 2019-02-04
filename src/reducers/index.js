import { ADD_TAB, SET_SELECTED_TAB } from "../constants/action-types";

const initialState = {
  tabs: [],
  currentTab: ''
};

function rootReducer(state = initialState, action) {
  if(action.type === ADD_TAB) {
    return Object.assign({}, state, {
      tabs: state.tabs.concat({id: action.payload.id}),
      body: ''
    });
  } else if (action.type === SET_SELECTED_TAB) {
    return Object.assign({}, state, {
      currentTab: action.payload
    });
  }
  return state;
}

export default rootReducer;