import {
  USER_LOADING,
  AUTH_ERRORS,
  USER_LOADED,
  LOGIN_SUCCESS,
  REFRESH_AUTH,
  USER_ERRORS,
  UPDATE_USER,
  GET_USER,
} from "../Actions/types";

const initialState = {
  token: localStorage.getItem("retail_token"),
  isAuthenticated: null,
  isLoading: false,
  user: JSON.parse(localStorage.getItem("retail_user")),
  account: JSON.parse(localStorage.getItem("retailer_account")),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      localStorage.setItem("retail_user", JSON.stringify(action.payload.user));
      localStorage.setItem(
        "retailer_account",
        JSON.stringify(action.payload.account)
      );
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        account: action.payload.account,
      };
    case REFRESH_AUTH:
      localStorage.setItem("retail_token", action.payload.token);
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        isAuthenticated: true,
      };

    case UPDATE_USER:
      localStorage.setItem("retail_user", JSON.stringify(action.payload.user));
      localStorage.setItem(
        "retailer_account",
        JSON.stringify(action.payload.account)
      );
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        account: action.payload.account,
      };
    case AUTH_ERRORS:
      localStorage.removeItem("retail_token");
      localStorage.removeItem("retail_user");
      localStorage.removeItem("retailer_account");
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
      localStorage.setItem("retail_user", JSON.stringify(action.payload.user));
      localStorage.setItem(
        "retailer_account",
        JSON.stringify(action.payload.account)
      );
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        account: action.payload.account,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("retail_token", action.payload.token);
      localStorage.setItem("retail_user", JSON.stringify(action.payload.user));
      localStorage.setItem(
        "retailer_account",
        JSON.stringify(action.payload.account)
      );
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        token: action.payload.token,
        isLoading: false,
        user: action.payload.user,
        account: action.payload.account,
      };

    default:
      return state;
  }
}
