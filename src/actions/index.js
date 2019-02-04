import { ADD_TAB } from "../constants/action-types";
import { SET_SELECTED_TAB } from "../constants/action-types";

export function addTab(payload) {
  return { type: ADD_TAB, payload };
}

export function setSelectedTab(payload) {
    return { type: SET_SELECTED_TAB, payload }
}
