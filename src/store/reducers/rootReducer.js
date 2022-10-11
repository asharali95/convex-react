import { combineReducers } from "redux";
import authReducer, { loaderReducer, formReducer } from "./authReducer";
import blogReducer, { homeReducer } from "./blogReducer";
import eventReducer from "./eventReducer";
import partnershipReducer from "./partnershipReducer";
import portfolioReducer from "./portfolioReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  form: formReducer,
  blog: blogReducer,
  portfolio: portfolioReducer,
  event: eventReducer,
  partnership: partnershipReducer,
  home: homeReducer,
});

export default rootReducer;
