import React, { useState } from "react";
import Debouncer from "../../utils/Debouncer";
import AddExchangeRateModal from "./AddExchangeRateModal";
import EditExchangeRateModal from "./EditExchangeRateModal";
import ExchangeRateRow from "./ExchangeRateRow";

export default function ExchangeRates(props) {
  const {
    c_units,
    units,
    addProductCompoundUnits,
    updateProductCompoundUnit,
    deleteProductCompoundUnit,
    canManage,
    fetchProductCompoundUnits,
    cPageDetails,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [viewCUnit, setViewCUnit] = useState(null);
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(10);

  function editCUnit(c_unit) {
    setViewCUnit(c_unit);
    setShowEditModal(true);
  }

  function onChangeC(viewRows) {
    fetchProductCompoundUnits(1, viewRows, query);
    setRows(viewRows);
  }

  function onChangeCPage(page) {
    fetchProductCompoundUnits(page, rows, query);
  }

  return (
    <div className="bg_themed container-fluid">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-4 col-md-6 col-sm-6 form-group align-items-center p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={Debouncer(() => {
                if (query) {
                  fetchProductCompoundUnits(1, rows, query);
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
              Add Compound Unit
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
      {/* <div className="card-header">
        <div className="row justify-content-between">
          <h2 className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
            Compound Units
          </h2>
          <div className="col-lg-8 col-md-4 col-sm-4 col-xs-4 row justify-content-end align-items-center">
            <div className="col-lg-7 col-md-5 col-sm-4 form-group">
              <div className="input-group">
                <div className="input-group-prepend"></div>
                <input
                  type="text"
                  className="form-control"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={Debouncer(() => {
                    if (query) {
                      fetchProductCompoundUnits(1, rows, query);
                    }
                  }, 2000)}
                  placeholder="Search"
                />
                <div className="input-group-append">
                  <i className="ml-1 fas fa-search"></i>
                </div>
              </div>
              {canManage ? (
                <div className="">
                  <i
                    onClick={() => setShowModal(true)}
                    className="fas fa-plus text-white btn btn-primary"
                  ></i>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div> */}

      <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>First</th>
              <th>Second</th>
              <th>Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {c_units.map((unit, index) => {
              return (
                <ExchangeRateRow
                  index={index}
                  unit={unit}
                  key={index}
                  deleteProductCompoundUnit={deleteProductCompoundUnit}
                  editCUnit={editCUnit}
                  canManage={canManage}
                />
              );
            })}
          </tbody>
        </table>
        {cPageDetails.last_page && cPageDetails.last_page > 1 ? (
          <CustomPagination
            rows={rows}
            changeRows={onChangeC}
            pageDetails={cPageDetails}
            changePage={onChangeCPage}
            customViewRows={[
              { name: 10, value: 10 },
              { name: 20, value: 20 },
              { name: 50, value: 50 },
            ]}
          />
        ) : (
          <div />
        )}
      </div>
      <AddExchangeRateModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        units={units}
        addProductCompoundUnits={addProductCompoundUnits}
      />
      <EditExchangeRateModal
        show={showEditModal}
        handleModal={() => setShowEditModal(!showEditModal)}
        units={units}
        c_unit={viewCUnit}
        updateProductCompoundUnit={updateProductCompoundUnit}
      />
    </div>
  );
}
