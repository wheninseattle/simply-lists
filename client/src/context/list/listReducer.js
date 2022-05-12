import {
  ADD_LIST,
  DELETE_LIST,
  UPDATE_LIST,
  GET_LISTS,
  CLEAR_LISTS,
  SET_CURRENT_LIST,
  CLEAR_CURRENT_LIST,
  LIST_ERROR
} from "../types";

export default (state,action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        lists: [action.payload, ...state.contacts],
        loading: false
      }
      
    default:
      return state;
  }
}