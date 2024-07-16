//! Core Types
export const GET_ERRORS = "GET_ERRORS";
export const GET_MESSAGES = "GET_MESSAGES";

//! Auth types
export const USER_LOADING = "ADMIN_LOADING";
export const USER_LOADED = "ADMIN_LOADED";
export const GET_USER = "GET_USER";
export const REFRESH_AUTH = "REFRESH_AUTH";
export const AUTH_ERRORS = "AUTH_ERRORS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_USER = "UPDATE_USER";
export const USER_ERRORS = "USER_ERRORS";
export const UPDATE_USER_DIST_OPTIONS = "UPDATE_USER_DIST_OPTIONS";

//! Product types
export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const PRODUCT_LOADED = "PRODUCT_LOADED";
export const PRODUCT_PAGINATION_LOADED = "PRODUCT_PAGINATION_LOADED";
export const PRODUCT_ERROR = "PRODUCT_ERROR";
export const PRODUCT_ADD = "PRODUCT_ADD";
export const PRODUCT_EDIT = "PRODUCT_EDIT";
export const PRODUCT_DELETE = "PRODUCT_DELETE";
export const PRODUCT_STATS = "PRODUCT_STATS";
export const PRODUCT_STATS_ADD = "PRODUCT_STATS_ADD";
export const PRODUCT_CATEGORIES = "PRODUCT_CATEGORIES";
export const PRODUCT_CATEGORIES_ADD = "PRODUCT_CATEGORIES_ADD";
export const PRODUCT_CATEGORIES_EDIT = "PRODUCT_CATEGORIES_EDIT";
export const PRODUCT_CATEGORIES_DELETE = "PRODUCT_CATEGORIES_DELETE";
export const PRODUCT_UNITS = "PRODUCT_UNITS";
export const PRODUCT_UNITS_ADD = "PRODUCT_UNITS_ADD";
export const PRODUCT_UNITS_UPDATE = "PRODUCT_UNITS_UPDATE";
export const PRODUCT_UNITS_DELETE = "PRODUCT_UNITS_DELETE";
export const PRODUCT_COMPOUND_UNITS = "PRODUCT_COMPOUND_UNITS";
export const PRODUCT_ADD_COMPOUND_UNITS = "PRODUCT_ADD_COMPOUND_UNITS";
export const PRODUCT_COMPOUND_UNITS_UPDATE = "PRODUCT_COMPOUND_UNITS_UPDATE";
export const PRODUCT_COMPOUND_UNITS_DELETE = "PRODUCT_COMPOUND_UNITS_DELETE";
export const PRODUCT_PRICE_LEVELS = "PRODUCT_PRICE_LEVELS";
export const PRODUCT_ADD_PRICE_LEVELS = "PRODUCT_ADD_PRICE_LEVELS";
export const PRODUCT_PRICE_LEVELS_UPDATE = "PRODUCT_PRICE_LEVELS_UPDATE";
export const PRODUCT_PRICE_LEVELS_DELETE = "PRODUCT_PRICE_LEVELS_DELETE";
export const PRODUCT_VIEW_PRICE_LIST = "PRODUCT_VIEW_PRICE_LIST";
export const PRODUCT_PRICE_LIST = "PRODUCT_PRICE_LIST";
export const PRODUCT_ADD_PRICE_LIST = "PRODUCT_ADD_PRICE_LIST";
export const PRODUCT_EDIT_PRICE_LIST = "PRODUCT_EDIT_PRICE_LIST";
export const PRODUCT_DELETE_PRICE_LIST = "PRODUCT_DELETE_PRICE_LIST";
export const PRODUCT_BRANDS = "PRODUCT_BRANDS";
export const PRODUCT_BRANDS_ADD = "PRODUCT_BRANDS_ADD";
export const PRODUCT_BRANDS_UPDATE = "PRODUCT_BRANDS_UPDATE";
export const PRODUCT_BRANDS_DELETE = "PRODUCT_BRANDS_DELETE";

