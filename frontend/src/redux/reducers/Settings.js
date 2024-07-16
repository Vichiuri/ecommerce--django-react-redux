import {
  CITIES_LOADED,
  COUNTRIES_LOADED,
  DIST_OPTIONS_SETTINGS,
  EMAIL_SETTINGS_LOADED,
  SETTINGS_EDIT,
  SETTINGS_ERROR,
  SETTINGS_LOADED,
  SETTINGS_LOADING,
} from "../Actions/types";

const initialState = {
  distributor: {},
  email_settings: {},
  dist_settings: {},
  countries: [],
  cities: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SETTINGS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case SETTINGS_LOADED:
      return {
        ...state,
        isLoading: false,
        distributor: action.payload.distributor,
      };

    case SETTINGS_EDIT:
      return {
        ...state,
        isLoading: false,
        distributor: action.payload.distributor,
      };

    case COUNTRIES_LOADED:
      return {
        ...state,
        isLoading: false,
        countries: action.payload.countries,
      };

    case CITIES_LOADED:
      return {
        ...state,
        isLoading: false,
        cities: action.payload.cities,
      };

    case EMAIL_SETTINGS_LOADED:
      return {
        ...state,
        isLoading: false,
        email_settings: action.payload.email_settings,
      };

    case DIST_OPTIONS_SETTINGS:
      return {
        ...state,
        isLoading: false,
        dist_settings: action.payload.dist_option,
      };

    case SETTINGS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
