import React from "react";
import Capitalize from "../../utils/Capitalize";
import formatDate from "../../utils/FormatDate";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";

export default function ViewOrderLogs({ order_logs, changePage }) {
  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>View Logs</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Orders"
                propsName="View Logs"
                changePage={changePage}
              />
            </div>
          </div>
          <div className="card-content">
            {order_logs && order_logs.length > 0 ? (
              order_logs.map((log, index) => {
                return (
                  <div key={index} className="border-bottom p-2">
                    {log.changes ? (
                      <div className="row">
                        {log.changes.map((change, index) => {
                          let typeName = change.field.split("_");
                          return (
                            <div
                              key={index}
                              className="col-lg-3 col-md-6 col-sm-12 col-xs-12"
                            >
                              <h5>
                                {typeName[1]
                                  ? `${Capitalize(typeName[0])} ${Capitalize(
                                      typeName[1]
                                    )}`
                                  : Capitalize(typeName[0])}
                              </h5>
                              <div className="align-items-center">
                                <div className="d-flex align-items-center">
                                  <h6>From: </h6>

                                  {Date.parse(change.from) ? (
                                    <label className="ml-2">
                                      {formatDate(change.from)}
                                    </label>
                                  ) : (
                                    <label className="ml-2">
                                      {change.from}
                                    </label>
                                  )}
                                </div>
                                <div className="d-flex align-items-center">
                                  <h6>To: </h6>
                                  {Date.parse(change.to) ? (
                                    <label className="ml-2">
                                      {formatDate(change.to)}
                                    </label>
                                  ) : (
                                    <label className="ml-2">{change.to}</label>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div />
                    )}
                    <div className="row justify-content-between">
                      <div>
                        <div className="d-flex">
                          <h6>By: </h6>
                          <label className="text-success ml-2">
                            {log.user}
                          </label>
                        </div>
                        <div className="d-flex">
                          <h6>Type: </h6>
                          <label className="text-danger ml-2">{log.type}</label>
                        </div>
                      </div>
                      <div className="d-flex">
                        <h6>On: </h6>
                        <label className="text-warning ml-2">
                          {formatDate(log.date)}
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
