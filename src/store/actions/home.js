import { FETCH_HOME } from "../types";
import axios from "configs/axios";

export const fetchHome = (url, home) => (dispatch) => {
  return axios.get(url).then((response) => {
    dispatch({
      type: FETCH_HOME,
      payload: {
        [home]: response.data,
      },
    });
  });
};
