import { combineReducers } from "redux";
import Auth from "./Auth";
import Banners from "./Banners";
import DashBoard from "./DashBoard";
import Delivery from "./Delivery";
import Errors from "./Errors";
import Management from "./Management";
import Messages from "./Messages";
import Notification from "./Notification";
import Offers from "./Offers";
import Orders from "./Orders";
import Products from "./Products";
import Reports from "./Reports";
import Retailer from "./Retailer";
import Sales from "./Sales";
import Settings from "./Settings";

export default combineReducers({
  authReducer: Auth,
  messagesReducer: Messages,
  errorsReducer: Errors,
  productsReducer: Products,
  ordersReducer: Orders,
  retailersReducer: Retailer,
  salesReducer: Sales,
  offersReducer: Offers,
  dashboardReducer: DashBoard,
  deliveryReducer: Delivery,
  bannersReducer: Banners,
  managementReducer: Management,
  reportsReducer: Reports,
  notificationsReducer: Notification,
  settingsReducer: Settings,
});
