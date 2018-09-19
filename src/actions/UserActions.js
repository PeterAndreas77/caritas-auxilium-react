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
      .then(user => dispatch(userRegisterSuccess(user)))
      .catch(err => dispatch(userRegisterFailure(err)));
  };
}

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const userLoginRequest = user => ({ type: USER_LOGIN_REQUEST, user });

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const userLoginSuccess = user => ({ type: USER_LOGIN_REQUEST, user });

export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const userLoginFailure = error => ({ type: USER_LOGIN_FAILURE, error });

export const USER_LOGOUT = "USER_LOGOUT";
export const userLogout = () => ({ type: USER_LOGOUT });
