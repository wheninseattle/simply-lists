import {
  ADD_LIST,
  DELETE_LIST,
  UPDATE_LIST,
  GET_LISTS,
  CLEAR_LISTS,
  SET_CURRENT_LIST,
  CLEAR_CURRENT_LIST,
  LIST_ERROR,
  ADD_LIST_ITEM
} from "../types";

export default (state,action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        lists: [action.payload, ...state.lists],
        currentList: action.payload,
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
        };
        case UPDATE_LIST:
          return {
            ...state,
            lists: state.lists.map(list => 
              list._id === action.payload._id ? action.payload : list
            ),
            currentList: action.payload
          };
        case DELETE_LIST:
          return {
            ...state,
            lists: state.lists.filter(list => list._id != action.payload._id),
            currentList: null
          };
          case ADD_LIST_ITEM:
            return {
              ...state,
              listItems: [action.payload, ...state.listItems]
            }
    default:
      return state;
  }
}