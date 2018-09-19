import {
  FETCH_RECENT_CRISIS_START,
  FETCH_RECENT_CRISIS_SUCCESS,
  FETCH_RECENT_CRISIS_FAILURE,
  FETCH_SINGLE_CRISIS_START,
  FETCH_SINGLE_CRISIS_SUCCESS,
  FETCH_SINGLE_CRISIS_FAILURE
} from "../actions/CrisisActions";

const initialState = {
  recentCrisis: {
    items: [],
    loading: false,
    error: null
  },
  singleCrisis: { item: "", loading: false, error: null }
};

const recentCrisisReducer = (state = initialState.recentCrisis, action) => {
  switch (action.type) {
    case FETCH_RECENT_CRISIS_START:
      return { ...state, loading: true, error: null };
    case FETCH_RECENT_CRISIS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.crisis
      };
    case FETCH_RECENT_CRISIS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
};

const singleCrisisReducer = (state = initialState.singleCrisis, action) => {
  switch (action.type) {
    case FETCH_SINGLE_CRISIS_START:
      return { ...state, loading: true, error: null };
    case FETCH_SINGLE_CRISIS_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload.crisis
      };
    case FETCH_SINGLE_CRISIS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: ""
      };
    default:
      return state;
  }
};

export { recentCrisisReducer, singleCrisisReducer };
