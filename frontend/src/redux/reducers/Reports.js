import {
  ORDER_REPORTS_ERROR,
  ORDER_REPORTS_LOADED,
  ORDER_REPORTS_LOADING,
  PRODUCT_REPORTS_LOADED,
  RETAILER_REPORTS_LOADED,
  SALES_TARGET_INDIVIDUAL_LOADED,
  SALES_TARGET_REPORT_LOADED,
} from "../Actions/types";

const initialState = {
  order_reports: [],
  retailer_reports: [],
  product_reports: [],
  sales_target_report: [],
  sales_men_reports: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ORDER_REPORTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ORDER_REPORTS_LOADED:
      return {
        ...state,
        isLoading: false,
        order_reports: action.payload,
      };

    case RETAILER_REPORTS_LOADED:
      return {
        ...state,
        isLoading: false,
        retailer_reports: action.payload,
      };

    case PRODUCT_REPORTS_LOADED:
      return {
        ...state,
        isLoading: false,
        product_reports: action.payload,
      };

    case SALES_TARGET_REPORT_LOADED:
      return {
        ...state,
        isLoading: false,
        sales_target_report: action.payload.sales_report,
      };

    case SALES_TARGET_INDIVIDUAL_LOADED:
      return {
        ...state,
        isLoading: false,
        sales_men_reports: action.payload.sales_people_report,
      };

    case ORDER_REPORTS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
