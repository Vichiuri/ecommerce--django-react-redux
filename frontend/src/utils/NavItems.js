import React from "react";

export default function NavItems(group, account) {
  let view_nav_bar = [];
  if (group) {
    view_nav_bar = [
      group.permission.can_view_dashboard
        ? {
            icon: <i className="fas fa-tachometer-alt"></i>,
            name: "Dashboard",
            link: "/home/dashboard",
          }
        : null,
      group.permission.can_view_products
        ? {
            icon: <i className="fas fa-store"></i>,
            name: "Products",
            v_component: [
              {
                name: "View Products",
                link: "/home/products",
              },
              {
                name: "View Categories",
                link: "/home/categories",
              },
              {
                name: "Product Master",
                link: "/home/product_master",
              },
              {
                name: "Price List",
                link: "/home/price_list",
              },
            ],
          }
        : null,
      group.permission.can_view_salesmen
        ? {
            icon: 
            <i className="fas fa-bullhorn"></i>,
            name: "Sales",
            v_component: [
              {
                name: "Sales People",
                link: "/home/sales",
              },
              {
                name: "Sales Target",
                link: "/home/sales_target",
              },
            ],
          }
        : null,
      group.permission.can_view_retailer
        ? {
            icon: <i className="fas fa-business-time"></i>,
            name: "Retailers",
            v_component: [
              {
                name: "Retailers",
                link: "/home/retailers",
              },
              {
                name: "Retailers Location",
                link: "/home/retailer_location",
              },
            ],
          }
        : null,
      group.permission.can_view_orders
        ? {
            icon: <i className="fas fa-shopping-cart"></i>,
            name: "Orders",
            link: "/home/orders",
          }
        : null,
      group.permission.can_view_deliveries
        ? {
            icon: <i className="fas fa-truck"></i>,
            name: "Deliveries",
            v_component: [
              {
                name: "View Deliveries",
                link: "/home/deliveries",
              },
              {
                name: "Partial Deliveries",
                link: "/home/partial/deliveries",
              },
            ],
          }
        : null,
      group.permission.can_view_offers
        ? {
            icon: <i className="fas fa-shopping-cart"></i>,
            name: "Offers",
            link: "/home/offers",
          }
        : null,
      group.permission.can_manage_mobile
        ? {
            icon: <i className="fas fa-mobile"></i>,
            name: "Mobile App",
            v_component: [
              {
                name: "View Banners",
                link: "/home/banners",
              },
              {
                name: "Push Notifications",
                link: "/home/notifications",
              },
            ],
          }
        : null,
      group.permission.can_view_reports
        ? {
            icon: <i className="fas fa-chart-line"></i>,
            name: "Reports",
            v_component: [
              {
                name: "Order Reports",
                link: "/home/order/reports",
              },
              account.dist_options && account.dist_options.use_sales_target
                ? {
                    name: "Sales Target Report",
                    link: "/home/sales_group/reports",
                  }
                : null,
            ],
          }
        : null,
      group && group.dist_super
        ? {
            icon: <i className="fas fa-book-open"></i>,
            name: "Management",
            v_component: [
              {
                name: "View Groups",
                link: "/home/groups",
              },
              {
                name: "View Users",
                link: "/home/staff",
              },
            ],
          }
        : null,
      group.permission.can_view_settings
        ? {
            icon: <i className="fas fa-cog"></i>,
            name: "Settings",
            link: "/home/settings",
          }
        : null,
    ];
  }

  return view_nav_bar;
}