//!Orders types
export const ORDER_LOADING = "ORDER_LOADING";
export const ORDER_LOADED = "ORDER_LOADED";
export const ORDER_ITEM_LOADED = "ORDER_ITEM_LOADED";
export const ORDER_ERROR = "ORDER_ERROR";
export const ORDER_ADD = "ORDER_ADD";
export const ORDER_DELETE = "ORDER_DELETE";
export const ORDER_EDIT = "ORDER_EDIT";
export const ORDER_UPDATE_STATUS = "ORDER_UPDATE_STATUS";
export const ORDER_STATS = "ORDER_STATS";
export const ORDER_STATS_ADD = "RDER_STATS_ADD";
export const ORDER_PLACED = "ORDER_PLACED";
export const ORDER_ADD_RET_DIST = "ORDER_ADD_RET_DIST";
export const ORDER_EDIT_RET_DIST = "ORDER_EDIT_RET_DIST";
export const ORDER_RET_DIST = "ORDER_RET_DIST";
export const ORDER_UPDATE_RET_DIST = "ORDER_UPDATE_RET_DIST";
export const ORDER_DELETE_RET_DIST = "ORDER_DELETE_RET_DIST";
export const ORDER_DISPATCH_RET_ORDER = "ORDER_DISPATCH_RET_ORDER";
export const ORDER_ADD_PLACED = "ORDER_ADD_PLACED";
export const ORDER_PLACED_DELETE = "ORDER_PLACED_DELETE";
export const ORDER_PLACED_EDIT = "ORDER_PLACED_EDIT";
export const ORDER_DISPATCHED = "ORDER_DISPATCHED";
export const ORDER_PARTIAL_DISPATCHED = "ORDER_PARTIAL_DISPATCHED";
export const ORDER_LOGS = "ORDER_LOGS";

//!Retailers types
export const RETAILER_LOADING = "RETAILER_LOADING";
export const RETAILER_LOADED = "RETAILER_LOADED";
export const RETAILER_ITEM_LOADED = "RETAILER_ITEM_LOADED";
export const RETAILER_ERROR = "RETAILER_ERROR";
export const RETAILER_ADD = "RETAILER_ADD";
export const RETAILER_LOCATION_LOADED = "RETAILER_LOCATION_LOADED";
export const RETAILER_LOCATION_ADD = "RETAILER_LOCATION_ADD";
export const RETAILER_LOCATION_EDIT = "RETAILER_LOCATION_EDIT";
export const RETAILER_LOCATION_DELETE = "RETAILER_LOCATION_DELETE";
export const RETAILER_CITY_ADD = "RETAILER_CITY_ADD";
export const RETAILER_CITY_EDIT = "RETAILER_CITY_EDIT";
export const RETAILER_CITY_DELETE = "RETAILER_CITY_DELETE";
export const RETAILER_AREA_LOADED = "RETAILER_AREA_LOADED";
export const RETAILER_AREA_ADD = "RETAILER_AREA_ADD";
export const RETAILER_AREA_EDIT = "RETAILER_AREA_EDIT";
export const RETAILER_AREA_DELETE = "RETAILER_AREA_DELETE";
export const RETAILER_CITIES = "RETAILER_CITIES";
export const RETAILER_EDIT = "RETAILER_EDIT";
export const RETAILER_DELETE = "RETAILER_DELETE";

// !Sales types
export const SALES_LOADING = "SALES_LOADING";
export const SALES_LOADED = "SALES_LOADED";
export const SALES_TARGET_LOADED = "SALES_TARGET_LOADED";
export const SALES_ADD_TARGET_LOADED = "SALES_ADD_TARGET_LOADED";
export const SALES_EDIT_TARGET = "SALES_EDIT_TARGET";
export const SALES_DELETE_TARGET = "SALES_DELETE_TARGET";
export const SALES_ERROR = "SALES_ERROR";
export const SALES_ADD = "SALES_ADD";
export const SALES_EDIT = "SALES_EDIT";
export const SALES_DELETE = "SALES_DELETE";

// !Offer types
export const OFFERS_LOADING = "OFFERS_LOADING";
export const OFFERS_LOADED = "OFFERS_LOADED";
export const OFFERS_ERROR = "OFFERS_ERROR";
export const OFFERS_ADD = "OFFERS_ADD";
export const OFFERS_EDIT = "OFFERS_EDIT";
export const OFFERS_DELETE = "OFFERS_DELETE";

// !DashBoard types
export const DASHBOARD_LOADING = "DASHBOARD_LOADING";
export const DASHBOARD_LOADED = "DASHBOARD_LOADED";
export const DASHBOARD_ERROR = "DASHBOARD_ERROR";
export const DASHBOARD_ADD = "DASHBOARD_ADD";
export const DASHBOARD_PROGRESS = "DASHBOARD_PROGRESS";
export const DASHBOARD_MAP_DATA = "DASHBOARD_MAP_DATA";

