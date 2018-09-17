import axios from "axios";

export const FETCH_CRISIS_BEGIN = "FETCH_CRISIS_BEGIN";
export const fetchCrisisBegin = () => ({ type: FETCH_CRISIS_BEGIN });

export const FETCH_CRISIS_SUCCESS = "FETCH_CRISIS_SUCCESS";
export const fetchCrisisSuccess = crisis => ({
  type: FETCH_CRISIS_SUCCESS,
  payload: { crisis }
});

export const FETCH_CRISIS_ERROR = "FETCH_CRISIS_ERROR";
export const fetchCrisisError = error => ({
  type: FETCH_CRISIS_ERROR,
  payload: { error }
});

export function fetchRecentCrisis() {
  return dispatch => {
    dispatch(fetchCrisisBegin());
    const request = {
      method: "get",
      url: "https://api.reliefweb.int/v1/reports?appname=caritas",
      data: { preset: "latest" }
    };
    return axios(request)
      .then(res => {
        console.log(res.data.data);
        dispatch(fetchCrisisSuccess(res.data.data));
      })
      .catch(err => dispatch(fetchCrisisError(err)));
  };
}
