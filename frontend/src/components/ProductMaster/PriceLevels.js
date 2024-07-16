import React, { useState } from "react";
import AddPriceLevelModal from "./AddPriceLevelModal";
import EditPriceLevel from "./EditPriceLevel";
import PriceLevelRow from "./PriceLevelRow";
import Debouncer from "../../utils/Debouncer";
import CustomPagination from "../../widgets/CustomPagination";


export default function PriceLevels(props) {
  const {
    price_levels,
    addProductLevels,
    updatePriceLevel,
    deletePriceLevel,
    canManage,
    fetchProductPriceLevels,
    levelDetails,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [viewLevel, setViewLevel] = useState(null);
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(6);

  function editLevel(level) {
    setViewLevel(level);
    setShowEditModal(true);
  }

  function onChangeLevels(viewRows) {
    fetchProductPriceLevels(1, viewRows, query);
    setRows(viewRows);
  }

  function onChangeLevelPage(page) {
    fetchProductPriceLevels(page, rows, query);
  }

  return (
    <div className="bg_themed container-fluid pl-2 pr-2">
      <div className="row justify-content-between align-items-center pl-2 pr-2 ">
        <div className="col-lg-4 col-md-6 col-sm-6 form-group align-items-center p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={Debouncer(() => {
                if (query) {
                  fetchProductPriceLevels(1, rows, query);
                } else {
                  fetchProductPriceLevels(1, rows, "");
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
              Add Level 
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* <div className="card-header">
        <div className="row justify-content-between">
          <h2 className="col-lg-4 col-md-4 col-sm-6 col-xs-6">Price Levels</h2>
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
                      fetchProductPriceLevels(1, rows, query);
                    } else {
                      fetchProductPriceLevels(1, rows, "");
                    }
                  }, 2000)}
                  placeholder="Search"
                />
                <div className="input-group-append">
                  <i className="ml-1 fas fa-search"></i>
                </div>
              </div>
              {canManage ? (
                <div class="">
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

      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-3">
        <ul className="list-group container-fluid">
          {price_levels.map((level, index) => {
            return (
              <PriceLevelRow
                level={level}
                key={index}
                editLevel={editLevel}
                deletePriceLevel={deletePriceLevel}
                canManage={canManage}
              />
            );
          })}
        </ul>
        {levelDetails.last_page && levelDetails.last_page > 1 ? (
          <CustomPagination
            rows={rows}
            changeRows={onChangeLevels}
            pageDetails={levelDetails}
            changePage={onChangeLevelPage}
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
      <AddPriceLevelModal
        show={showModal}
        addProductLevels={addProductLevels}
        handleModal={() => setShowModal(!showModal)}
      />
      <EditPriceLevel
        show={showEditModal}
        updatePriceLevel={updatePriceLevel}
        handleModal={() => setShowEditModal(!showEditModal)}
        level={viewLevel}
      />
    </div>
  );
}
