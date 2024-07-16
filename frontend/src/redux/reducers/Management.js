import {
  DIST_ADD,
  DIST_DELETE,
  DIST_EDIT,
  DIST_LOADED,
  GROUPS_ADD,
  GROUPS_DELETE,
  GROUPS_EDIT,
  GROUPS_ERROR,
  GROUPS_LOADED,
  GROUPS_LOADING,
} from "../Actions/types";

const initialState = {
  groups: [],
  isLoading: false,
  dist_users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GROUPS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GROUPS_LOADED:
      return {
        ...state,
        isLoading: false,
        groups: action.payload.groups,
      };

    case GROUPS_ADD:
      return {
        ...state,
        isLoading: false,
        groups: [action.payload.group, ...state.groups],
      };

    case GROUPS_EDIT:
      const group_array = state.groups.filter(
        (item) => item.id != action.payload.group.id
      );
      console.log(action.payload.group);
      return {
        ...state,
        isLoading: false,
        groups: [action.payload.group, ...group_array],
      };

    case GROUPS_DELETE:
      return {
        ...state,
        isLoading: false,
        groups: state.groups.filter((item) => item.id != action.payload),
      };

    case DIST_LOADED:
      return {
        ...state,
        isLoading: false,
        dist_users: action.payload.dist_users,
      };

    case DIST_ADD:
      return {
        ...state,
        isLoading: false,
        dist_users: [action.payload.dist_user, ...state.dist_users],
      };

    case DIST_EDIT:
      const dist_array = state.dist_users.filter(
        (item) => item.id != action.payload.dist_user.id
      );

      return {
        ...state,
        isLoading: false,
        dist_users: [action.payload.dist_user, ...dist_array],
      };

    case DIST_DELETE:
      return {
        ...state,
        isLoading: false,
        dist_users: state.dist_users.filter(
          (item) => item.id != action.payload
        ),
      };

    case GROUPS_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
