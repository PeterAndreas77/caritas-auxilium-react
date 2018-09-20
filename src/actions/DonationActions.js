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
