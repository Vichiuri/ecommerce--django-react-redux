import {
  OFFERS_LOADING,
  OFFERS_LOADED,
  OFFERS_ADD,
  OFFERS_ERROR,
  OFFERS_EDIT,
  OFFERS_DELETE,
} from "../Actions/types";

const initialState = {
  offers: [],
  isLoading: false,
  offers_current_page: 1,
  offers_last_page: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OFFERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case OFFERS_LOADED:
      return {
        ...state,
        isLoading: false,
        offers: action.payload.offers,
        offers_current_page: action.payload.currentPage,
        offers_last_page: action.payload.lastPage,
      };

    case OFFERS_ADD:
      return {
        ...state,
        isLoading: false,
        offers: [action.payload.price_offer, ...state.offers],
      };

    case OFFERS_EDIT:
      const newArray = state.offers.filter(
        (item) => item.id != action.payload.offer.id
      );
      return {
        ...state,
        isLoading: false,
        offers: [action.payload.offer, ...newArray],
      };

    case OFFERS_DELETE:
      return {
        ...state,
        isLoading: false,
        offers: state.offers.filter((item) => item.id != action.payload),
      };

    case OFFERS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
