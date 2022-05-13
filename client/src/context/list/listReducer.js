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
        lists: action.payload,
        loading: false
      };
      case GET_LISTS:
        return {
          ...state,
          lists: [...action.payload],
          loading: false
        };
      case CLEAR_LISTS:
        return {
          ...state,
          lists:null,
          loading:false
        };
      case SET_CURRENT_LIST:
        return {
          ...state,
          currentList: action.payload
        };
      case CLEAR_CURRENT_LIST:
        return {
          ...state,
          currentList: null
        }
    default:
      return state;
  }
}