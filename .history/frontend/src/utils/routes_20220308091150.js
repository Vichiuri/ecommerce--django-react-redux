import React from "react";
const Categories = React.lazy(() =>
  import("../components/Categories/Categories")
);
const DashBoard = React.lazy(() => import("../components/DashBoard/DashBoard"));
const Deliveries = React.lazy(() =>
  import("../components/Deliveries/Deliveries")
);
// const Api = React.lazy(() => import("../components/Api/Api"));
const Offers = React.lazy(() => import("../components/Offers/Offers"));
const Orders = React.lazy(() => import("../components/Orders/Orders"));
const PriceList = React.lazy(() => import("../components/Prices/PriceList"));
const ProductMaster = React.lazy(() =>
  import("../components/ProductMaster/ProductMaster")
);
const Products = React.lazy(() => import("../components/products/Products"));
const Profile = React.lazy(() => import("../components/Profile/Profile"));
const RetailerLocations = React.lazy(() =>
  import("../components/RetailerLocations/RetailerLocations")
);
const Retailers = React.lazy(() => import("../components/Retailers/Retailers"));
const Sales = React.lazy(() => import("../components/Sales/Sales"));
const SalesTarget = React.lazy(() =>
  import("../components/SalesTarget/SalesTarget")
);
const Banners = React.lazy(() => import("../components/Banners/Banners"));
const UserManagement = React.lazy(() =>
  import("../components/UserManagement/UserManagement")
);
const GroupManagement = React.lazy(() =>
  import("../components/UserManagement/GroupManagement")
);
const OrderReports = React.lazy(() =>
  import("../components/Reports/OrderReports")
);
const Notifications = React.lazy(() =>
  import("../components/Notifications/Notifications")
);
const PartialDeliveries = React.lazy(() =>
  import("../components/PartialDeliveries/PartialDeliveries")
);
const Settings = React.lazy(() => import("../components/Settings/Settings"));
const DistNotifications = React.lazy(() =>
  import("../components/Notifications/DistNotifications")
);
const SalesTargetReport = React.lazy(() =>
  import("../components/Reports/SalesTargetReport")
);
const ViewNotificationDetails = React.lazy(() =>
  import("../components/Notifications/ViewNotificationDetails")
);
const ApiIntegration = React.lazy(() => import("../components/integration/Integration"));

const dashBoardRoutes = [
  {
    path: "/dashboard",
    name: "DashBoard",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: DashBoard,
    layout: "/home",
  },
  {
    path: "/api-intergration",
    name: "DashBoard",
    icon: <i className="fas fa-code"></i>,
    component: ApiIntegration,
    layout: "/home",
  },
  {
    path: "/products",
    name: "Products",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: Products,
    layout: "/home",
  },
  {
    path: "/categories",
    name: "Categories",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: Categories,
    layout: "/home",
  },
  {
    path: "/product_master",
    name: "Product Master",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: ProductMaster,
    layout: "/home",
  },
  {
    path: "/price_list",
    name: "Price List",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: PriceList,
    layout: "/home",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: Orders,
    layout: "/home",
  },
  {
    path: "/retailers",
    name: "Retailers",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: Retailers,
    layout: "/home",
  },
  {
    path: "/retailer_location",
    name: "Retailer Locations",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: RetailerLocations,
    layout: "/home",
  },
  {
    path: "/sales",
    name: "Sales",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: Sales,
    layout: "/home",
  },
  {
    path: "/sales_target",
    name: "Sales Target",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: SalesTarget,
    layout: "/home",
  },
  {
    path: "/offers",
    name: "Offers",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: Offers,
    layout: "/home",
  },
  {
    path: "/deliveries",
    name: "deliveries",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: Deliveries,
    layout: "/home",
  },
  {
    path: "/partial/deliveries",
    name: "part_deliveries",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: PartialDeliveries,
    layout: "/home",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: Profile,
    layout: "/home",
  },
  {
    path: "/banners",
    name: "Banners",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: Banners,
    layout: "/home",
  },
  {
    path: "/staff",
    name: "Staff",
    icon: <i className="fas fa-users"></i>,
    component: UserManagement,
    layout: "/home",
  },
  {
    path: "/groups",
    name: "Groups",
    icon: <i className="fas fa-users"></i>,
    component: GroupManagement,
    layout: "/home",
  },
  {
    path: "/order/reports",
    name: "Reports",
    icon: <i className="fas fa-users"></i>,
    component: OrderReports,
    layout: "/home",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: <i className="fas fa-users"></i>,
    component: Notifications,
    layout: "/home",
  },
  {
    path: "/view_notification/:id",
    name: "View Notification",
    icon: <i className="fas fa-users"></i>,
    component: ViewNotificationDetails,
    layout: "/home",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <i className="fas fa-users"></i>,
    component: Settings,
    layout: "/home",
  },
  {
    path: "/dist_notification",
    name: "DIstNotification",
    icon: <i className="fas fa-users"></i>,
    component: DistNotifications,
    layout: "/home",
  },
  {
    path: "/sales_group/reports",
    name: "Sales Group Report",
    icon: <i className="fas fa-users"></i>,
    component: SalesTargetReport,
    layout: "/home",
  },
];
export default dashBoardRoutes;
