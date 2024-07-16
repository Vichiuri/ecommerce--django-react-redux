import React, { Fragment } from "react";
import FormatCommas from "../../utils/FormatCommas";
import formatDay from "../../utils/FormatDay";
import FormatMonth from "../../utils/FormatMonth";
import FormatMonthlyWeek from "../../utils/FormatMonthlyWeek";
import formatDate from "../../utils/FormatDate";

export default function OrderReportsTable(props) {
  const { period, reports } = props;

  return (
    <Fragment>
      <div className="row justify-content-end">
        <div className="badge badge-primary btn_type mr-2 mb-2">{period}</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Aproved Orders</th>
            <th>Sold Products</th>
            <th className="row justify-content-end">Total revenue</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reports ? (
            reports.map((report, index) => {
              return (
                <tr key={index}>
                  <td>
                    {period == "Daily"
                      ? formatDate(report.date)
                      : period == "Weekly"
                      ? FormatMonthlyWeek(report.date)
                      : period == "Monthly"
                      ? FormatMonth(report.date)
                      : report.date}
                  </td>
                  <td>{report.count} </td>
                  <td>{report.product_count}</td>
                  <td className="row justify-content-end">
                    Ksh. {FormatCommas(report.revenue_count)}
                  </td>
                  <td>{"   "}</td>
                </tr>
              );
            })
          ) : (
            <div />
          )}
        </tbody>
      </table>
    </Fragment>
  );
}
