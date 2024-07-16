import React from "react";

export default function NotificationRow(props) {
  const { notification, deleteMobileNotification, editNotification } = props;
  return (
    // <div className="border-bottom p-2">
    //   <div className="d-flex justify-content-between align-items-center">
    //     <div className="row align-items-center">
    //       <div className="notification_img mr-4">
    //         <img src={notification.pic ? `..${notification.pic}` : ""} alt="" />
    //       </div>
    //       <div>
    //         <h5>{notification.name}</h5>
    //         <p>{notification.detail}</p>
    //       </div>
    //     </div>
    //     <div className="d-block">
    //       <div
    //         onClick={() => editNotification(notification)}
    //         className="btn btn-primary mr-2"
    //       >
    //         <i className="fas fa-edit text-white"></i>
    //       </div>
    //       <div
    //         onClick={() => deleteMobileNotification(notification.id)}
    //         className="btn btn-danger"
    //       >
    //         <i className="fas fa-times text-white"></i>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="card">
        <div className="notification_img">
          <img src={notification.pic ? `..${notification.pic}` : ""} alt="" />
          <div className="delete_btn" onClick={() => deleteBanner(banner.id)}>
            x
          </div>
        </div>
        <div className="card-header">
          <div className="row justify-content-between align-items-center">
            <h6 className="font-weight-bold mt-2">{notification?.name}</h6>
            <i
              onClick={() => editNotification(notification)}
              className="fas fa-edit"
            ></i>
          </div>
        </div>
        <div className="card-body p-4">
          <p>{notification?.detail ? notification.detail : ""}</p>
        </div>
      </div>
    </div>
  );
}
