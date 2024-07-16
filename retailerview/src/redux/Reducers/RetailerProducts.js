import {
  RETAILER_CATEGORIES_LOADED,
  RETAILER_NEW_ARRIVALS,
  RETAILER_PRODUCTS_ERROR,
  RETAILER_PRODUCTS_LOADED,
  RETAILER_PRODUCTS_LOADING,
} from "../Actions/types";

const initialState = {
  isLoading: false,
  products: [],
  categories: [],
  new_arrivals: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RETAILER_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case RETAILER_CATEGORIES_LOADED:
      return {
        ...state,
        isLoading: false,
        categories: action.payload.categories,
      };

    case RETAILER_PRODUCTS_LOADED:
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
      };

    case RETAILER_NEW_ARRIVALS:
      return {
        ...state,
        isLoading: false,
        new_arrivals: action.payload.products,
      };

    case RETAILER_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
