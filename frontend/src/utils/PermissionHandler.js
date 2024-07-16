import React from "react";
import { Redirect } from "react-router";

export default function (permission) {
  if (permission.can_view_dashboard) {
    return <Redirect to="/home/dashboard" />;
  } else if (permission.can_view_products) {
    return <Redirect to="/home/products" />;
  } else if (permission.can_view_product_category) {
    return <Redirect to="/home/categories" />;
  } else if (permission.can_view_orders) {
    return <Redirect to="/home/orders" />;
  } else if (permission.can_view_salesmen) {
    return <Redirect to="/home/sales" />;
  } else if (permission.can_view_retailer) {
    return <Redirect to="/home/retailers" />;
  } else if (permission.can_view_deliveries) {
    return <Redirect to="/home/deliveries" />;
  } else if (permission.can_view_offers) {
    return <Redirect to="/home/offers" />;
  } else if (permission.can_view_users) {
    return <Redirect to="/home/groups" />;
  } else if (permission.can_manage_mobile) {
    return <Redirect to="/home/banners" />;
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("account");
    window.location.assign("../forbidden");
  }
}
