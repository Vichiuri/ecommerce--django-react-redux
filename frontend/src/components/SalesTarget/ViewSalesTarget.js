import React, { useState } from "react";
import Debouncer from "../../utils/Debouncer";
import CustomPagination from "../../widgets/CustomPagination";
import ViewSalesTargetRow from "./ViewSalesTargetRow";

export default function ViewSalesTarget(props) {
  const {
    sales_target,
    changePage,
    canManage,
    deleteSalesTarget,
    viewEditSalesTarget,
    pageDetails,
    fetchSalesTarget,
  } = props;

  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(25);

  function onChangeRows(viewRows) {
    fetchSalesTarget(1, query, viewRows);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchSalesTarget(page, query, rows);
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <div className="bg_themed container-fluid align-items-center">
          {/* <div className="card-header"> */}
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-6 form-group p-2">
              <div className="input-group p-0 m-0">
                <input
                  type="text"
                  className="form-control border-right-0 m-0 p-0 "
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={Debouncer(() => {
                    if (query) {
                      fetchSalesTarget(1, query, rows);
                    } else {
                      fetchSalesTarget(1, "", rows);
                    }
                  }, 2000)}
                  placeholder="Search"
                />
                <span className="input-group-text border-left-0">
                  <i className="ml-1 fas fa-search"></i>
                </span>
              </div>
            </div>
            <div>
              {canManage ? (
                <div
                  onClick={() => changePage(2)}
                  className="btn btn-primary btn-lg table_menu_btn mr-3"
                >
                  Add Sales Target
                </div>
              ) : (
                <div />
              )}
              {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <h3>Sales Targets</h3>
            </div> */}
              {/* <div className="col-lg-8 col-md-4 col-sm-4 col-xs-4 row justify-content-end align-items-center">
              <div className="col-lg-4 col-md-6 col-sm-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend"></div>
                  <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={Debouncer(() => {
                      if (query) {
                        fetchSalesTarget(1, query, rows);
                      } else {
                        fetchSalesTarget(1, "", rows);
                      }
                    }, 2000)}
                    placeholder="Search"
                  />
                  <div className="input-group-append">
                    <i className="ml-1 fas fa-search"></i>
                  </div>
                </div>
              </div>
              {canManage ? (
                <div
                  onClick={() => changePage(2)}
                  className="btn btn-primary btn-lg table_menu_btn mb-3 mr-3"
                >
                  Add Target
                </div>
              ) : (
                <div />
              )}
            </div> */}
            </div>
            {/* </div> */}
          </div>
          <div className="row justify-content-center">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th width="10%" className="text-right">
                    #
                  </th>
                  <th width="30%" className="text-right">
                    Target Name
                  </th>
                  <th width="10%" className="text-right">
                    Period
                  </th>
                  <th width="30%" className="text-right">
                    Target Sales
                  </th>
                  <th width="10%" className="text-right">
                    Sales People
                  </th>
                  <th width="10%" className="text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {sales_target.map((target, index) => {
                  return (
                    <ViewSalesTargetRow
                      target={target}
                      index={index}
                      key={index}
                      canManage={canManage}
                      viewEditSalesTarget={viewEditSalesTarget}
                      deleteSalesTarget={deleteSalesTarget}
                    />
                  );
                })}
              </tbody>
            </table>
            {pageDetails.last_page && pageDetails.last_page > 1 ? (
              <CustomPagination
                rows={rows}
                changeRows={onChangeRows}
                pageDetails={pageDetails}
                changePage={onChangePage}
              />
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
