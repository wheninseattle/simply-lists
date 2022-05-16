import {
  ADD_LIST,
  DELETE_LIST,
  UPDATE_LIST,
  GET_LISTS,
  CLEAR_LISTS,
  SET_CURRENT_LIST,
  CLEAR_CURRENT_LIST,
  LIST_ERROR,
  ADD_LIST_ITEM,
  GET_LIST_ITEMS,
  SET_CURRENT_LIST_ITEM,
  CLEAR_CURRENT_LIST_ITEM,
  DELETE_LIST_ITEM,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        lists: [action.payload, ...state.lists],
        currentList: action.payload,
        loading: false,
      };
    case GET_LISTS:
      return {
        ...state,
        lists: [...action.payload],
        loading: false,
      };
    case CLEAR_LISTS:
      return {
        ...state,
        lists: null,
        loading: false,
      };
    case SET_CURRENT_LIST:
      return {
        ...state,
        currentList: action.payload,
      };
    case CLEAR_CURRENT_LIST:
      return {
        ...state,
        currentList: null,
      };
    case UPDATE_LIST:
      return {
        ...state,
        lists: state.lists.map((list) =>
          list._id === action.payload._id ? action.payload : list
        ),
        currentList: action.payload,
      };
    case DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => list._id !== action.payload),
        currentList: null,
      };
    case ADD_LIST_ITEM:
      return {
        ...state,
        listItems: [...state.listItems, action.payload],
      };
    case GET_LIST_ITEMS:
      return {
        ...state,
        listItems: [...action.payload],
      };
    case SET_CURRENT_LIST_ITEM:
      return {
        ...state,
        currentListItem: action.payload,
      };
    case CLEAR_CURRENT_LIST_ITEM:
      return {
        ...state,
        currentListItem: null,
      };
    case DELETE_LIST_ITEM:
      return {
        ...state,
        listItems: state.listItems.filter((item)=> item._id !== action.payload.id)
      }
    case LIST_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
