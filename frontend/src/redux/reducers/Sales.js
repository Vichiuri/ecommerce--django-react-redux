import {
  SALES_ADD,
  SALES_ADD_TARGET_LOADED,
  SALES_DELETE,
  SALES_DELETE_TARGET,
  SALES_EDIT,
  SALES_EDIT_TARGET,
  SALES_ERROR,
  SALES_LOADED,
  SALES_LOADING,
  SALES_TARGET_LOADED,
} from "../Actions/types";

const initialState = {
  sales_people: [],
  sales_current_page: 1,
  sales_last_page: 1,
  sales_target: [],
  target_current_page: 1,
  target_last_page: 1,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SALES_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case SALES_LOADED:
      return {
        ...state,
        isLoading: false,
        sales_people: action.payload.sales_people,
        sales_current_page: action.payload.currentPage,
        sales_last_page: action.payload.lastPage,
      };

    case SALES_ADD:
      return {
        ...state,
        isLoading: false,
        sales_people: [action.payload.sale_person, ...state.sales_people],
      };

    case SALES_EDIT:
      let newArray = state.sales_people.filter(
        (item) => item.id != action.payload.sale_person.id
      );
      let saleItem = action.payload.sale_person;

      return {
        ...state,
        isLoading: false,
        sales_people: [saleItem, ...newArray],
      };

    case SALES_DELETE:
      return {
        ...state,
        isLoading: false,
        sales_people: state.sales_people.filter(
          (item) => item.id != action.payload
        ),
      };

    case SALES_TARGET_LOADED:
      return {
        ...state,
        isLoading: false,
        sales_target: action.payload.sales_target,
        target_current_page: action.payload.currentPage,
        target_last_page: action.payload.lastPage,
      };

    case SALES_ADD_TARGET_LOADED:
      return {
        ...state,
        isLoading: false,
        sales_target: [action.payload.sale_target, ...state.sales_target],
      };

    case SALES_EDIT_TARGET:
      let viewArray = state.sales_target.filter(
        (item) => item.id != action.payload.sale_target.id
      );
      const targetItem = action.payload.sale_target;

      return {
        ...state,
        isLoading: false,
        sales_target: [targetItem, ...viewArray],
      };

    case SALES_DELETE_TARGET:
      return {
        ...state,
        isLoading: false,
        sales_target: state.sales_target.filter(
          (item) => item.id != action.payload
        ),
      };

    case SALES_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
