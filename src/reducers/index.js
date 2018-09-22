import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { recentCrisisReducer, singleCrisisReducer } from "./CrisisReducers";
import { donationReducer } from "./DonationReducers";
import { registrationReducer, loginReducer, userReducer } from "./UserReducers";
import reportReducer from "./ReportReducer";

const rootReducer = combineReducers({
  recentCrisisReducer,
  singleCrisisReducer,
  donationReducer,
  reportReducer,
  registrationReducer,
  loginReducer,
  userReducer,
  form: formReducer
});

export default rootReducer;
