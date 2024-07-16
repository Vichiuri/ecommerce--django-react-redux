import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import ViewSaleRow from "./ViewSaleRow";
import EditSalesPersonModal from "./EditSalesPersonModal";
import Debouncer from "../../utils/Debouncer";
import CustomPagination from "../../widgets/CustomPagination";

export default function ViewSalesPeople(props) {
  const {
    changePage,
    sales_people,
    deleteSalesPerson,
    editSalesPerson,
    canManage,
    fetchSalesPeople,
    pageDetails,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [viewPerson, setViewPerson] = useState(null);
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(25);

  function viewEdit(person) {
    setViewPerson(person);
    setShowModal(true);
  }

  function onChangeRows(viewRows) {
    fetchSalesPeople(1, query, viewRows);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchSalesPeople(page, query, rows);
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <div className="bg_themed container-fluid">
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
                      fetchSalesPeople(1, query, rows);
                    } else {
                      fetchSalesPeople(1, "", rows);
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
                  Add Sales Person
                </div>
              ) : (
                <div />
              )}
            </div>
            {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <h3>Sales People</h3>
            </div>
            <div className="col-lg-8 col-md-4 col-sm-4 col-xs-4 row justify-content-end align-items-center">
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
                        fetchSalesPeople(1, query, rows);
                      } else {
                        fetchSalesPeople(1, "", rows);
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
                  Add Sales Person
                </div>
              ) : (
                <div />
              )} */}
            {/* </div> */}
          </div>
          {/* </div> */}
          <div className="row">
            <Table aria-label="collapsible table">
              <thead>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Actions</th>
                  <th>Retailers</th>
                </tr>
              </thead>
              <TableBody>
                {sales_people.map((person, index) => {
                  return (
                    <ViewSaleRow
                      index={index}
                      key={index}
                      person={person}
                      deleteSalesPerson={deleteSalesPerson}
                      viewEdit={viewEdit}
                      canManage={canManage}
                    />
                  );
                })}
              </TableBody>
            </Table>
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
      <EditSalesPersonModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        person={viewPerson}
        editSalesPerson={editSalesPerson}
      />
    </div>
  );
}
