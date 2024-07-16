import React, { useState } from "react";
import { fetchSelectPriceLevel } from "../../redux/Actions/Products";
import { fetchSelectRetailer } from "../../redux/Actions/Retailer";
import { fetchSelectSalesPeople } from "../../redux/Actions/Sales";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomAsyncPagination from "../../widgets/CustomAsyncPagination";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import PlaceOrderTable from "./PlaceOrderTable";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function AddOrder(props) {
  const {
    changePage,
    products,
    fetchPlaceOrders,
    place_orders,
    addOrder,
    deleteOrder,
    offers,
    fetchPriceOffers,
    addRetailerOrder,
    updateOrder, setResponse
  } = props;

  const paymentTerms = [
    "Cash",
    "Mobile Money (M-pesa)",
    "Debit Cards",
    "Credit Cards",
    "Cheque",
  ];

  const [retailer, setRetailer] = useState("");
  const [salePerson, setSalesPerson] = useState("");
  const [level, setLevel] = useState("");
  const [payment, setPayment] = useState("");

  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  function uploadOrder(
    product,
    qty,
    order_price,
    viewOffers,
    free_qty,
    per_price
  ) {
    setIsError(null);
    setResponseMessage("");
    if (retailer && payment && qty && level && product && order_price) {
      
      addOrder({
        product_id: product,
        // ! Current Retailer is of retailer type modal
        retailer_id: retailer.value.retailer.id,
        level: level.value.id,
        qty,
        order_price,
        price_offers: viewOffers,
        free_qty,
        per_price,
      });
    } else if (!retailer) {
      setIsError(true);
      setResponseMessage("Please select a retailer");
    } else if (!salePerson) {
      setIsError(true);
      setResponseMessage("Please select a sales person");
    } else if (!level) {
      setIsError(true);
      setResponseMessage("Please select a price level");
    } else if (!payment) {
      setIsError(true);
      setResponseMessage("Please select a payment method");
    } else if (!qty) {
      setIsError(true);
      setResponseMessage("Please input product quantity");
    } else {
      setIsError(true);
      setResponseMessage("Please enter all fields");
    }
  }

  function changeRetailer(value) {
   
    if(value.value.salesman) {
      const salesman = {
        value: value.value.salesman,
        label: value.value.salesman.last_name
          ? `${value.value.salesman.first_name} ${value.value.salesman.last_name}`
          : value.value.salesman.first_name,
      };
      setSalesPerson(salesman);
    }
    
    if (value.value.price_level) {
      const price_level = {
        value: value.value.price_level,
        label: value.value.price_level.level_name,
      };
      setLevel(price_level);
    }

    fetchPlaceOrders(1, value.value.retailer.id);
  }

  function uploadRetailOrder(total, order_ids, viewOffers) {
    setIsError(null);
    setResponseMessage("");
    if (retailer && payment && salePerson && level) {
      console.log(salePerson);
      addRetailerOrder({
        // ! Current Retailer is of retailer type modal
        retailer_id: retailer.value.retailer.id,
        salesman_id: salePerson.value.id,
        total_cost: total,
        order_ids,
        payment_terms: payment,
        level: level.value.id,
        viewOffers: viewOffers,
      });
    } else if (!retailer) {
      setIsError(true);
      setResponseMessage("Please select a retailer");
    } else if (!salePerson) {
      setIsError(true);
      setResponseMessage("Please select a sales person");
    } else if (!level) {
      setIsError(true);
      setResponseMessage("Please select a price level");
    } else if (!payment) {
      setIsError(true);
      setResponseMessage("Please select a payment method");
    } else {
      setIsError(true);
      setResponseMessage("Please enter all fields");
    }
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>Add Order</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Orders"
                propsName="Add Order"
                changePage={changePage}
              />
            </div>
          </div>
          <div className="container-fluid">
            <CustomAlertBar
              isError={isError}
              responseMessage={responseMessage}
            />
            <div className="row justify-content-between">
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2">
                <label>Select Retailer*<CustomToolTip message={"Choose a retailer"} />  </label>
                <CustomAsyncPagination
                  isMulti={false}
                  value={retailer}
                  setValue={(value) => {
                    setRetailer(value);
                    changeRetailer(value);
                  }}
                  fetchData={fetchSelectRetailer}
                  closeMenuOnSelect={true}
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2">
                <label>Select Sales Person*<CustomToolTip message={"Choose a salesperson"} />  </label>
                <CustomAsyncPagination
                  isMulti={false}
                  value={salePerson}
                  setValue={(value) => setSalesPerson(value)}
                  fetchData={fetchSelectSalesPeople}
                  closeMenuOnSelect={true}
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 form-group  mt-2">
                <label>Select Price Level* <CustomToolTip message={"Choose a Price Level"} /> </label>
                <CustomAsyncPagination
                  isMulti={false}
                  value={level}
                  setValue={(value) => setLevel(value)}
                  fetchData={fetchSelectPriceLevel}
                  closeMenuOnSelect={true}
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 form-group  mt-2">
                <label>Select Payment Terms* <CustomToolTip message={"Choose a Payment Term"} /></label>
                <select
                  className="form-control"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  required
                >
                  <option value="">...</option>
                  {paymentTerms.map((term, index) => {
                    return (
                      <option key={index} value={term}>
                        {term}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <PlaceOrderTable
            place_orders={place_orders}
            deleteOrder={deleteOrder}
            uploadRetailOrder={uploadRetailOrder}
            products={products}
            offers={offers}
            fetchPriceOffers={fetchPriceOffers}
            uploadOrder={uploadOrder}
            updateOrder={updateOrder}
            level={level ? level.value.id : ""}
          />
        </div>
      </div>
    </div>
  );
}
