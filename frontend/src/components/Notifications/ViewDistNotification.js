import React from "react";
import { Link } from "react-router-dom";
import formatDate from "../../utils/FormatDate";

export default function ViewDistNotification({ notifications }) {
  return (
    <section class="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <h3 class="card-header">
            Notifications <i class="fa fa-bell text-muted"></i>
          </h3>

          <div class="notification-ui_dd-content">
            {notifications.map((notification, index) => {
              const viewClassName = notification.seen
                ? "notification-list btn_type side_nav_item"
                : "notification-list notification-list--unread side_nav_item";
              return (
                <Link
                  to={`/home/view_notification/${notification.id}`}
                  key={index}
                  class={viewClassName}
                >
                  <div class="notification-list_content">
                    <div class="notification-list_img">
                      <img
                        src={
                          notification?.action_by?.pic
                            ? notification?.action_by?.pic
                            : "../static/images/user.png"
                        }
                        alt="user"
                      />
                    </div>
                    <div class="notification-list_detail">
                      <h6 className="font-weight-bold">
                        {notification.display_text}
                      </h6>
                      <p class="text-muted pl-2">{notification.details}</p>
                      <p class="text-muted pl-2">
                        <small>{formatDate(notification.when_created)}</small>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