// !Delivery types
export const DELIVERY_LOADING = "DELIVERY_LOADING";
export const DELIVERY_LOADED = "DELIVERY_LOADED";
export const DELIVERY_ERROR = "DELIVERY_ERROR";
export const DELIVERY_ADD = "DELIVERY_ADD";
export const PARTIAL_DELIVERY_LOADED = "PARTIAL_DELIVERY_LOADED";
export const PARTIAL_DELIVERY_ADD = "PARTIAL_DELIVERY_ADD";

// !Banner types
export const BANNERS_LOADING = "BANNERS_LOADING";
export const BANNERS_LOADED = "BANNERS_LOADED";
export const BANNERS_ERROR = "BANNERS_ERROR";
export const BANNERS_ADD = "BANNERS_ADD";
export const BANNERS_EDIT = "BANNERS_EDIT";
export const BANNERS_POSITION_EDIT = "BANNERS_POSITION_EDIT";
export const BANNERS_DELETE = "BANNERS_DELETE";

// !Management Types
export const GROUPS_LOADING = "GROUPS_LOADING";
export const GROUPS_LOADED = "GROUPS_LOADED";
export const GROUPS_ERROR = "GROUPS_ERROR";
export const GROUPS_ADD = "GROUPS_ADD";
export const GROUPS_EDIT = "GROUPS_EDIT";
export const GROUPS_DELETE = "GROUPS_DELETE";
export const DIST_LOADING = "DIST_LOADING";
export const DIST_LOADED = "DIST_LOADED";
export const DIST_ADD = "DIST_ADD";
export const DIST_EDIT = "DIST_EDIT";
export const DIST_DELETE = "DIST_DELETE";

// !ORDER_REPORTS Types
export const ORDER_REPORTS_LOADING = "ORDER_REPORTS_LOADING";
export const ORDER_REPORTS_LOADED = "ORDER_REPORTS_LOADED";
export const ORDER_REPORTS_ERROR = "ORDER_REPORTS_ERROR";
export const RETAILER_REPORTS_LOADED = "RETAILER_REPORTS_LOADED";
export const PRODUCT_REPORTS_LOADED = "PRODUCT_REPORTS_LOADED";
export const SALES_TARGET_REPORT_LOADED = "SALES_TARGET_REPORT_LOADED";
export const SALES_TARGET_INDIVIDUAL_LOADED = "SALES_TARGET_INDIVIDUAL_LOADED";

// ! Notificattion Types
export const NOTIFICATION_LOADING = "NOTIFICATION_LOADING";
export const NOTIFICATION_LOADED = "NOTIFICATION_LOADED";
export const NOTIFICATION_ERROR = "NOTIFICATION_ERROR";
export const NOTIFICATION_ADD = "NOTIFICATION_ADD";
export const NOTIFICATION_EDIT = "NOTIFICATION_EDIT";
export const NOTIFICATION_DELETE = "NOTIFICATION_DELETE";
export const DIST_NOTIFICATION_LOADED = "DIST_NOTIFICATION_LOADED";
export const DIST_NOTIFICATION_ADDED = "DIST_NOTIFICATION_ADDED";
export const DIST_VIEW_NOTIFICATION = "DIST_VIEW_NOTIFICATION";

// ! Custom Color Types
export const CUSTOM_COLORS_LOADING = "CUSTOM_COLORS_LOADING";
export const CUSTOM_COLORS_LOADED = "CUSTOM_COLORS_LOADED";
export const CUSTOM_COLORS_ERROR = "CUSTOM_COLORS_ERROR";

// !Distributor Types
export const SETTINGS_LOADING = "SETTINGS_LOADING";
export const SETTINGS_LOADED = "SETTINGS_LOADED";
export const SETTINGS_EDIT = "SETTINGS_EDIT";
export const SETTINGS_ERROR = "SETTINGS_ERROR";
export const COUNTRIES_LOADED = "COUNTRIES_LOADED";
export const CITIES_LOADED = "CITIES_LOADED";
export const EMAIL_SETTINGS_LOADED = "EMAIL_SETTINGS_LOADED";
export const DIST_OPTIONS_SETTINGS = "DIST_OPTIONS_SETTINGS";


// API INTEGRATION TYPES
export const API_LOADING = "API_LOADING"
export const API_LOADED = "API_LOADED"
export const INTEGRATION_ERROR = "INTEGRATION_ERROR"
