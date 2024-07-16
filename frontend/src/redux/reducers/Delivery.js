import {
  DELIVERY_LOADING,
  DELIVERY_LOADED,
  DELIVERY_ERROR,
  DELIVERY_ADD,
  PARTIAL_DELIVERY_LOADED,
  PARTIAL_DELIVERY_ADD,
} from "../Actions/types";

const initialState = {
  deliveries: [],
  partial_deliveries: [],
  partial_current_page: 1,
  partial_last_page: 1,
  isLoading: false,
  currentPage: 1,
  lastPage: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DELIVERY_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case DELIVERY_LOADED:
      return {
        ...state,
        isLoading: false,
        deliveries: action.payload.deliveries,
        currentPage: action.payload.currentPage,
        lastPage: action.payload.lastPage,
      };

    case DELIVERY_ADD:
      return {
        ...state,
        isLoading: false,
      };

    case PARTIAL_DELIVERY_LOADED:
      return {
        ...state,
        isLoading: false,
        partial_deliveries: action.payload.deliveries,
        partial_current_page: action.payload.currentPage,
        partial_last_page: action.payload.lastPage,
      };

    case PARTIAL_DELIVERY_ADD:
      return {
        ...state,
        isLoading: false,
        partial_deliveries: [
          action.payload.delivery,
          ...state.partial_deliveries,
        ],
      };

    case DELIVERY_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
