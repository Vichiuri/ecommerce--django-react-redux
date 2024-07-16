import { combineReducers } from "redux";
import Errors from "../../../../frontend/src/redux/reducers/Errors";
import Messages from "../../../../frontend/src/redux/reducers/Messages";
import RetailerAuth from "./RetailerAuth";
import RetailerBanners from "./RetailerBanners";
import RetailerOffers from "./RetailerOffers";
import RetailerProducts from "./RetailerProducts";

export default combineReducers({
  authReducer: RetailerAuth,
  messagesReducer: Messages,
  errorsReducer: Errors,
  retailerProductsReducer: RetailerProducts,
  retailerBannerReducer: RetailerBanners,
  retailerOffersReducer: RetailerOffers,
});
