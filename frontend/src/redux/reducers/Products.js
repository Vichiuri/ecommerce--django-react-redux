import {
  PRODUCT_LOADED,
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  PRODUCT_CATEGORIES,
  PRODUCT_UNITS,
  PRODUCT_ADD,
  PRODUCT_CATEGORIES_ADD,
  PRODUCT_UNITS_ADD,
  PRODUCT_COMPOUND_UNITS,
  PRODUCT_ADD_COMPOUND_UNITS,
  PRODUCT_PRICE_LEVELS,
  PRODUCT_ADD_PRICE_LEVELS,
  PRODUCT_PRICE_LIST,
  PRODUCT_ADD_PRICE_LIST,
  PRODUCT_EDIT,
  PRODUCT_DELETE,
  PRODUCT_CATEGORIES_EDIT,
  PRODUCT_CATEGORIES_DELETE,
  PRODUCT_UNITS_UPDATE,
  PRODUCT_UNITS_DELETE,
  PRODUCT_COMPOUND_UNITS_UPDATE,
  PRODUCT_COMPOUND_UNITS_DELETE,
  PRODUCT_PRICE_LEVELS_UPDATE,
  PRODUCT_PRICE_LEVELS_DELETE,
  PRODUCT_EDIT_PRICE_LIST,
  PRODUCT_DELETE_PRICE_LIST,
  PRODUCT_VIEW_PRICE_LIST,
  PRODUCT_PAGINATION_LOADED,
  PRODUCT_BRANDS,
  PRODUCT_BRANDS_ADD,
  PRODUCT_BRANDS_UPDATE,
  PRODUCT_BRANDS_DELETE,
} from "../Actions/types";

