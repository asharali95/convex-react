import AXIOS from "../common/api_helper";
import { APIs } from "../common/constants";
import {
    FETCH_BLOG_LIST,
    SET_BLOG_LIST,
    FETCH_BLOG_ERROR,
    SET_BLOG_DETAIL,
    FETCH_HOME_LIST,
    SET_HOME_LIST,
    FETCH_HOME_ERROR,
} from "../common/types";
import { toast } from "react-toastify";

export const getBlogs = (payload, page = 1) => async(dispatch) => {
    try {
        dispatch({ type: FETCH_BLOG_LIST });
        const { data } = await AXIOS.post(`${APIs.GET_ALL_BLOGS}?page=${page}`, {...payload });

        if (data.status) {
            dispatch({
                type: SET_BLOG_LIST,
                payload: data.data || [],
                pagination: {
                    currentPage: data.currentPage || 1,
                    per_page: data.per_page || 0,
                    total_record: data.total_record || 0,
                },
            });
        } else {
            dispatch({
                type: SET_BLOG_LIST,
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
            type: FETCH_BLOG_ERROR,
            payload: err,
        });
    }
};

export const getBlog = (blogId) => async(dispatch, getState) => {
    try {
        dispatch({ type: FETCH_BLOG_LIST });
        const { data } = await AXIOS.post(APIs.GET_BLOG_DETAIL, { id: blogId });
        if (data.status) {
            dispatch({
                type: SET_BLOG_DETAIL,
                payload: {
                    ...data.data,
                    // tag: data.data.tag.split(","),
                },
            });
        }
    } catch (err) {
        toast.error(err.message);
        dispatch({
            type: FETCH_BLOG_ERROR,
            payload: err,
        });
    }
};

export const getHomePageData = () => async(dispatch) => {
    try {
        dispatch({ type: FETCH_HOME_LIST });
        const { data } = await AXIOS.get(APIs.GET_BLOG_EVENT_PORTFOLIO);

        if (data.status) {
            dispatch({
                type: SET_HOME_LIST,
                payload: data.data || [],
            });
        } else {
            dispatch({
                type: SET_HOME_LIST,
                payload: data.data || [],
            });
        }
    } catch (err) {
        toast.error(err.message);
        dispatch({
            type: FETCH_HOME_ERROR,
            payload: err,
        });
    }
};