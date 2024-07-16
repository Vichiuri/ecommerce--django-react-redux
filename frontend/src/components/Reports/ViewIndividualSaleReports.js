import React, { Fragment } from "react";
import FormatCommas from "../../utils/FormatCommas";

export default function ViewIndividualSaleReports(props) {
  const { reports, viewSalesTable } = props;

  function calculateStatus(complete, target) {
    let difference = complete - target;

    return difference > 0 ? (
      <span className="dot">
        <i className="bg-success"></i>
        Completed
      </span>
    ) : (
      <span className="dot">
        <i className="bg-warning"></i>
        Pending
      </span>
    );
  }

  return (
    <Fragment>
      <div className="row justify-content-end">
        <div
          onClick={() => viewSalesTable()}
          className="badge badge-danger btn_type mr-2 mb-2"
        >
          Groups
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Complete</th>
            <th>Target</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="report_sales_round_img">
                    <img
                      src={
                        report.pic
                          ? `..${report.pic}`
                          : "../static/images/login.jpg"
                      }
                      alt="customer image"
                    />
                  </div>
                </td>
                <td>
                  {report.first_name} {report.last_name}
                </td>
                <td>{report.phone}</td>
                <td>{report.email}</td>
                <td>
                  {report.target_currency} {FormatCommas(report.statics)}
                </td>
                <td>
                  {report.target_currency} {FormatCommas(report.target)}
                </td>
                <td>{calculateStatus(report.statics, report.target)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}
