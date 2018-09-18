import { combineReducers } from "redux";
import { recentCrisisReducer, singleCrisisReducer } from "./CrisisReducers";

export default combineReducers({
  recentCrisis: recentCrisisReducer,
  singleCrisis: singleCrisisReducer
});
