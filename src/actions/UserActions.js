import axios from "axios";
import { API_URL } from "../config";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const userRegisterRequest = user => ({
  type: USER_REGISTER_REQUEST,
  user
});

export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const userRegisterSuccess = user => ({
  type: USER_REGISTER_SUCCESS,
  user
});

export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE";
export const userRegisterFailure = error => ({
  type: USER_REGISTER_FAILURE,
  error
});

export function userRegister(user) {
  return dispatch => {
    dispatch(userRegisterRequest(user));
    const userRequest = {
      url: `${API_URL}/users/register`,
      method: "post",
      data: user
    };
    return axios(userRequest)
      .then(user => {
        dispatch(userRegisterSuccess(user));
        localStorage.setItem("loggedInUser", user.data.username);
      })
      .catch(err => dispatch(userRegisterFailure(err)));
  };
}

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const userLoginRequest = user => ({ type: USER_LOGIN_REQUEST, user });

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const userLoginSuccess = user => ({ type: USER_LOGIN_SUCCESS, user });

export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const userLoginFailure = error => ({ type: USER_LOGIN_FAILURE, error });

export const USER_LOGOUT = "USER_LOGOUT";
export const userLogout = () => ({ type: USER_LOGOUT });

export function userLogin(user) {
  return dispatch => {
    dispatch(userLoginRequest(user));
    const userRequest = {
      url: `${API_URL}/users/login`,
      method: "post",
      data: user
    };
    return axios(userRequest)
      .then(user => {
        dispatch(userLoginSuccess(user));
        localStorage.setItem("loggedInUser", user.data.username);
      })
      .catch(err => dispatch(userLoginFailure(err)));
  };
}

export function logout() {
  return dispatch => {
    dispatch(userLogout());
    localStorage.removeItem("loggedInUser");
  };
}

export const FETCH_USER_START = "FETCH_USER_START";
export const fetchUserStart = () => ({
  type: FETCH_USER_START
});

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: { user }
});

export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: { error }
});

export function fetchUser(username) {
  return dispatch => {
    dispatch(fetchUserStart());
    const request = {
      method: "get",
      url: `${API_URL}/users/${username}`
    };
    return axios(request)
      .then(res => dispatch(fetchUserSuccess(res.data)))
      .catch(err => dispatch(fetchUserFailure(err)));
  };
}

export const UPDATE_USER_START = "UPDATE_USER_START";
export const updateUserStart = () => ({
  type: UPDATE_USER_START
});

export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const updateUserSuccess = user => ({
  type: UPDATE_USER_SUCCESS,
  payload: { user }
});

export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
export const updateUserFailure = error => ({
  type: UPDATE_USER_FAILURE,
  payload: { error }
});

export function updateUser(username, updateObject) {
  return dispatch => {
    dispatch(updateUserStart());
    const request = {
      method: "put",
      url: `${API_URL}/users/update/${username}`,
      data: updateObject
    };
    return axios(request)
      .then(res => dispatch(updateUserSuccess(res.data)))
      .catch(err => dispatch(updateUserFailure(err)));
  };
}
