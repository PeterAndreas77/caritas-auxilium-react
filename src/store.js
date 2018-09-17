import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import crisisReducer from "./reducers/CrisisReducers";

export default createStore(
  crisisReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
