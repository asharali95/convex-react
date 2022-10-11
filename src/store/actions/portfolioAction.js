import AXIOS from "../common/api_helper";
import { APIs } from "../common/constants";
import {
  FETCH_PORTFOLIO_LIST,
  SET_PORTFOLIO_LIST,
  FETCH_PORTFOLIO_ERROR,
  SET_PORTFOLIO_DETAIL,
} from "../common/types";
import { toast } from "react-toastify";

export const getPortfolios =
  (payload, page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: FETCH_PORTFOLIO_LIST });
      const { data } = await AXIOS.post(
        `${APIs.GET_ALL_PORTFOLIOS}?page=${page}`,
        { ...payload }
      );

      if (data.status) {
        dispatch({
          type: SET_PORTFOLIO_LIST,
          payload: data.data || [],
          pagination: {
            currentPage: data.currentPage || 1,
            per_page: data.per_page || 0,
            total_record: data.total_record || 0,
          },
        });
      } else {
        dispatch({
          type: SET_PORTFOLIO_LIST,
          payload: data.data || [],
          pagination: {
            currentPage: 1,
            per_page: 0,
            total_record: 0,
          },
        });
      }
    } catch (err) {
      toast.error(err.message);
      dispatch({
        type: FETCH_PORTFOLIO_ERROR,
        payload: err,
      });
    }
  };

export const getPortfolio = (portfolioId) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PORTFOLIO_LIST });
    const { data } = await AXIOS.post(APIs.GET_PORTFOLIO_DETAIL, {
      id: portfolioId,
    });
    if (data.status) {
      dispatch({
        type: SET_PORTFOLIO_DETAIL,
        payload: {
          ...data.data,
        },
      });
    }
  } catch (err) {
    toast.error(err.message);
    dispatch({
      type: FETCH_PORTFOLIO_ERROR,
      payload: err,
    });
  }
};
