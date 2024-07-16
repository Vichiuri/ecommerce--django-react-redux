import React from "react";
const RetailerDashBoard = React.lazy(() =>
  import("../components/DashBoard/RetailerDashBoard")
);

const retailerRoutes = [
  {
    path: "/dashboard",
    name: "DashBoard",
    icon: <i className="fas fa-tachometer-alt"></i>,
    component: RetailerDashBoard,
    layout: "/home",
  },
];
export default retailerRoutes;