const initialState = {
  products: [],
  products_current_page: 1,
  products_last_page: 1,
  isLoading: false,
  lastPage: 1,
  currentPage: 1,
  categories: [],
  category_current_page: 1,
  category_last_page: 1,
  units: [],
  units_current_page: 1,
  units_last_page: 1,
  c_units: [],
  price_levels: [],
  price_lists: [],
  price_current_page: 1,
  price_last_page: 1,
  product_price_list: [],
  product_price_current_page: 1,
  product_price_last_page: 1,
  product_brands: [],
  product_brand_current_page: 1,
  product_brand_last_page: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case PRODUCT_LOADED:
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
        products_current_page: action.payload.currentPage,
        products_last_page: action.payload.lastPage,
      };

    case PRODUCT_PAGINATION_LOADED:
      return {
        ...state,
        isLoading: false,
        products: [...state.products, ...action.payload.products],
        products_current_page: action.payload.currentPage,
        products_last_page: action.payload.lastPage,
      };

    case PRODUCT_ADD:
      return {
        ...state,
        isLoading: false,
        products: [action.payload.product, ...state.products],
      };

    case PRODUCT_EDIT:
      let newArray = state.products.filter(
        (item) => item.id != action.payload.product.id
      );
      let productItem = action.payload.product;

      return {
        ...state,
        isLoading: false,
        products: [productItem, ...newArray],
      };

    case PRODUCT_DELETE:
      return {
        ...state,
        isLoading: false,
        products: state.products.filter((item) => item.id != action.payload),
      };

    case PRODUCT_CATEGORIES:
      return {
        ...state,
        isLoading: false,
        categories: action.payload.categories,
        category_current_page: action.payload.currentPage,
        category_last_page: action.payload.lastPage,
      };

    case PRODUCT_CATEGORIES_ADD:
      return {
        ...state,
        isLoading: false,
        categories: [action.payload.category, ...state.categories],
      };

    case PRODUCT_CATEGORIES_EDIT:
      const categoriesArray = state.categories.filter(
        (item) => item.id != action.payload.category.id
      );

      return {
        ...state,
        isLoading: false,
        categories: [...categoriesArray, action.payload.category],
      };

    case PRODUCT_CATEGORIES_DELETE:
      return {
        ...state,
        isLoading: false,
        categories: state.categories.filter(
          (item) => item.id != action.payload
        ),
      };

    case PRODUCT_UNITS:
      return {
        ...state,
        isLoading: false,
        units: action.payload.units,
        units_current_page: action.payload.currentPage,
        units_last_page: action.payload.lastPage,
      };

    case PRODUCT_UNITS_ADD:
      return {
        ...state,
        isLoading: false,
        units: [action.payload.unit, ...state.units],
      };

    case PRODUCT_UNITS_UPDATE:
      const unitsArray = state.units.filter(
        (item) => item.id != action.payload.unit.id
      );
      return {
        ...state,
        isLoading: false,
        units: [action.payload.unit, ...unitsArray],
      };

    case PRODUCT_UNITS_DELETE:
      return {
        ...state,
        isLoading: false,
        units: state.units.filter((item) => item.id != action.payload),
      };

    case PRODUCT_COMPOUND_UNITS:
      return {
        ...state,
        isLoading: false,
        c_units: action.payload.c_units,
        c_current_page: action.payload.currentPage,
        c_last_page: action.payload.lastPage,
      };

    case PRODUCT_ADD_COMPOUND_UNITS:
      return {
        ...state,
        isLoading: false,
        c_units: [action.payload.c_unit, ...state.c_units],
      };

    case PRODUCT_COMPOUND_UNITS_UPDATE:
      let c_unitArray = state.c_units.filter(
        (item) => item.id != action.payload.c_unit.id
      );
      return {
        ...state,
        isLoading: false,
        c_units: [action.payload.c_unit, ...c_unitArray],
      };

    case PRODUCT_COMPOUND_UNITS_DELETE:
      return {
        ...state,
        isLoading: false,
        c_units: state.c_units.filter((item) => item.id != action.payload),
      };

    case PRODUCT_PRICE_LEVELS:
      return {
        ...state,
        isLoading: false,
        price_levels: action.payload.price_levels,
        levels_current_page: action.payload.currentPage,
        levels_last_page: action.payload.lastPage,
      };

    case PRODUCT_ADD_PRICE_LEVELS:
      return {
        ...state,
        isLoading: false,
        price_levels: [action.payload.price_level, ...state.price_levels],
      };

    case PRODUCT_PRICE_LEVELS_UPDATE:
      const price_levelArray = state.price_levels.filter(
        (item) => item.id != action.payload.price_level.id
      );

      return {
        ...state,
        isLoading: false,
        price_levels: [action.payload.price_level, ...price_levelArray],
      };

    case PRODUCT_PRICE_LEVELS_DELETE:
      return {
        ...state,
        isLoading: false,
        price_levels: state.price_levels.filter(
          (item) => item.id != action.payload
        ),
      };

    case PRODUCT_VIEW_PRICE_LIST:
      return {
        ...state,
        isLoading: false,
        price_lists: action.payload.price_lists,
        price_current_page: action.payload.currentPage,
        price_last_page: action.payload.lastPage,
      };

    case PRODUCT_PRICE_LIST:
      return {
        ...state,
        isLoading: false,
        product_price_list: action.payload.price_lists,
        product_price_current_page: action.payload.currentPage,
        product_price_last_page: action.payload.lastPage,
      };

    case PRODUCT_ADD_PRICE_LIST:
      return {
        ...state,
        isLoading: false,
        price_lists: [action.payload.price_list, ...state.price_lists],
      };

    case PRODUCT_EDIT_PRICE_LIST:
      const priceListArray = state.price_lists.filter(
        (item) => item.id != action.payload.price_list.id
      );
      return {
        ...state,
        isLoading: false,
        price_lists: [action.payload.price_list, ...priceListArray],
      };

    case PRODUCT_DELETE_PRICE_LIST:
      return {
        ...state,
        isLoading: false,
        price_lists: state.price_lists.filter(
          (item) => item.id != action.payload
        ),
      };

    case PRODUCT_BRANDS:
      return {
        ...state,
        isLoading: false,
        product_brands: action.payload.brands,
        product_brand_current_page: action.payload.currentPage,
        product_brand_last_page: action.payload.lastPage,
      };

    case PRODUCT_BRANDS_ADD:
      return {
        ...state,
        isLoading: false,
        product_brands: [action.payload.brand, ...state.product_brands],
      };

    case PRODUCT_BRANDS_UPDATE:
      const brands_array = state.product_brands.filter(
        (b_item) => b_item.id != action.payload.brand.id
      );
      return {
        ...state,
        isLoading: false,
        product_brands: [action.payload.brand, ...brands_array],
      };

    case PRODUCT_BRANDS_DELETE:
      return {
        ...state,
        isLoading: false,
        product_brands: state.product_brands.filter(
          (d_item) => d_item.id != action.payload
        ),
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
