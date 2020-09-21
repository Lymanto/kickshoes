import { FETCH_HOME } from "../types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_HOME:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
