import React, { useState } from "react";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import AddPriceListTable from "./AddPriceListTable";

export default function AddPriceList(props) {
  const {
    changePage,
    products,
    categories,
    price_levels,
    addPriceList,
    fetchProducts,
    price_list,
    fetchPriceLists,
    updatePriceList,
    deletePriceList,
    goToViewProduct,
  } = props;

  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [product, setProduct] = useState("");
  const [from, setFrom] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  function uploadPriceList(
    minAmount,
    maxAmount,
    rate,
    disc_amount,
    perc_amount
  ) {
    setIsError(null);
    setResponseMessage("");
    if (
      level &&
      product &&
      minAmount &&
      maxAmount &&
      rate &&
      disc_amount &&
      perc_amount &&
      from
    ) {
      addPriceList({
        category_id: category,
        product_id: product,
        level_id: level,
        min_amount: minAmount,
        max_amount: maxAmount,
        rate: rate,
        discount_amount: disc_amount,
        discount_percent: perc_amount,
        date_from: from,
      });
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant fields");
    }
  }

  function viewPriceLists(product) {
    goToViewProduct({ product, category, level, from });
  }

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <div className="card">
          <div className="card-header">
            <h3> PriceList</h3>
          </div>
          <div className="card-content">
            <CustomAlertBar
              isError={isError}
              responseMessage={responseMessage}
            />

            <div className="row justify-content-between">
              <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group">
                <label>Select Level*</label>
                <select
                  class="form-control"
                  value={level}
                  onChange={(e) => {
                    fetchPriceLists(1, category, from, e.target.value);
                    setLevel(e.target.value);
                  }}
                  required
                  autoFocus
                >
                  <option value="">...</option>
                  {price_levels.map((level, index) => {
                    return (
                      <option key={index} value={level.id}>
                        {level.level_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12  form-group">
                <label>Select Category</label>
                <select
                  class="form-control"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    fetchPriceLists(1, e.target.value, from, level);
                  }}
                >
                  <option value="">...</option>
                  {categories.map((category, index) => {
                    return (
                      <option key={index} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group">
                <label>Applicable From*</label>

                <input
                  type="date"
                  className="form-control"
                  placeholder="Please enter date applicable"
                  value={from}
                  name="from"
                  onChange={(e) => {
                    fetchPriceLists(1, category, e.target.value, level);
                    setFrom(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            <AddPriceListTable
              uploadPriceList={uploadPriceList}
              price_list={price_list}
              updatePriceList={updatePriceList}
              deletePriceList={deletePriceList}
              viewPriceLists={viewPriceLists}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
