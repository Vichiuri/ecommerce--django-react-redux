import React, { useState, Fragment } from "react";
import FormatCommas from "../../utils/FormatCommas";

export default function SalesTargetReportTable(props) {
  const { reports, getIndivialReports } = props;

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Target Group</th>
            <th>Period</th>
            <th>Target</th>
            <th>Reward Amount</th>
            <th>Reward Perc</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports ? (
            reports.map((report, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{report.name}</td>
                  <td>{report.period} </td>

                  <td>
                    {report.target_sales_currency}{" "}
                    {FormatCommas(report.target_sales)}
                  </td>
                  <td>
                    {report.reward_money_currency}{" "}
                    {FormatCommas(
                      report.reward_money ? report.reward_money : 0
                    )}
                  </td>
                  <td>{report.reward_per ? report.reward_per : 0}</td>
                  <td onClick={() => getIndivialReports(report.id)}>
                    <button className="btn btn-primary">View</button>
                  </td>
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
