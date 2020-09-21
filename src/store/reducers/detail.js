import { FETCH_DETAIL } from "../types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DETAIL:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
