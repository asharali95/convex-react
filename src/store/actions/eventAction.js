import AXIOS from "../common/api_helper";
import { APIs } from "../common/constants";
import {
  FETCH_EVENT_LIST,
  SET_EVENT_LIST,
  FETCH_EVENT_ERROR,
  SET_EVENT_DETAIL,
} from "../common/types";
import { toast } from "react-toastify";

export const getEvents = (payload) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_EVENT_LIST });
    const { data } = await AXIOS.post(APIs.GET_ALL_EVENTS, { ...payload });

    if (data.status) {
      dispatch({
        type: SET_EVENT_LIST,
        payload: data.data || [],
      });
    } else {
      dispatch({
        type: SET_EVENT_LIST,
        payload: data.data || [],
      });
    }
  } catch (err) {
    toast.error(err.message);
    dispatch({
      type: FETCH_EVENT_ERROR,
      payload: err,
    });
  }
};

export const getEvent = (eventId) => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_EVENT_LIST });
    const { data } = await AXIOS.post(APIs.GET_EVENT_DETAIL, {
      id: eventId,
    });
    if (data.status) {
      dispatch({
        type: SET_EVENT_DETAIL,
        payload: {
          ...data.data,
        },
      });
    }
  } catch (err) {
    toast.error(err.message);
    dispatch({
      type: FETCH_EVENT_ERROR,
      payload: err,
    });
  }
};
