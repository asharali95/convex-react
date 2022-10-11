import AXIOS from "../common/api_helper";
import { APIs } from "../common/constants";
import {
    FORM_SUBMITTING,
    FORM_SUCCESS,
    RESET_FORM_SUBMITTING,
} from "../common/types";
import { toast } from "react-toastify";

export const sendContact = (payload, resetForm, history) => async(dispatch) => {
    try {
        dispatch({
            type: FORM_SUBMITTING,
        });
        const { data } = await AXIOS.post(APIs.SEND_CONTACT_QUERY, {...payload });
        dispatch({
            type: FORM_SUCCESS,
        });
        dispatch({
            type: RESET_FORM_SUBMITTING,
        });
        if (data.status) {
            resetForm();
            // toast.success(data.message);
            history.push("/thankyou");
        } else {
            toast.error(data.message);
        }
    } catch (err) {
        dispatch({
            type: RESET_FORM_SUBMITTING,
        });

        toast.error(err.message);
    }
};

export const createPartnerLead = (payload, resetForm, history) => async(dispatch) => {
    try {
        dispatch({
            type: FORM_SUBMITTING,
        });
        const { data } = await AXIOS.post(APIs.CREATE_PARTNER_LEAD, {...payload });
        dispatch({
            type: FORM_SUCCESS,
        });
        dispatch({
            type: RESET_FORM_SUBMITTING,
        });
        if (data.status) {
            resetForm();
            toast.success(data.message);
            history.push("/thankyou");
        } else {
            toast.error(data.message);
        }
    } catch (err) {
        dispatch({
            type: RESET_FORM_SUBMITTING,
        });

        toast.error(err.message);
    }
};

export const createPitchOffCompetition =
    (payload, resetForm, history) => async(dispatch) => {
        try {
            let fd = new FormData();
            for (let key in payload) {
                fd.append(key, payload[key]);
            }
            dispatch({
                type: FORM_SUBMITTING,
            });
            const { data } = await AXIOS({
                method: "post",
                url: APIs.CREATE_PITCH_OFF_COMPETITION,
                data: fd,
                headers: { "Content-Type": "multipart/form-data" },
            });

            dispatch({
                type: FORM_SUCCESS,
            });
            dispatch({
                type: RESET_FORM_SUBMITTING,
            });
            if (data.status) {
                resetForm();
                // toast.success(data.message);
                // history.push("/thankyou");
                window.location.replace('https://buy.stripe.com/9AQ4jK7ujarcegE147')
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            dispatch({
                type: RESET_FORM_SUBMITTING,
            });

            toast.error(err.message);
        }
    };

export const createPitchDuck =
    (payload, resetForm, history) => async(dispatch) => {
        try {
            dispatch({
                type: FORM_SUBMITTING,
            });
            const { data } = await AXIOS.post(APIs.CREATE_PITCH_DUCK, {
                ...payload,
            });
            dispatch({
                type: FORM_SUCCESS,
            });
            dispatch({
                type: RESET_FORM_SUBMITTING,
            });
            if (data.status) {
                resetForm();
                toast.success(data.message);
                history.push("/thankyou");
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            dispatch({
                type: RESET_FORM_SUBMITTING,
            });

            toast.error(err.message);
        }
    };

export const addNewsLatter = (payload, resetForm) => async(dispatch) => {
    try {
        dispatch({
            type: FORM_SUBMITTING,
        });
        const { data } = await AXIOS.post(APIs.ADD_NEWSLETTER, {...payload });
        dispatch({
            type: FORM_SUCCESS,
        });
        dispatch({
            type: RESET_FORM_SUBMITTING,
        });
        if (data.status) {
            resetForm();
            toast.success(data.message);
        } else {
            toast.error(data.message);
        }
    } catch (err) {
        dispatch({
            type: RESET_FORM_SUBMITTING,
        });

        toast.error(err.message);
    }
};