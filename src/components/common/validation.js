import * as Yup from "yup";
export const contactValidation = Yup.object().shape({
    email: Yup.string()
        .email("please enter valid email address")
        .required("email field is required")
        .label("email"),
    full_name: Yup.string().required().label("name"),
    phone: Yup.string().required().label("phone"),
    message: Yup.string().required().label("message"),
});

export const newsletterValidation = Yup.object().shape({
    email: Yup.string()
        .email("please enter valid email address")
        .required("email field is required")
        .label("email"),
});

export const createPartnerLeadValidation = Yup.object().shape({
    full_name: Yup.string().required().label("name"),
    email: Yup.string()
        .email("please enter valid email address")
        .required("email field is required")
        .label("email"),
    company_name: Yup.string().required().label("company"),
    phone_no: Yup.string().required().label("phone"),
    info: Yup.string().required().label("info"),
});

export const createPitchOffCompetitionValidation = Yup.object().shape({
    first_name: Yup.string().required().label("first name"),
    last_name: Yup.string().required().label("last name"),
    email: Yup.string()
        .email("please enter valid email address")
        .required("email field is required")
        .label("email"),
    industry: Yup.string().required().label("industry"),
    website: Yup.string().required().label("website"),
    phone_no: Yup.string().required().label("phone"),
    summary: Yup.string().required().label("summary"),
    image: Yup.string().required().label("file"),
});

export const createPitchDuckValidation = Yup.object().shape({
    full_name: Yup.string().required().label("name"),
    email: Yup.string()
        .email("please enter valid email address")
        .required("email field is required")
        .label("email"),
    // company_name: Yup.string().required().label("company"),
    phone_no: Yup.string().required().label("phone"),
});