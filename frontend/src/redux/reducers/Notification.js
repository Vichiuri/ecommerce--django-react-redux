import {
  NOTIFICATION_LOADED,
  NOTIFICATION_LOADING,
  NOTIFICATION_ADD,
  NOTIFICATION_DELETE,
  NOTIFICATION_EDIT,
  NOTIFICATION_ERROR,
  DIST_NOTIFICATION_LOADED,
  DIST_VIEW_NOTIFICATION,
  DIST_NOTIFICATION_ADDED,
} from "../Actions/types";

const initialState = {
  notifications: [],
  current_page: 1,
  last_page: 1,
  dist_notifications: [],
  dist_current_page: 1,
  dist_last_page: 1,
  view_notification: null,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case NOTIFICATION_LOADED:
      return {
        ...state,
        isLoading: false,
        notifications: action.payload.notifications,
        current_page: action.payload.currentPage,
        last_page: action.payload.lastPage,
      };

    case NOTIFICATION_ADD:
      return {
        ...state,
        isLoading: false,
        notifications: [action.payload.notification, ...state.notifications],
      };

    case NOTIFICATION_EDIT:
      const notificationArray = state.notifications.filter(
        (item) => item.id != action.payload.notification.id
      );
      return {
        ...state,
        isLoading: false,
        notifications: [action.payload.notification, ...notificationArray],
      };

    case NOTIFICATION_DELETE:
      return {
        ...state,
        isLoading: false,
        notifications: state.notifications.filter(
          (item) => item.id != action.payload
        ),
      };

    case DIST_NOTIFICATION_LOADED:
      return {
        ...state,
        isLoading: false,
        dist_notifications: action.payload.notifications,
        dist_current_page: action.payload.currentPage,
        dist_last_page: action.payload.lastPage,
      };

    case DIST_NOTIFICATION_ADDED:
      return {
        ...state,
        isLoading: false,
        dist_notifications: [action.payload, ...state.dist_notifications],
      };

    case DIST_VIEW_NOTIFICATION:
      const v_notifications = state.dist_notifications.map((n_item) => {
        let view_item = n_item;
        if (view_item.id == action.payload.notification.id) {
          view_item = action.payload.notification;
        }
        return view_item;
      });
      return {
        ...state,
        isLoading: false,
        dist_notifications: v_notifications,
        view_notification: action.payload.notification,
      };

    case NOTIFICATION_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
