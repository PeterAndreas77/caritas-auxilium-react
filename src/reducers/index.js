import { combineReducers } from "redux";
import { recentCrisisReducer, singleCrisisReducer } from "./CrisisReducers";
import { donationReducer } from "./DonationReducers";
import { authReducer, userReducer } from "./UserReducers";
import reportReducer from "./ReportReducer";

const rootReducer = combineReducers({
  recentCrisisReducer,
  singleCrisisReducer,
  donationReducer,
  reportReducer,
  authReducer,
  userReducer
});

export default rootReducer;
