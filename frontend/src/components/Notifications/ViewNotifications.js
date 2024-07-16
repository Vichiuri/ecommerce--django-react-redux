import React, { useState } from "react";
import NotificationRow from "./NotificationRow";

export default function ViewNotifications(props) {
  const {
    notifications,
    changePage,
    editNotification,
    deleteMobileNotification,
  } = props;

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="d-flex justify-content-end">
          <div className="btn btn-primary" onClick={() => changePage(2)}>
            Add Notification
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            {notifications.map((notification, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <NotificationRow
                    key={index}
                    notification={notification}
                    editNotification={editNotification}
                    deleteMobileNotification={deleteMobileNotification}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
