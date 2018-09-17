import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import crisisReducer from "./reducers/CrisisReducers";

export default createStore(crisisReducer, applyMiddleware(thunk));
