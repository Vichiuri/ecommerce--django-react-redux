import React, { useState, useEffect } from "react";
import { fetchSelectPriceLevel } from "../../redux/Actions/Products";
import { fetchSelectRetailer } from "../../redux/Actions/Retailer";
import { fetchSelectSalesPeople } from "../../redux/Actions/Sales";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomAsyncPagination from "../../widgets/CustomAsyncPagination";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import PlaceOrderTable from "./PlaceOrderTable";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EditOrder(props) {
  const {
    retail_order,
    changePage,
    products,
    retailers,
    fetchPlaceOrders,
    sales_people,
    levels,
    updateAddRetailOrder,
    updateEditRetailOrder,
    deleteOrder,
    offers,
    fetchPriceOffers,
    addRetailerOrder,
    updateOrder,
    updateDeleteRetailOrder,
    place_orders, setResponse
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
  const [payment, setPayment] = useState(paymentTerms[0]);

  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (retail_order) {
      const view_retailer = {
        value: retail_order.retailer,
        label: retail_order.retailer.contact_name,
      };
      const salesman = {
        value: retail_order.salesman,
        label: retail_order.salesman.last_name
          ? `${retail_order.salesman.first_name} ${retail_order.salesman.last_name}`
          : retail_order.salesman.first_name,
      };

      if (retail_order.price_level) {
        const price_level = {
          value: retail_order.price_level,
          label: retail_order.price_level.level_name,
        };
        setLevel(price_level);
      }

      setRetailer(view_retailer);
      setSalesPerson(salesman);

      setPayment(retail_order.payment_terms);
    }
  }, [retailers, sales_people, retail_order]);

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
    if (
      retailer &&
      payment &&
      qty &&
      level &&
      product &&
      order_price &&
      per_price
    ) {
      updateAddRetailOrder({
        product_id: product,
        retailer_id: retailer.value.retailer.id,
        salesman_id: salePerson.value.id,
        qty,
        order_price,
        price_offers: viewOffers,
        ret_id: retail_order.id,
        level: level ? level.value.id : "",
        per_price,
        free_qty,
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
    fetchPlaceOrders(1, value);
  }

  function uploadRetailOrder(total, order_ids, viewOffers) {
    setIsError(null);
    setResponseMessage("");
    if (retailer && payment && salePerson && level) {
      addRetailerOrder({
        retailer_id: retailer.value.retailer.id,
        salesman_id: salePerson.value.id,
        total_cost: total,
        order_ids,
        payment_terms: payment,
        level: level ? level.value.id : "",
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
                <h3>Edit Order</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Orders"
                propsName="Edit Order"
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
                <label>Select Retailer* <CustomToolTip message={"Choose a retailer"} /> </label>
                <CustomAsyncPagination
                  isMulti={false}
                  value={retailer}
                  setValue={(value) => {
                    setRetailer(value);
                    changeRetailer(value);
                  }}
                  fetchData={fetchSelectRetailer}
                  closeMenuOnSelect={true}
                  isDisabled={true}
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2">
                <label>Select Sales Person* <CustomToolTip message={"Choose a salesperson"} />  </label>
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
                <label>Select Payment Terms*<CustomToolTip message={"Choose a Payment Term"} />  </label>
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
            deleteOrder={(id) => {
              let offers = [];
              for (let index = 0; index < place_orders.length; index++) {
                let order = place_orders[index];
                if (order.id != id) {
                  Array.prototype.push.apply(offers, [
                    ...order.price_offers.map((item) => item.id),
                  ]);
                }
              }
              updateDeleteRetailOrder({
                order_id: id,
                ret_id: retail_order.id,
                viewOffers: offers,
              });
            }}
            uploadRetailOrder={uploadRetailOrder}
            products={products}
            offers={offers}
            fetchPriceOffers={fetchPriceOffers}
            uploadOrder={uploadOrder}
            updateOrder={(viewOrder) => {
              let total = 0;

              let offers = [];
              for (let index = 0; index < place_orders.length; index++) {
                let order = place_orders[index];
                if (order.id != viewOrder.id) {
                  Array.prototype.push.apply(offers, [
                    ...order.price_offers.map((item) => item.id),
                  ]);
                  total += parseFloat(order.order_price);
                }
              }
              Array.prototype.push.apply(offers, [...viewOrder.price_offers]);
              total += parseFloat(viewOrder.order_price);
             
              updateEditRetailOrder({
                id: viewOrder.id,
                product_id: viewOrder.product_id,
                retailer_id: viewOrder.retailer_id,
                qty: viewOrder.qty,
                order_price: viewOrder.order_price,
                price_offers: viewOrder.price_offers,
                per_price: viewOrder.per_price,
                ret_id: retail_order.id,
                viewOffers: offers,
                free_qty: viewOrder.free_qty,
                total: total,
                level: level ? level.value.id : "",
              });
            }}
            level={level ? level.value.id : ""}
            isEdit={true}
          />
        </div>
      </div>
    </div>
  );
}
