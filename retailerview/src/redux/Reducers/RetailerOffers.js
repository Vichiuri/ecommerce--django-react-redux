import {
  RETAILER_OFFERS_LOADED,
  RETAILER_OFFERS_LOADING,
} from "../Actions/types";

const initialState = {
  isLoading: false,
  offers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RETAILER_OFFERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case RETAILER_OFFERS_LOADED:
      return {
        ...state,
        isLoading: false,
        offers: action.payload.offers,
      };

    default:
      return state;
  }
}
