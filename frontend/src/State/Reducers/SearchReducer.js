import { GET_DATA, SET_SEARCH_VALUE } from "../Constants/SearchConstants";

export const SearchReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        value: action.value,
      };

    case GET_DATA:
      console.log("action : ", action);
      return {
        ...state,
        data: action.data,
      };

    default:
      return {
        ...state,
      };
  }
};
