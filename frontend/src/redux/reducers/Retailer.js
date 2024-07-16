import {
  RETAILER_LOADING,
  RETAILER_LOADED,
  RETAILER_ERROR,
  RETAILER_ADD,
  RETAILER_LOCATION_LOADED,
  RETAILER_LOCATION_ADD,
  RETAILER_AREA_ADD,
  RETAILER_AREA_LOADED,
  RETAILER_CITIES,
  RETAILER_EDIT,
  RETAILER_DELETE,
  RETAILER_LOCATION_EDIT,
  RETAILER_LOCATION_DELETE,
  RETAILER_CITY_ADD,
  RETAILER_CITY_EDIT,
  RETAILER_CITY_DELETE,
  RETAILER_AREA_EDIT,
  RETAILER_AREA_DELETE,
} from "../Actions/types";

const initialState = {
  retailers: [],
  retailer_regions: [],
  areas: [],
  cities: [],
  isLoading: false,
  retailer_current_page: 1,
  retailer_last_page: 1,
  region_current_page: 1,
  region_last_page: 1,
  area_current_page: 1,
  area_last_page: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RETAILER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case RETAILER_LOADED:
      return {
        ...state,
        isLoading: false,
        retailers: action.payload.retailers,
        retailer_current_page: action.payload.region_current_page,
        retailer_last_page: action.payload.region_last_page,
      };

    case RETAILER_ADD:
      const add_retailer_array = state.retailers.filter(
        (a_item) => a_item.id != action.payload.retailer.id
      );
      return {
        ...state,
        isLoading: false,
        retailers: [action.payload.retailer, ...add_retailer_array],
      };

    case RETAILER_EDIT:
      let newArray = state.retailers.filter(
        (item) => item.id != action.payload.retailer.id
      );
      let viewRetailer = action.payload.retailer;

      return {
        ...state,
        isLoading: false,
        retailers: [viewRetailer, ...newArray],
      };

    case RETAILER_DELETE:
      return {
        ...state,
        isLoading: false,
        retailers: state.retailers.filter(
          (viewRetailer) => viewRetailer.id != action.payload
        ),
      };

    case RETAILER_LOCATION_LOADED:
      return {
        ...state,
        isLoading: false,
        retailer_regions: action.payload.retailer_regions,
        region_current_page: action.payload.region_current_page,
        region_last_page: action.payload.region_last_page,
      };

    case RETAILER_LOCATION_ADD:
      return {
        ...state,
        isLoading: false,
        retailer_regions: [
          action.payload.retailer_region,
          ...state.retailer_regions,
        ],
      };

    case RETAILER_LOCATION_EDIT:
      const locations_array = state.retailer_regions.filter(
        (item) => item.id != action.payload.retailer_region.id
      );

      return {
        ...state,
        isLoading: false,
        retailer_regions: [action.payload.retailer_region, ...locations_array],
      };

    case RETAILER_LOCATION_DELETE:
      return {
        ...state,
        isLoading: false,
        retailer_regions: state.retailer_regions.filter(
          (item) => item.id != action.payload
        ),
      };

    case RETAILER_AREA_LOADED:
      return {
        ...state,
        isLoading: false,
        areas: action.payload.areas,
        area_current_page: action.payload.currentPage,
        area_last_page: action.payload.lastPage,
      };

    case RETAILER_AREA_ADD:
      return {
        ...state,
        isLoading: false,
        areas: [action.payload.area, ...state.areas],
      };

    case RETAILER_AREA_EDIT:
      const area_array = state.areas.filter(
        (item) => item.id != action.payload.area.id
      );

      return {
        ...state,
        isLoading: false,
        areas: [action.payload.area, ...area_array],
      };

    case RETAILER_AREA_DELETE:
      return {
        ...state,
        isLoading: false,
        areas: state.areas.filter((item) => item.id != action.payload),
      };

    case RETAILER_CITIES:
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case RETAILER_CITY_ADD:
      const regions_array = state.retailer_regions.map((item) => {
        let viewItem = item;
        if (viewItem.id == action.payload.region_id) {
          viewItem.region_cities.push(action.payload.dist_city);
        }
        return viewItem;
      });
      return {
        ...state,
        isLoading: false,
        retailer_regions: regions_array,
      };

    case RETAILER_CITY_EDIT:
      const regions_edit_array = state.retailer_regions.map((item) => {
        let viewItem = item;
        if (viewItem.id == action.payload.region_id) {
          let regionsArray = viewItem.region_cities.filter(
            (item) => item.id != action.payload.dist_city.id
          );
          regionsArray.push(action.payload.dist_city);
          viewItem.region_cities = regionsArray;
        }
        return viewItem;
      });
      return {
        ...state,
        isLoading: false,
        retailer_regions: regions_edit_array,
      };

    case RETAILER_CITY_DELETE:
      const regions_delete_array = state.retailer_regions.map((item) => {
        let viewItem = item;
        if (viewItem.id == action.payload.region_id) {
          viewItem.region_cities = viewItem.region_cities.filter(
            (item) => item.id != action.payload.id
          );
        }
        return viewItem;
      });
      return {
        ...state,
        isLoading: false,
        retailer_regions: regions_delete_array,
      };

    case RETAILER_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
