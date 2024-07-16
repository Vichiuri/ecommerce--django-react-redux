import {
  USER_LOADING,
  AUTH_ERRORS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOG_OUT,
  REFRESH_AUTH,
  USER_ERRORS,
  UPDATE_USER,
  GET_USER,
  UPDATE_USER_DIST_OPTIONS,
} from "../Actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: JSON.parse(localStorage.getItem("user")),
  account: JSON.parse(localStorage.getItem("account")),
  group: null,
  logo: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("account", JSON.stringify(action.payload.account));
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        account: action.payload.account,
        group: action.payload.group,
        logo: action.payload.logo,
      };
    case REFRESH_AUTH:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        isAuthenticated: true,
      };

    case UPDATE_USER:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("account", JSON.stringify(action.payload.account));
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        account: action.payload.account,
      };
    case AUTH_ERRORS:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("account");
      localStorage.removeItem("last_route");
      return {
        ...state,
        isLoading: false,
        user: null,
        token: null,
        isAuthenticated: false,
      };

    case USER_ERRORS:
      return {
        ...state,
        isLoading: false,
      };

    case GET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("account", JSON.stringify(action.payload.account));
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        account: action.payload.account,
        isAuthenticated: true,
        group: action.payload.group,
        logo: action.payload.logo,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("account", JSON.stringify(action.payload.account));
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        token: action.payload.token,
        isLoading: false,
        user: action.payload.user,
        account: action.payload.account,
        group: action.payload.group,
        logo: action.payload.logo,
      };

    case UPDATE_USER_DIST_OPTIONS:
      let v_account = state.account;
      v_account.dist_options = action.payload.dist_option;
      localStorage.setItem("account", JSON.stringify(v_account));

      return {
        ...state,
        isLoading: false,
        account: v_account,
      };

    default:
      return state;
  }
}
