import {
  FETCH_REPORT_START,
  FETCH_REPORT_SUCCESS,
  FETCH_REPORT_FAILURE
} from "../actions/ReportActions";

const initialReport = {
  item: [],
  loading: false,
  error: null
};

const reportReducer = (state = initialReport, action) => {
  switch (action.type) {
    case FETCH_REPORT_START:
      return { ...state, loading: true, error: null };
    case FETCH_REPORT_SUCCESS:
      return { ...state, loading: false, item: action.payload.report };
    case FETCH_REPORT_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default reportReducer;
