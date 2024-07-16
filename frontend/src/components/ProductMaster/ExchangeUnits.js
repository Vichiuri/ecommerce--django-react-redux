import React, { useState } from "react";
import Debouncer from "../../utils/Debouncer";
import CustomPagination from "../../widgets/CustomPagination";
import AddExchangeUnitModal from "./AddExchangeUnitModal";
import EditExchangeUnit from "./EditExchangeUnit";
import ExchangeUnitsRow from "./ExchangeUnitsRow";

export default function ExchangeUnits({
  units,
  addProductUnits,
  deleteUnit,
  updateProductUnits,
  canManage,
  pageDetails,
  fetchProductUnits,
}) {
  const [showModal, setShowModal] = useState(false);
  const [showExchangeModal, setShowExchangeModal] = useState(false);
  const [viewUnit, setViewUnit] = useState(null);
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(6);

  function editExchangeUnit(unit) {
    setViewUnit(unit);
    setShowExchangeModal(true);
  }

  function onChangeRows(viewRows) {
    fetchProductUnits(1, viewRows, query);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchProductUnits(page, rows, query);
  }

  return (
    <div className="bg_themed container-fluid">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-4 col-md-6 col-sm-6 form-group align-items-center p-1">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={Debouncer(() => {
                if (query) {
                  fetchProductUnits(1, rows, query);
                } else {
                  fetchProductUnits(1, rows, "");
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
              onClick={() => setShowModal(true)}
              className="btn btn-primary btn-lg table_menu_btn mr-3"
            >
              Add Unit
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* <div className="card-header">
        <div className="row justify-content-between">
          <h2 className="col-lg-4 col-md-4 col-sm-6 col-xs-6">Units</h2>
          <div className="col-lg-8 col-md-4 col-sm-4 col-xs-4 row justify-content-end align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6 form-group">
              <div className="input-group">
                <div className="input-group-prepend"></div>
                <input
                  type="text"
                  className="form-control"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={Debouncer(() => {
                    if (query) {
                      fetchProductUnits(1, rows, query);
                    } else {
                      fetchProductUnits(1, rows, "");
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
                onClick={() => setShowModal(true)}
                className="btn btn-primary btn-lg table_menu_btn mb-3 mr-3"
              >
                ADD
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
      */}
      <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {units.map((unit, index) => {
              return (
                <ExchangeUnitsRow
                  key={index}
                  index={index}
                  unit={unit}
                  deleteUnit={deleteUnit}
                  editExchangeUnit={editExchangeUnit}
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
            customViewRows={[
              { name: 6, value: 6 },
              { name: 15, value: 15 },
              { name: 20, value: 20 },
            ]}
          />
        ) : (
          <div />
        )}
      </div>
      <AddExchangeUnitModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        addProductUnits={addProductUnits}
      />
      <EditExchangeUnit
        unit={viewUnit}
        updateProductUnits={updateProductUnits}
        show={showExchangeModal}
        handleModal={() => setShowExchangeModal(!showExchangeModal)}
      />
    </div>
  );
}
