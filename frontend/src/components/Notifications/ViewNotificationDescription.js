import React from "react";
import formatDate from "../../utils/FormatDate";

export default function ViewNotificationDescription({ notification }) {
  return (
    <section className="row">
      <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-body text-center justify-content-center">
            <h3>Notification From</h3>
            <center>
              <div className="notificationDetail_img pt-4 pb-4">
                <img
                  src={
                    notification?.action_by?.pic
                      ? `..${notification?.action_by?.pic}`
                      : "../static/images/user.png"
                  }
                  alt="user"
                />
              </div>
            </center>
            <h6 className="mt-3">{`${
              notification?.action_by?.first_name ?? ""
            } ${notification?.action_by?.last_name ?? ""}`}</h6>
            <p>{notification?.action_by?.phone}</p>
          </div>
        </div>
      </div>

      <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            <h3>Notification Details</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h4 className=" ont-weight-bold">
                  {notification.display_text}
                </h4>

                <p>{notification.details}</p>
              </div>
              <hr className="text-secondary" />
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-end p-0 pr-3 m-0">
                <p className="text-primary">
                  {formatDate(notification.when_created)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
