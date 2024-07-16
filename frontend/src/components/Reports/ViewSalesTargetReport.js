import React, { useState } from "react";
import formatInputDate from "../../utils/FormatInputDate";
import PrintOutScreen from "../../utils/PrintOutScreen";
import SalesTargetReportTable from "./SalesTargetReportTable";
import ViewIndividualSaleReports from "./ViewIndividualSaleReports";

export default function ViewSalesTargetReport(props) {
  const {
    reports,
    sales_men_reports,
    fetchSalesTargetReport,
    fetchIndividualSalesManStatics,
  } = props;

  const options = [
    { name: "All", value: "" },
    { name: "Daily", value: "Daily" },
    { name: "Weekly", value: "Weekly" },
    { name: "Monthly", value: "Monthly" },
    { name: "Yearly", value: "Yearly" },
  ];

  const [period, setPeriod] = useState(options[0].value);
  const [date_from, setDateFrom] = useState(formatInputDate(new Date()));
  const [currentSalesGroup, setCurrentSalesGroup] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  let currentPage =
    currentIndex == 1 ? (
      <SalesTargetReportTable
        reports={reports}
        getIndivialReports={(salesgroup_id) =>
          viewIndivialReports(date_from, salesgroup_id)
        }
      />
    ) : (
      <ViewIndividualSaleReports
        reports={sales_men_reports}
        viewSalesTable={viewSalesTable}
      />
    );

  function viewFilteredReports(from, status) {
    fetchSalesTargetReport(from, status);
  }

  function viewSalesTable() {
    setCurrentIndex(1);
  }

  function viewIndivialReports(from, salesgroup) {
    fetchIndividualSalesManStatics(from, salesgroup);
    setCurrentIndex(2);
    setCurrentSalesGroup(salesgroup);
  }

  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
          <div className="card">
            <div className="card-header bg_themed">
              <div className="row justify-content-between align-items-center p-2">
                <h3>SalesTarget Reports</h3>
                <div>
                  <div
                    onClick={() => PrintOutScreen("sales_print_out")}
                    className="btn btn-primary btn-lg reports_btn ml-2"
                  >
                    Print
                  </div>
                  <div className="btn btn-success btn-lg reports_btn ml-2">
                    Chart
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="row justify-content-between">
                <div
                  id="sales_print_out"
                  className="col-lg-8 col-md-6 col-sm-12 col-xs-12 border-right"
                >
                  {currentPage}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <center>
                      <h4 className="font-weight-bold">Select Period</h4>
                    </center>
                    {currentIndex == 1 ? (
                      <select
                        className="form-control"
                        value={period}
                        onChange={(e) => {
                          setPeriod(e.target.value);
                          viewFilteredReports(date_from, e.target.value);
                        }}
                      >
                        {options.map((option, index) => {
                          return (
                            <option key={index} value={option.value}>
                              {option.name}
                            </option>
                          );
                        })}
                      </select>
                    ) : (
                      <div />
                    )}
                  </div>
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
                        if (currentIndex == 1) {
                          viewFilteredReports(e.target.value, period);
                        } else {
                          if (currentSalesGroup) {
                            viewIndivialReports(
                              e.target.value,
                              currentSalesGroup
                            );
                          }
                        }
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
