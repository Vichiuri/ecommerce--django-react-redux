import React, { useState } from "react";
import "./Reports.css";
import formatInputDate from "../../utils/FormatInputDate";
import OrderReportsTable from "./OrderReportsTable";
import ViewOrderReportChart from "./ViewOrderReportChart";

export default function ViewOrderReports(props) {
  const { reports, fetchOrdersStatics } = props;

  const options = ["Daily", "Weekly", "Monthly", "Yearly"];

  const [period, setPeriod] = useState(options[0]);
  const [date_from, setDateFrom] = useState(
    formatInputDate(new Date().setDate(new Date().getDate() - 6))
  );
  const [date_to, setDateTo] = useState(
    formatInputDate(new Date().setDate(new Date().getDate()))
  );
  const [currentView, setCurrentView] = useState(0);

  function calculatePeriod(date_from, date_to) {
    const diffTime = Math.abs(new Date(date_to) - new Date(date_from));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 14) {
      setPeriod(options[0]);
    } else if (diffDays <= 31) {
      setPeriod(options[1]);
    } else if (diffDays <= 365) {
      setPeriod(options[2]);
    } else {
      setPeriod(options[3]);
    }
  }

  const currentPage =
    currentView == 0 ? (
      <OrderReportsTable period={period} reports={reports} />
    ) : (
      <ViewOrderReportChart period={period} reports={reports} />
    );

  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
          <div className="card">
            <div className="card-header bg_themed">
              <div className="row justify-content-between align-items-center p-2">
                <h3>Orders Reports</h3>
                <div className="d-flex">
                  <div className="btn btn-primary btn-lg reports_btn">
                    Export
                  </div>
                  <div
                    onClick={() => {
                      if (currentView == 0) {
                        setCurrentView(1);
                      } else {
                        setCurrentView(0);
                      }
                    }}
                    className="btn btn-success btn-chartjs btn-lg reports_btn ml-2 justify-content-center align-items-center"
                  >
                    {currentView == 0 ? "Chart" : "Table"}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="row justify-content-between">
                <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 border-right">
                  {currentPage}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label>Date From</label>
                    <input
                      className="form-control"
                      type="date"
                      tabIndex="3"
                      name="date_from"
                      value={date_from || ""}
                      onChange={(e) => {
                        setDateFrom(e.target.value);
                        fetchOrdersStatics(e.target.value, date_to);
                        calculatePeriod(e.target.value, date_to);
                      }}
                      dateformat="yyyy-mm-dd"
                      max={new Date()}
                    />
                  </div>
                  <div className="form-group">
                    <label>Date From</label>
                    <input
                      className="form-control"
                      type="date"
                      tabIndex="3"
                      name="date_from"
                      value={date_to || ""}
                      onChange={(e) => {
                        setDateTo(e.target.value);
                        fetchOrdersStatics(date_from, date.target.value);
                        calculatePeriod(date_from, date.target.value);
                      }}
                      dateformat="yyyy-mm-dd"
                      max={new Date()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
