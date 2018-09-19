import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { recentCrisisReducer, singleCrisisReducer } from "./CrisisReducers";

const rootReducer = combineReducers(
  Object.assign(
    {},
    { recentCrisis: recentCrisisReducer },
    { singleCrisis: singleCrisisReducer },
    { form: formReducer }
  )
);

export default rootReducer;
