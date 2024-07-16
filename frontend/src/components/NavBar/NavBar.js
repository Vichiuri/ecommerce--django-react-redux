import React from "react";
import { Link } from "react-router-dom";
import { changeMenu } from "../../utils/ControlMenu";
import formatDate from "../../utils/FormatDate";

/** Top Navbar view  */
export default function NavBar({
  logOutUser,
  user,
  notifications,
  account,
  logo,
}) {
  // function switchTheme() {
  //   const themeCookieName = "theme";
  //   const themeDark = "dark";
  //   const themeLight = "light";
  //   const body = document.getElementsByTagName("body")[0];
  //   if (body.classList.contains(themeLight)) {
  //     body.classList.remove(themeLight);
  //     body.classList.add(themeDark);
  //     setCookie(themeCookieName, themeDark);
  //   } else {
  //     body.classList.remove(themeDark);
  //     body.classList.add(themeLight);
  //     setCookie(themeCookieName, themeLight);
  //   }
  // }

  // function setCookie(cname, cvalue, exdays) {
  //   var d = new Date();
  //   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  //   var expires = "expires=" + d.toUTCString();
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // }

  function collapseSidebar() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.toggle("sidebar-expand");
  }

  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link">
            <i
              id="nav_view_bars"
              className="fas fa-bars"
              onClick={() => collapseSidebar()}
            ></i>
          </a>
        </li>
        <li
          className="nav-item"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {logo ? (
            <img src={`..${logo}`} alt="ATPro logo" className="logo ml-4" />
          ) : (
            <div />
          )}
          <h5
            style={{
              marginTop: "10px",
              fontWeight: "700",
            }}
          >
            {account?.distributor?.name ?? ""}
          </h5>
        </li>
      </ul>

      {/* <form className="navbar-search">
        <input
          type="text"
          name="Search"
          className="navbar-search-input"
          placeholder="What you looking for..."
        />
        <i className="fas fa-search"></i>
      </form> */}

      <ul className="navbar-nav nav-right">
        {/* <li className="nav-item mode mr-4">
          <a className="nav-link" href="#" onClick={() => switchTheme()}>
            <i className="fas fa-moon dark-icon"></i>
            <i className="fas fa-sun light-icon"></i>
          </a>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link">
            <i
              className="fas fa-bell dropdown-toggle"
              data-toggle="notification-menu"
            ></i>
            <span className="navbar-badge">
              {notifications.filter((item) => item.seen == false).length}
            </span>
          </a>
          <ul
            id="notification-menu"
            className="dropdown_menu notification-menu"
          >
            <div className="dropdown-menu-header">
              <span>Notifications</span>
            </div>
            <div className="dropdown-menu-content overlay-scrollbar scrollbar-hover">
              {notifications.map((notification, index) => {
                const viewClassName = notification.seen
                  ? "dropdown-menu-item side_nav_item "
                  : "dropdown-menu-item side_nav_item nav_notification_v";
                return (
                  <li key={index} className={viewClassName}>
                    <Link
                      to={`/home/view_notification/${notification.id}`}
                      className="dropdown-menu-link align-items-center side_nav_item"
                    >
                      <div className="avt mb-1">
                        <img
                          src={
                            notification?.action_by?.pic
                              ? notification?.action_by?.pic
                              : "../static/images/user.png"
                          }
                          alt="User image"
                          className="dropdown-toggle"
                          data-toggle="user-menu"
                        />
                      </div>
                      <span>
                        {notification.display_text}
                        <br />
                        <span>{formatDate(notification.when_created)}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </div>
            <div className="dropdown-menu-footer">
              <Link
                to="/home/dist_notification"
                className="row justify-content-center side_nav_item"
              >
                <span>View all notifications</span>
              </Link>
            </div>
          </ul>
        </li>
        <li className="nav-item avt-wrapper ml-4">
          <div className=" dropdown">
            <div className="row align-items-center" data-toggle="user-menu">
              <div className="nav_user_img">
                <img
                  src={
                    account?.pic ? account?.pic : "../static/images/user.png"
                  }
                  alt="User image"
                  className="dropdown-toggle"
                  data-toggle="user-menu"
                />
              </div>

              <i className="dropdown-toggle" data-toggle="user-menu"></i>
            </div>
            <ul id="user-menu" className="dropdown_menu">
              <li className="dropdown-menu-item border-bottom">
                <a className="dropdown-menu-link">
                  <div className="nav_user_img">
                    <i>
                      <img
                        src={"../static/images/user.png"}
                        alt="User image"
                        className="dropdown-toggle"
                        data-toggle="user-menu"
                      />
                    </i>
                  </div>
                  <span>{user.email ? user.email : ""}</span>
                </a>
              </li>
              <li className="dropdown-menu-item">
                <Link
                  className="dropdown-menu-link side_nav_item"
                  to="/home/profile"
                >
                  <div>
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <span>Profile</span>
                </Link>
              </li>

              <li className="dropdown-menu-item">
                <div
                  className="dropdown-menu-link side_nav_item"
                  onClick={() => {
                    let viewMenu = localStorage.getItem("view_item_menu");
                    if (viewMenu && viewMenu == "vertical") {
                      changeMenu("horizontal");
                    } else {
                      changeMenu("vertical");
                    }
                  }}
                >
                  <div>
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <span>Change Navbar</span>
                </div>
              </li>

              <li className="dropdown-menu-item">
                <div
                  onClick={() => logOutUser()}
                  className="dropdown-menu-link"
                >
                  <div>
                    <i className="fas fa-sign-out-alt"></i>
                  </div>
                  <span>Logout</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
