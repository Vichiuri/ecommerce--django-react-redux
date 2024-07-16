import React, { useState } from "react";
import Debouncer from "../../utils/Debouncer";
import ViewCategoriesRow from "./ViewCategoriesRow";
import CustomPagination from "../../widgets/CustomPagination";

export default function ViewCategories(props) {
  const {
    changePage,
    categories,
    deleteCategory,
    editCategory,
    canManage,
    fetchCategories,
    pageDetails,
  } = props;

  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(25);

  function onChangeRows(viewRows) {
    fetchCategories(1, query, viewRows);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchCategories(page, query, rows);
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <div className="bg_themed container-fluid">
          {/* <div className="card-header"> */}
          <div className="row justify-content-between align-items-center">
            {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <h3>Categories</h3>
              </div> */}

            <div className="col-lg-4 col-md-6 col-sm-6 form-group p-1">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-right-0 "
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={Debouncer(() => {
                    if (query) {
                      fetchCategories(1, query, rows);
                    } else {
                      fetchCategories(1, "", rows);
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
                  Add Category
                </div>
              ) : (
                <div />
              )}
            </div>

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
                          fetchCategories(1, query, rows);
                        } else {
                          fetchCategories(1, "", rows);
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
                    ADD
                  </div>
                ) : (
                  <div />
                )}
              </div> */}
          </div>
          {/* </div> */}
          <div className="row">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Name</th>
                  <th>Brief Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => {
                  return (
                    <ViewCategoriesRow
                      category={category}
                      key={index}
                      index={index}
                      deleteCategory={deleteCategory}
                      editCategory={editCategory}
                      canManage={canManage}
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
