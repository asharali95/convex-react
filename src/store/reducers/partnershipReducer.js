import {
  FETCH_PARTNERSHIP_ERROR,
  FETCH_PARTNERSHIP_LIST,
  SET_PARTNERSHIP_LIST,
} from "../common/types";

const initialState = {
  error: "",
  loading: false,
  partnerships: [],
  currentPage: 1,
  per_page: 0,
  total_record: 0,
};
const partnershipReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARTNERSHIP_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_PARTNERSHIP_LIST:
      return {
        ...state,
        partnerships: [...action.payload],
        ...action.pagination,
        loading: false,
      };
    case FETCH_PARTNERSHIP_ERROR:
      return {
        ...state,
        partnerships: [],
        loading: false,
        error: action.payload,
        currentPage: 1,
        per_page: 0,
        total_record: 0,
      };

    default:
      return state;
  }
};

export default partnershipReducer;
