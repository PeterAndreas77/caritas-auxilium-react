import axios from "axios";
import { API_URL } from "../config";

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

export function fetchDonation(username) {
  return dispatch => {
    dispatch(fetchDonationStart());
    const request = {
      method: "get",
      url: `${API_URL}donation-all/${username}`
    };
    return axios(request)
      .then(res => dispatch(fetchDonationSuccess(res.data)))
      .catch(err => dispatch(fetchDonationFailure(err)));
  };
}

export function searchDonation(username, term) {
  return dispatch => {
    dispatch(fetchDonationStart());
    const request = {
      method: "get",
      url: `${API_URL}donation/search/${username}/${term}`
    };
    return axios(request)
      .then(res => {
        console.log(res.data);
        dispatch(fetchDonationSuccess(res.data));
      })
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

export const CREATE_DONATION_FAILURE = "CREATE_DONATION_FAILURE";
export const createDonationFailure = error => ({
  type: CREATE_DONATION_FAILURE,
  payload: { error }
});

export function createDonation(newObject) {
  return dispatch => {
    dispatch(createDonationStart());
    const request = {
      method: "post",
      url: `${API_URL}donation/create`,
      data: newObject
    };
    return axios(request)
      .then(res => dispatch(createDonationSuccess(res.data)))
      .catch(err => dispatch(createDonationFailure(err)));
  };
}

export const UPDATE_DONATION_START = "UPDATE_DONATION_START";
export const updateDonationStart = () => ({
  type: UPDATE_DONATION_START
});

export const UPDATE_DONATION_SUCCESS = "UPDATE_DONATION_SUCCESS";
export const updateDonationSuccess = donation => ({
  type: UPDATE_DONATION_SUCCESS,
  payload: { donation }
});

export const UPDATE_DONATION_FAILURE = "UPDATE_DONATION_FAILURE";
export const updateDonationFailure = error => ({
  type: UPDATE_DONATION_FAILURE,
  payload: { error }
});

export function updateDonation(updateObject, id) {
  return dispatch => {
    dispatch(updateDonationStart());
    const request = {
      method: "put",
      url: `${API_URL}donation/update/${id}`,
      data: updateObject
    };
    return axios(request)
      .then(res => dispatch(updateDonationSuccess(res.data)))
      .catch(err => dispatch(updateDonationFailure(err)));
  };
}

export const DELETE_DONATION_START = "DELETE_DONATION_START";
export const deleteDonationStart = () => ({
  type: DELETE_DONATION_START
});

export const DELETE_DONATION_SUCCESS = "DELETE_DONATION_SUCCESS";
export const deleteDonationSuccess = id => ({
  type: DELETE_DONATION_SUCCESS,
  payload: { id }
});

export const DELETE_DONATION_FAILURE = "DELETE_DONATION_FAILURE";
export const deleteDonationFailure = error => ({
  type: DELETE_DONATION_FAILURE,
  payload: { error }
});

export function deleteDonation(id) {
  return dispatch => {
    dispatch(deleteDonationStart());
    const request = {
      method: "delete",
      url: `${API_URL}donation/delete/${id}`
    };
    return axios(request)
      .then(() => dispatch(deleteDonationSuccess(id)))
      .catch(err => dispatch(deleteDonationFailure(err)));
  };
}
