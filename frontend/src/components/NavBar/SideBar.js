import React, { useEffect } from "react";
import { Link } from "react-router-dom";

/** Distributor Side bar view */
export default function SideBar({ group, account }) {
  useEffect(() => {
    var dropdown = document.getElementsByClassName("dropdown_btn");
    const body = document.getElementsByTagName("body")[0];
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
    var side = document.getElementById("side_nav");
    side.onmouseleave = () => {
      for (i = 0; i < dropdown.length; i++) {
        dropdown[i].classList.remove("active");
        var dropdownContent = dropdown[i].nextElementSibling;
        if (dropdownContent != null) {
          dropdownContent.style.display = "none";
        }
        body.classList.remove("sidebar-expand");
      }
    };
    side.onmouseenter = () => {
      body.classList.add("sidebar-expand");
    };
  }, []);

  return (
    <div className="sidebar" id="nav_side_bar">
      <ul id="side_nav" className="sidebar-nav mt-4 overflow-auto">
        {group.permission.can_view_dashboard ? (
          <li className="sidebar-nav-item ">
            <div className="sidebar-nav-link">
              <div>
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <Link className="side_nav_item" to="/home/dashboard">
                <h5>Dashboard</h5>
              </Link>
            </div>
          </li>
        ) : (
          <li />
        )}

        {group.permission.can_view_products ? (
          <li className="sidebar-nav-item">
            <div className="dropdown_btn">
              <div className="sidebar-nav-link">
                <div>
                  <i className="fas fa-store"></i>
                </div>
                <h5>Products</h5>
              </div>
            </div>

            <div className="dropdown_container">
              <ul className="list-group list-group-flush">
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/products"
                  >
                    View Products
                  </Link>
                </li>
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/categories"
                  >
                    View Categories
                  </Link>
                </li>
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/product_master"
                  >
                    Product Master
                  </Link>
                </li>
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/price_list"
                  >
                    Price List
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          <li />
        )}

        {group.permission.can_view_salesmen ? (
          <li className="sidebar-nav-item">
            <div className="dropdown_btn">
              <div className="sidebar-nav-link">
                <div>
                  <i className="fas fa-bullhorn"></i>
                </div>
                <span>Sales</span>
              </div>
            </div>

            <div className="dropdown_container">
              <ul className="list-group list-group-flush">
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/sales"
                  >
                    Sales People
                  </Link>
                </li>
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/sales_target"
                  >
                    Sales Target
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          <li />
        )}
        {group.permission.can_view_retailer ? (
          <li className="sidebar-nav-item">
            <div className="dropdown_btn">
              <div className="sidebar-nav-link">
                <div>
                  <i className="fas fa-business-time"></i>
                </div>
                <span>Retailers</span>
              </div>
            </div>

            <div className="dropdown_container">
              <ul className="list-group list-group-flush">
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/retailers"
                  >
                    Retailers
                  </Link>
                </li>

                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/retailer_location"
                  >
                    Retailers Location
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          <li />
        )}

        {group.permission.can_view_orders ? (
          <li className="sidebar-nav-item ">
            <div className="sidebar-nav-link">
              <div>
                <i className="fas fa-shopping-cart"></i>
              </div>
              <Link className="side_nav_item" to="/home/orders">
                <h5>Orders</h5>
              </Link>
            </div>
          </li>
        ) : (
          <li />
        )}

        {group.permission.can_view_deliveries ? (
          <li className="sidebar-nav-item">
            <div className="dropdown_btn">
              <div className="sidebar-nav-link">
                <div>
                  <i className="fas fa-truck"></i>
                </div>
                <span>Deliveries</span>
              </div>
            </div>

            <div className="dropdown_container">
              <ul className="list-group list-group-flush">
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/deliveries"
                  >
                    View Deliveries
                  </Link>
                </li>
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/partial/deliveries"
                  >
                    Partial Deliveries
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          <li />
        )}

        {group.permission.can_view_offers ? (
          <li className="sidebar-nav-item">
            <div className="sidebar-nav-link">
              <div>
                <i className="fas fa-bullhorn"></i>
              </div>
              <Link className="side_nav_item" to="/home/offers">
                <h5>Offers</h5>
              </Link>
            </div>
          </li>
        ) : (
          <li />
        )}
        {group.permission.can_manage_mobile ? (
          <li className="sidebar-nav-item">
            <div className="dropdown_btn">
              <div className="sidebar-nav-link">
                <div>
                  <i className="fas fa-mobile"></i>
                </div>
                <span>Mobile App</span>
              </div>
            </div>

            <div className="dropdown_container">
              <ul className="list-group list-group-flush">
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/banners"
                  >
                    View Banners
                  </Link>
                </li>

                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/notifications"
                  >
                    Push Notification
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          <li />
        )}

        <li className="sidebar-nav-item">
          <div className="dropdown_btn">
            <div className="sidebar-nav-link">
              <div>
                <i className="fas fa-chart-line"></i>
              </div>
              <span>Reports</span>
            </div>
          </div>
          <div className="dropdown_container">
            <ul className="list-group list-group-flush">
              <li className="list-group-item row">
                <Link
                  className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                  to="/home/order/reports"
                >
                  Order Reports
                </Link>
              </li>

              {account.dist_options && account.dist_options.use_sales_target ? (
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/sales_group/reports"
                  >
                    Sales Target Report
                  </Link>
                </li>
              ) : (
                <li />
              )}
            </ul>
          </div>
        </li>

        {group && group.dist_super ? (
          <li className="sidebar-nav-item">
            <div className="dropdown_btn">
              <div className="sidebar-nav-link">
                <div>
                  <i className="fas fa-book-open"></i>
                </div>
                <span>Management</span>
              </div>
            </div>
            <div className="dropdown_container">
              <ul className="list-group list-group-flush">
                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/groups"
                  >
                    View Groups
                  </Link>
                </li>

                <li className="list-group-item row">
                  <Link
                    className="side_nav_item col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    to="/home/staff"
                  >
                    View Users
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          <li />
        )}
        {group && group.permission.can_view_settings ? (
          <li className="sidebar-nav-item">
            <div className="sidebar-nav-link">
              <div>
                <i className="fas fa-cog"></i>
              </div>
              <Link className="side_nav_item" to="/home/settings">
                <h5>Settings</h5>
              </Link>
            </div>
          </li>
        ) : (
          <li></li>
        )}
          {/* <li className="sidebar-nav-item">
            <div className="sidebar-nav-link">
              <div>
                <i className="fas fa-code"></i>
              </div>
              <Link className="side_nav_item" to="/home/api-intergration">
                <h5>Api</h5>
              </Link>
            </div>
          </li> */}
      </ul>
    </div>
  );
}
