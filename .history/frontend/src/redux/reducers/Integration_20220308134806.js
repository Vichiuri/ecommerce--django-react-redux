import { API_LOADING, API_LOADED, INTEGRATION_ERROR } from "../Actions/types";

const initialState = {
  apiData: [],
  isLoading: false,
};

/**
 * @param {{ type: any; payload: { apiData: any; }; }} action
 */
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
    case INTEGRATION_ERROR:
        return {
            ...state,
            isLoading: false,
        }
              
    default:
      return state;
  }
}
