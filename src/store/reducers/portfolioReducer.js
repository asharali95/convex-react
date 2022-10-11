import {
  FETCH_PORTFOLIO_ERROR,
  FETCH_PORTFOLIO_LIST,
  RESET_PORTFOLIO_DETAIL,
  SET_PORTFOLIO_DETAIL,
  SET_PORTFOLIO_LIST,
} from "../common/types";

const initialState = {
  error: "",
  loading: false,
  portfolios: [],
  portfolio_details: {},
  currentPage: 1,
  per_page: 0,
  total_record: 0,
};
const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIO_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_PORTFOLIO_LIST:
      return {
        ...state,
        portfolios: [...action.payload],
        ...action.pagination,
        loading: false,
      };
    case FETCH_PORTFOLIO_ERROR:
      return {
        ...state,
        portfolios: [],
        currentPage: 1,
        per_page: 0,
        total_record: 0,
        loading: false,
        error: action.payload,
      };
    case SET_PORTFOLIO_DETAIL:
      return { ...state, loading: false, portfolio_details: action.payload };
    case RESET_PORTFOLIO_DETAIL:
      return { ...state, loading: false, portfolio_details: {} };
    default:
      return state;
  }
};

export default portfolioReducer;
