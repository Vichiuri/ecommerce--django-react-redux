import {
  DASHBOARD_ERROR,
  DASHBOARD_LOADED,
  DASHBOARD_LOADING,
  DASHBOARD_MAP_DATA,
  DASHBOARD_PROGRESS,
} from "../Actions/types";

const initialState = {
  dashBoardCount: null,
  dashboardProgress: null,
  view_retailers: [],
  isLoading: false,
  view_products: [],
  map_data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case DASHBOARD_LOADED:
      return {
        ...state,
        isLoading: false,
        dashBoardCount: action.payload.dashBoardCount,
        view_retailers: action.payload.view_retailers,
        view_products: action.payload.view_products,
      };

    case DASHBOARD_PROGRESS:
      return {
        ...state,
        isLoading: false,
        dashboardProgress: action.payload,
      };

    case DASHBOARD_MAP_DATA:
      return {
        ...state,
        isLoading: false,
        map_data: action.payload,
      };

    case DASHBOARD_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
