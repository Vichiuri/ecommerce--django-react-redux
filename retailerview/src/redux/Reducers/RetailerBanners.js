import {
  RETAILER_BANNERS_ERROR,
  RETAILER_BANNERS_LOADED,
  RETAILER_BANNERS_LOADING,
} from "../Actions/types";

const initialState = {
  isLoading: false,
  banners: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RETAILER_BANNERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case RETAILER_BANNERS_LOADED:
      return {
        ...state,
        isLoading: false,
        banners: action.payload.banners,
      };

    case RETAILER_BANNERS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
