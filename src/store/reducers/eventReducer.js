import {
  FETCH_EVENT_ERROR,
  FETCH_EVENT_LIST,
  RESET_EVENT_DETAIL,
  SET_EVENT_DETAIL,
  SET_EVENT_LIST,
} from "../common/types";

const initialState = {
  error: "",
  loading: false,
  events: [],
  event_details: {},
};
const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENT_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_EVENT_LIST:
      return { ...state, events: [...action.payload], loading: false };
    case FETCH_EVENT_ERROR:
      return {
        ...state,
        events: [],
        loading: false,
        error: action.payload,
      };
    case SET_EVENT_DETAIL:
      return { ...state, loading: false, event_details: action.payload };
    case RESET_EVENT_DETAIL:
      return { ...state, loading: false, event_details: {} };
    default:
      return state;
  }
};

export default eventReducer;
