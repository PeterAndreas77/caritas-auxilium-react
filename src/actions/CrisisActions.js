import axios from "axios";

export const FETCH_RECENT_CRISIS_START = "FETCH_RECENT_CRISIS_START";
export const fetchRecentCrisisStart = () => ({
  type: FETCH_RECENT_CRISIS_START
});

export const FETCH_RECENT_CRISIS_SUCCESS = "FETCH_RECENT_CRISIS_SUCCESS";
export const fetchRecentCrisisSuccess = crisis => ({
  type: FETCH_RECENT_CRISIS_SUCCESS,
  payload: { crisis }
});

export const FETCH_RECENT_CRISIS_FAILURE = "FETCH_RECENT_CRISIS_FAILURE";
export const fetchRecentCrisisFailure = error => ({
  type: FETCH_RECENT_CRISIS_FAILURE,
  payload: { error }
});

export function fetchRecentCrisis() {
  return dispatch => {
    dispatch(fetchRecentCrisisStart());
    const request = {
      method: "get",
      url: "https://api.reliefweb.int/v1/reports?appname=caritas",
      data: { preset: "latest" }
    };
    return axios(request)
      .then(res => dispatch(fetchRecentCrisisSuccess(res.data.data)))
      .catch(err => dispatch(fetchRecentCrisisFailure(err)));
  };
}

export function searchRecentCrisis(term) {
  return dispatch => {
    dispatch(fetchRecentCrisisStart());
    const request = {
      method: "post",
      url: `https://api.reliefweb.int/v1/reports?appname=caritas`,
      data: { query: { value: term }, preset: "latest" }
    };
    return axios(request)
      .then(res => dispatch(fetchRecentCrisisSuccess(res.data.data)))
      .catch(err => dispatch(fetchRecentCrisisFailure(err)));
  };
}

export const FETCH_SINGLE_CRISIS_START = "FETCH_SINGLE_CRISIS_START";
export const fetchSingleCrisisStart = () => ({
  type: FETCH_SINGLE_CRISIS_START
});

export const FETCH_SINGLE_CRISIS_SUCCESS = "FETCH_SINGLE_CRISIS_SUCCESS";
export const fetchSingleCrisisSuccess = crisis => ({
  type: FETCH_SINGLE_CRISIS_SUCCESS,
  payload: { crisis }
});

export const FETCH_SINGLE_CRISIS_FAILURE = "FETCH_SINGLE_CRISIS_FAILURE";
export const fetchSingleCrisisFailure = error => ({
  type: FETCH_SINGLE_CRISIS_FAILURE,
  payload: { error }
});

export function fetchSingleCrisis(id) {
  return dispatch => {
    dispatch(fetchSingleCrisisStart());
    const url = `https://api.reliefweb.int/v1/reports/${id}`;
    return axios
      .get(url)
      .then(res => {
        console.log(res.data);
        dispatch(fetchSingleCrisisSuccess(res.data));
      })
      .catch(err => dispatch(fetchSingleCrisisFailure(err)));
  };
}
