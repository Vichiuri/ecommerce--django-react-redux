import React, { useState } from "react";
import Debouncer from "../../utils/Debouncer";
import CustomPagination from "../../widgets/CustomPagination";
import OffersRow from "./OffersRow";

export default function ViewOffers(props) {
  const {
    changePage,
    offers,
    deleteOffer,
    editOffer,
    canManage,
    fetchPriceOffers,
    pageDetails,
  } = props;

  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(25);

  function onChangeRows(viewRows) {
    fetchPriceOffers(1, "", query, viewRows);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchPriceOffers(page, "", query, rows);
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="bg_themed container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-6 form-group">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-right-0 "
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={Debouncer(() => {
                    if (query) {
                      fetchPriceOffers(1, "", query, rows);
                    } else {
                      fetchPriceOffers(1, "", "", rows);
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
                  className="btn btn-primary btn-lg table_menu_btn mb-3 mr-3"
                >
                  Add Offer
                </div>
              ) : (
                <div />
              )}
              <div />
            </div>
            <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th></th>
                    <th>Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {offers.map((offer, index) => {
                    return (
                      <OffersRow
                        offer={offer}
                        key={index}
                        index={index}
                        deleteOffer={deleteOffer}
                        editOffer={editOffer}
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
    </div>
  );
}
