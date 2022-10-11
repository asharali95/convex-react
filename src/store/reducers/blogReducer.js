import {
    FETCH_BLOG_ERROR,
    FETCH_BLOG_LIST,
    FETCH_HOME_ERROR,
    FETCH_HOME_LIST,
    RESET_BLOG_DETAIL,
    SET_BLOG_DETAIL,
    SET_BLOG_LIST,
    SET_HOME_LIST,
} from "../common/types";

const initialState = {
    error: "",
    loading: false,
    blogs: [],
    blog_details: {},
    currentPage: 1,
    per_page: 0,
    total_record: 0,
};
const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOG_LIST:
            return {
                ...state,
                loading: true,
            };
        case SET_BLOG_LIST:
            return {...state, blogs: [...action.payload], ...action.pagination, loading: false };
        case FETCH_BLOG_ERROR:
            return {
                ...state,
                blogs: [],
                loading: false,
                currentPage: 1,
                per_page: 0,
                total_record: 0,
                error: action.payload,
            };
        case SET_BLOG_DETAIL:
            return {...state, loading: false, blog_details: action.payload };
        case RESET_BLOG_DETAIL:
            return {...state, loading: false, blog_details: {} };
        default:
            return state;
    }
};

export const homeReducer = (
    state = {
        error: "",
        loading: false,
        blogs: [],
        events: [],
        portfolios: [],
    },
    action
) => {
    switch (action.type) {
        case FETCH_HOME_LIST:
            return {
                ...state,
                loading: true,
            };
        case SET_HOME_LIST:
            return {...state, ...action.payload, loading: false };
        case FETCH_HOME_ERROR:
            return {
                ...state,
                blogs: [],
                events: [],
                portfolios: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default blogReducer;