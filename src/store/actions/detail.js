import { FETCH_DETAIL } from "../types";
import axios from "configs/axios";

export const fetchDetail = (url, detail) => (dispatch) => {
  return axios.get(url).then((response) => {
    dispatch({
      type: FETCH_DETAIL,
      payload: {
        [detail]: response.data,
      },
    });
  });
};
