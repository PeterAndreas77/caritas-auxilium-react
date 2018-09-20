import axios from "axios";

export const FETCH_DONATION_START = "FETCH_DONATION_START";
export const fetchDonationStart = () => ({
  type: FETCH_DONATION_START
});

export const FETCH_DONATION_SUCCESS = "FETCH_DONATION_SUCCESS";
export const fetchDonationSuccess = donation => ({
  type: FETCH_DONATION_SUCCESS,
  payload: { donation }
});

export const FETCH_DONATION_FAILURE = "FETCH_DONATION_FAILURE";
export const fetchDonationFailure = error => ({
  type: FETCH_DONATION_FAILURE,
  payload: { error }
});

export function fetchDonation() {
  return dispatch => {
    dispatch(fetchDonationStart());
    // changethis
    const username = "jojo";
    const request = {
      method: "get",
      url: `http://localhost:3000/donation-all/${username}`
    };
    return axios(request)
      .then(res => {
        console.log(res.data);
        dispatch(fetchDonationSuccess(res.data));
      })
      .catch(err => dispatch(fetchDonationFailure(err)));
  };
}

export function searchDonation(term) {
  return dispatch => {
    dispatch(fetchDonationStart());
    // changethis
    const username = "jojo";
    const request = {
      method: "get",
      url: `http://localhost:3000/donation/search/${username}/${term}`
    };
    return axios(request)
      .then(res => dispatch(fetchDonationSuccess(res.data)))
      .catch(err => dispatch(fetchDonationFailure(err)));
  };
}

export const CREATE_DONATION_START = "CREATE_DONATION_START";
export const createDonationStart = () => ({
  type: CREATE_DONATION_START
});

export const CREATE_DONATION_SUCCESS = "CREATE_DONATION_SUCCESS";
export const createDonationSuccess = donation => ({
  type: CREATE_DONATION_SUCCESS,
  payload: { donation }
});

export const CREATE_DONATION_FAILURE = "FETCH_DONATION_FAILURE";
export const createDonationFailure = error => ({
  type: CREATE_DONATION_FAILURE,
  payload: { error }
});

export function createDonation(newObject) {
  return dispatch => {
    dispatch(createDonationStart());
    const request = {
      method: "post",
      url: `http://localhost:3000/donation/create`,
      data: newObject
    };
    return axios(request)
      .then(res => dispatch(createDonationSuccess(res.data)))
      .catch(err => dispatch(createDonationFailure(err)));
  };
}
