import {
  ORDER_ADD,
  ORDER_ADD_PLACED,
  ORDER_DELETE,
  ORDER_DISPATCHED,
  ORDER_EDIT,
  ORDER_ERROR,
  ORDER_LOADED,
  ORDER_LOADING,
  ORDER_PLACED,
  ORDER_PLACED_DELETE,
  ORDER_PLACED_EDIT,
  ORDER_UPDATE_STATUS,
  ORDER_LOGS,
  ORDER_ITEM_LOADED,
  ORDER_PARTIAL_DISPATCHED,
  ORDER_RET_DIST,
  ORDER_EDIT_RET_DIST,
  ORDER_UPDATE_RET_DIST,
  ORDER_DELETE_RET_DIST,
  ORDER_ADD_RET_DIST,
  ORDER_DISPATCH_RET_ORDER,
} from "../Actions/types";

const initialState = {
  orders: [],
  orders_current_page: 1,
  orders_last_Page: 1,
  place_orders: [],
  edit_placed_orders: [],
  order_logs: [],
  ret_order: null,
  isLoading: false,
  currentPage: 1,
  lastPage: 1,
  place_current_page: 1,
  place_last_page: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ORDER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ORDER_LOADED:
      return {
        ...state,
        isLoading: false,
        orders: action.payload.orders,
        orders_current_page: action.payload.currentPage,
        orders_last_Page: action.payload.lastPage,
      };

    case ORDER_ITEM_LOADED:
      return {
        ...state,
        isLoading: false,
        ret_order: action.payload.order,
      };

    case ORDER_ADD:
      return {
        ...state,
        isLoading: false,
        orders: [action.payload.order, ...state.orders],
      };

    case ORDER_EDIT:
      let newArray = state.orders.filter(
        (item) => item.id != action.payload.order.id
      );
      let orderItem = action.payload.order;
      return {
        ...status,
        isLoading: false,
        orders: [orderItem, ...newArray],
        place_orders: state.place_orders,
      };

    case ORDER_UPDATE_STATUS:
      return {
        ...status,
        isLoading: false,
        orders: state.orders.filter(
          (item) => item.id != action.payload.order.id
        ),
      };

    case ORDER_DISPATCHED:
      return {
        ...state,
        isLoading: false,
        orders: state.orders.filter((item) => item.id != action.payload),
      };

    case ORDER_PARTIAL_DISPATCHED:
      const partial_array = state.orders.filter(
        (item) => item.id != action.payload.order.id
      );
      return {
        ...state,
        isLoading: false,
        orders: [action.payload.order, ...partial_array],
      };

    case ORDER_DELETE:
      return {
        ...state,
        isLoading: false,
        orders: state.orders.filter((v_order) => v_order.id != action.payload),
      };

    case ORDER_PLACED:
      return {
        ...state,
        isLoading: false,
        place_orders: action.payload.place_orders,
        place_current_page: action.payload.currentPage,
        place_last_page: action.payload.lastPage,
      };

    case ORDER_RET_DIST:
      let view_ret_order = state.orders.map((ret_item) => {
        let view_ret_item = ret_item;
        if (view_ret_item.id == action.payload.id) {
          view_ret_item.dist_orders = action.payload.dist_orders;
          view_ret_item.dist_orders_last_page = action.payload.lastPage;
          view_ret_item.dist_orders_current_page = action.payload.currentPage;
        }
        return view_ret_item;
      });

      return {
        ...state,
        isLoading: false,
        orders: view_ret_order,
      };

    case ORDER_ADD_RET_DIST:
      let aNewArray = state.orders.filter(
        (item) => item.id != action.payload.order.id
      );
      let aOrderItem = action.payload.order;

      return {
        ...state,
        isLoading: false,
        orders: [aOrderItem, ...aNewArray],
        place_orders: [action.payload.dist_order, ...state.place_orders],
      };

    case ORDER_EDIT_RET_DIST:
      return {
        ...state,
        isLoading: false,
        place_orders: action.payload.dist_orders,
      };

    case ORDER_UPDATE_RET_DIST:
      let view_update_ret = state.place_orders.map((v_ret_item) => {
        let new_v_item = v_ret_item;
        if (new_v_item.id == action.payload.dist_order.id) {
          new_v_item = action.payload.dist_order;
        }
        return new_v_item;
      });

      let vNewArray = state.orders.filter(
        (item) => item.id != action.payload.order.id
      );
      let vOrderItem = action.payload.order;

      return {
        ...state,
        isLoading: false,
        orders: [vOrderItem, ...vNewArray],
        place_orders: view_update_ret,
      };

    case ORDER_DELETE_RET_DIST:
      let view_del_ret = state.place_orders.filter(
        (del_v_item) => del_v_item.id != action.payload.order_id
      );
      let dNewArray = state.orders.filter(
        (item) => item.id != action.payload.order.id
      );
      let dOrderItem = action.payload.order;

      return {
        ...state,
        isLoading: false,
        orders: [dOrderItem, ...dNewArray],
        place_orders: view_del_ret,
      };

    case ORDER_DISPATCH_RET_ORDER:
      return {
        ...state,
        isLoading: false,
        ret_order: action.payload.ret_order,
      };

    case ORDER_ADD_PLACED:
      return {
        ...state,
        isLoading: false,
        place_orders: [...state.place_orders, action.payload.order],
      };

    case ORDER_PLACED_EDIT:
      let placeArray = state.place_orders.filter(
        (item) => item.id != action.payload.order.id
      );
      placeArray.splice(action.payload.index, 0, action.payload.order);

      return {
        ...state,
        isLoading: false,
        place_orders: placeArray,
      };

    case ORDER_PLACED_DELETE:
      return {
        ...state,
        isLoading: false,
        place_orders: state.place_orders.filter(
          (order) => order.id != action.payload
        ),
      };

    case ORDER_LOGS:
      return {
        ...state,
        isLoading: false,
        order_logs: action.payload,
      };

    case ORDER_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
