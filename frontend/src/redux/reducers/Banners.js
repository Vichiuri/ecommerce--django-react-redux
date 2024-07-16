import {
  BANNERS_LOADING,
  BANNERS_LOADED,
  BANNERS_ERROR,
  BANNERS_ADD,
  BANNERS_DELETE,
  BANNERS_EDIT,
  BANNERS_POSITION_EDIT,
} from "../Actions/types";

const initialState = {
  banners: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BANNERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case BANNERS_LOADED:
      return {
        ...state,
        isLoading: false,
        banners: action.payload.banners,
      };

    case BANNERS_ADD:
      return {
        ...state,
        isLoading: false,
        banners: [action.payload.banner, ...state.banners],
      };

    case BANNERS_EDIT:
      const bannerArray = state.banners.filter(
        (item) => item.id != action.payload.banner.id
      );
      return {
        ...state,
        isLoading: false,
        banners: [action.payload.banner, ...bannerArray],
      };

    case BANNERS_POSITION_EDIT:
      return {
        ...state,
        isLoading: false,
      };

    case BANNERS_DELETE:
      return {
        ...state,
        isLoading: false,
        banners: state.banners.filter((item) => item.id != action.payload),
      };

    case BANNERS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
