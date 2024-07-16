import React, { Fragment, useState } from "react";
import Debouncer from "../../utils/Debouncer";
import AddPriceListRow from "./AddPriceListRow";

export default function AddPriceListTable({
  uploadPriceList,
  price_list,
  deletePriceList,
  updatePriceList,
  viewPriceLists,
}) {
  const [query, setQuery] = useState("");

  return (
    <Fragment>
      <div className="card-header">
        <div className="row justify-content-between">
          <h3>Price Table</h3>
          <div className="col-lg-4 col-md-6 col-sm-6 form-group">
            {/* <div className="input-group">
              <div className="input-group-prepend"></div>
              <input
                type="text"
                className="form-control"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={Debouncer(() => {
                  if (query) {
                    // searchOrders(query);
                  }
                }, 2000)}
                placeholder="Search"
              />
              <div className="input-group-append">
                <i className="ml-1 fas fa-search"></i>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="row">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Min Qty*</th>
              <th>Max Qty*</th>
              <th>Rate*(KES)</th>
              <th>Disc Amount*(KES)</th>
              <th>Percentage(%)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {price_list.map((price, index) => {
              return (
                <AddPriceListRow
                  price={price}
                  index={index}
                  key={index}
                  updatePriceList={updatePriceList}
                  deletePriceList={deletePriceList}
                  viewPriceLists={viewPriceLists}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
