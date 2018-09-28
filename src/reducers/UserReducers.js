import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from "../actions/UserActions";

const initialAuth = {
  authenticated: false,
  user: "",
  error: null
};

const authReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loggingIn: true, user: action.user };
    case USER_LOGIN_SUCCESS:
      return { ...state, authenticated: true, user: action.user };
    case USER_LOGIN_FAILURE:
      return { ...state, authenticated: false, error: action.error };
    case USER_REGISTER_REQUEST:
      return { ...state, loggingIn: true, user: action.user };
    case USER_REGISTER_SUCCESS:
      return { ...state, authenticated: true, user: action.user };
    case USER_REGISTER_FAILURE:
      return { ...state, authenticated: false, error: action.error };
    case USER_LOGOUT:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

const initialUser = {
  item: {},
  loading: false,
  error: null
};

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return { ...state, loading: true, error: null };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, item: action.payload.user };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case UPDATE_USER_START:
      return { ...state, loading: true, error: null };
    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false, item: action.payload.user };
    case UPDATE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export { authReducer, userReducer };
