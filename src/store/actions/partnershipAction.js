import AXIOS from "../common/api_helper";
import { APIs } from "../common/constants";
import {
  SET_PARTNERSHIP_LIST,
  FETCH_PARTNERSHIP_LIST,
  FETCH_PARTNERSHIP_ERROR,
} from "../common/types";
import { toast } from "react-toastify";

export const getPartners =
  (category_id, page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: FETCH_PARTNERSHIP_LIST });
      const { data } = await AXIOS.post(`${APIs.GET_PARTNERS}?page=${page}`, {
        category_id,
      });

      if (data.status) {
        dispatch({
          type: SET_PARTNERSHIP_LIST,
          payload: data.data || [],
          pagination: {
            currentPage: data.currentPage || 1,
            per_page: data.per_page || 0,
            total_record: data.total_record || 0,
          },
        });
      } else {
        dispatch({
          type: SET_PARTNERSHIP_LIST,
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
        type: FETCH_PARTNERSHIP_ERROR,
        payload: err,
      });
    }
  };
