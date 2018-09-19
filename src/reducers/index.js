import { combineReducers } from "redux";
import { recentCrisisReducer, singleCrisisReducer } from "./CrisisReducers";

const rootReducer = combineReducers(
  Object.assign(
    {},
    { recentCrisis: recentCrisisReducer },
    { singleCrisis: singleCrisisReducer }
  )
);
export default rootReducer;
