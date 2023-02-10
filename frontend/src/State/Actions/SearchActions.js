import axios from "axios";

import { GET_DATA, SET_SEARCH_VALUE } from "../Constants/SearchConstants";

export const SetSearchValue = (value) => async (dispatch) => {
  try {
    dispatch({ type: SET_SEARCH_VALUE, value });

    const data=await axios.get(`/api/search?search=${value}`)

    console.log("y");
    console.log(data);
    dispatch({
      type: GET_DATA,
      data: data.data.data.items,
    });
    console.log("N");
  } catch (error) {
    console.log(error);
  }
};
