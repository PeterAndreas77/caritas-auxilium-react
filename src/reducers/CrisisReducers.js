import {
  FETCH_CRISIS_BEGIN,
  FETCH_CRISIS_SUCCESS,
  FETCH_CRISIS_ERROR
} from "../actions/CrisisActions";

const initialState = {
  recentCrisisItems: [],
  loading: false,
  error: null
};

const crisisReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRISIS_BEGIN:
      return { ...state, loading: true, error: null };
    case FETCH_CRISIS_SUCCESS:
      return {
        ...state,
        loading: false,
        recentCrisisItems: action.payload.crisis
      };
    case FETCH_CRISIS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        recentCrisisItems: []
      };
    default:
      return state;
  }
};

export default crisisReducer;
