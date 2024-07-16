import React, { useState, useEffect } from "react";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import AddPriceListTable from "./AddPriceListTable";
import ViewProductPriceTable from "./ViewProductPriceTable";
import CustomAsyncPagination from "../../widgets/CustomAsyncPagination";
import { fetchSelectProduct } from "../../redux/Actions/Products";

export default function ViewProductPrice(props) {
  const {
    price_list,
    products,
    categories,
    price_levels,
    changePage,
    price_values,
    fetchPriceLists,
    price_data,
    updatePriceList,
    deletePriceList,
    addPriceList,
  } = props;

  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [product, setProduct] = useState("");
  const [from, setFrom] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (price_data) {
      let view_product = {
        value: price_data.product,
        label: price_data.product.name,
      };
      setCategory(price_data.category);
      setProduct(view_product);
      setFrom(price_data.from);
      setLevel(price_data.level);
      fetchPriceLists(
        1,
        price_data.product.id,
        price_data.from,
        price_data.level
      );
    }
  }, [price_data]);

  function uploadPriceList(
    minAmount,
    maxAmount,
    rate,
    disc_amount,
    perc_amount
  ) {
    if (level && product && minAmount && maxAmount && rate && from) {
      setIsError(null);
      setResponseMessage("");
      addPriceList({
        category_id: category,
        product_id: product.value.id,
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

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>View PriceList</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Price Lists"
                propsName="Add Price List"
                changePage={changePage}
              />
            </div>
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
                    fetchPriceLists(1, product.value.id, from, e.target.value);
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
                <label>Select Product</label>
                {/* <select
                  class="form-control"
                  value={product}
                  onChange={(e) => {
                    setProduct(e.target.value);
                    fetchPriceLists(1, e.target.value, from, level);
                  }}
                >
                  <option value="">...</option>
                  {products.map((product, index) => {
                    return (
                      <option key={index} value={product.id}>
                        {product.name}
                      </option>
                    );
                  })}
                </select> */}
                <CustomAsyncPagination
                  isMulti={false}
                  value={product}
                  setValue={(value) => {
                    setProduct(value);
                    fetchPriceLists(1, value.value.id, from, level);
                  }}
                  fetchData={fetchSelectProduct}
                  closeMenuOnSelect={true}
                />
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
                    fetchPriceLists(1, product.value.id, e.target.value, level);
                    setFrom(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            <ViewProductPriceTable
              price_list={price_list}
              currentPrice={product ? product.value.price : ""}
              uploadPriceList={uploadPriceList}
              updatePriceList={updatePriceList}
              deletePriceList={deletePriceList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
