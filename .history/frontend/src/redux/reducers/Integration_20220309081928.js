import { API_LOADING, API_LOADED, TOKEN_GENERATED, INTEGRATION_ERROR } from "../Actions/types";

const initialState = {
  apiData: [],
  token: '',
  isLoading: false,
};
 
export default function (state = initialState, action) {
  switch (action.type) {
    case API_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case API_LOADED:
        return {
            ...state,
            isLoading:false,
            apiData: action.payload.apiData
        }
    case TOKEN_GENERATED:
        return {
          ...state,
          token: action.payload.token
        }    
    case INTEGRATION_ERROR:
        return {
            ...state,
            isLoading: false,
        }

    default:
      return state;
  }
}
