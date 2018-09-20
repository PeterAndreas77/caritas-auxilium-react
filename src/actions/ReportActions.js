import axios from "axios";

export const FETCH_REPORT_START = "FETCH_REPORT_START";
export const fetchReportStart = () => ({
  type: FETCH_REPORT_START
});

export const FETCH_REPORT_SUCCESS = "FETCH_REPORT_SUCCESS";
export const fetchReportSuccess = report => ({
  type: FETCH_REPORT_SUCCESS,
  payload: { report }
});

export const FETCH_REPORT_FAILURE = "FETCH_REPORT_FAILURE";
export const fetchReportFailure = error => ({
  type: FETCH_REPORT_FAILURE,
  payload: { error }
});

export default function fetchReport(year) {
  return dispatch => {
    dispatch(fetchReportStart());
    // changethis
    const username = "jojo";
    const request = {
      method: "get",
      url: `http://localhost:8000/report/${username}/${year}`
    };
    return axios(request)
      .then(res => dispatch(fetchReportSuccess(res.data)))
      .catch(err => dispatch(fetchReportFailure(err)));
  };
}
