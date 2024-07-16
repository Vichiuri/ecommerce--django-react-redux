import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import Debouncer from "../../utils/Debouncer";
import PlaceOrderRow from "./PlaceOrderRow";
import CustomToolTip from "../../widgets/CustomToolTip";

/** Table for placing and editing orders */
export default function PlaceOrderTable(props) {
  const {
    place_orders,
    deleteOrder,
    uploadOrder,
    uploadRetailOrder,
    products,
    fetchPriceOffers,
    offers,
    updateOrder,
    isEdit,
    level,
  } = props;

  const [product, setProduct] = useState("");
  const [qty, setQty] = useState(1);
  const [perPrice, setPerPrice] = useState(0);
  const [order_price, setOrderPrice] = useState(0);
  const [viewOffers, setViewOffers] = useState([]);
  const [selectOffers, setSelectOffers] = useState([]);
  const [selectProducts, setSelectProducts] = useState([]);

  const [currentOffer, setCurrentOffer] = useState("");
  const [currentProduct, setCurrentProduct] = useState("");
  const [addedOffers, setAddedOffers] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);
  const [free_qty, setFreeQty] = useState(0);
  const [offer_key, setOfferKey] = useState(0);
  const [product_key, setProductKey] = useState(5);

  useEffect(() => {
    if (place_orders) {
      const currentViewOffers = place_orders.map((order) => {
        if (order.price_offers.length > 0) {
          return order.price_offers[0];
        }
      });

      const currentProducts = place_orders.map((order) => {
        return order.product;
      });

      setAddedOffers(
        currentViewOffers.map((item) => {
          if (item) {
            return {
              value: item,
              label: item.detail_name,
            };
          }
        })
      );
      setAddedProducts(
        currentProducts.map((item) => {
          return {
            value: item,
            label: item.name,
          };
        })
      );
    }
    const keys = Math.random();
    setOfferKey(keys);
    setProductKey(keys + 5);
  }, [offers, place_orders, products]);

  function addByOffer(value) {
    const viewOffer = value.value;

    const product = viewOffer.x_item;
    const quantity = viewOffer.x_amt;

    let price = product.price * quantity;
    let free_qty = 0;

    if (viewOffer.scheme == "BnXEX") {
      let variance = Math.floor(parseInt(quantity) / parseInt(viewOffer.x_amt));
      for (let index = 0; index < variance; index++) {
        free_qty += viewOffer.y_amt;
      }
    }
    // else if (viewOffer.scheme == "BnXy%O") {
    //   let percDisc = 100 - viewOffer.y_amt;

    //   price = price * (percDisc / 100);
    // }

    setViewOffers([...viewOffers, viewOffer.id]);
    setCurrentOffer(value);
    setCurrentProduct({ value: product, label: product.name });
    // setSelectOffers([...selectOffers, value]);
    setOrderPrice(price);
    setPerPrice(product.price);
    setQty(quantity);
    setProduct(product.id);
    setFreeQty(free_qty);
  }

  function fetchSelectOffers(search, loadOptions, { page }) {
    const token = localStorage.getItem("token");
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    const url = search
      ? `../retailer/api/view_price_offers?page=${page}&query=${search}`
      : `../retailer/api/view_price_offers?page=${page}`;

    return new Promise((resolve, reject) => {
      axios
        .get(url, config)
        .then((res) => {
          let viewLastPage = false;
          if (res.data.last_page > page) {
            viewLastPage = true;
          }

          let view_offers = res.data.price_offers.map((item) => {
            return {
              value: item,
              label: item.detail_name,
            };
          });
          let final_offers = [];
          if (addedOffers.length > 0) {
            final_offers = view_offers.filter(
              (o_item) =>
                !addedOffers.some((v_item) => {
                  if (v_item) {
                    return v_item.value.id == o_item.value.id;
                  }
                })
            );
          } else {
            final_offers = view_offers;
          }

          resolve({
            options: final_offers,
            hasMore: viewLastPage,
            additional: {
              page: page + 1,
            },
          });
        })
        .catch((error) => {
          console.log(error);
          const errors = {
            responseMessage: error.response.data,
            status: error.response.status,
          };
          setIsError(true);
          setResponseMessage(errors.responseMessage);
          reject(error.responseMessage);
        });
    });
  }

  function fetchSelectProduct(search, loadOptions, { page }) {
    const token = localStorage.getItem("token");
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    const url = search
      ? `../retailer/api/products?page=${page}&query=${search}`
      : `../retailer/api/products?page=${page}`;

    return new Promise((resolve, reject) => {
      axios
        .get(url, config)
        .then((res) => {
          let viewLastPage = false;
          if (res.data.last_page > page) {
            viewLastPage = true;
          }
          let view_products = res.data.products.map((item) => {
            return {
              value: item,
              label: item.name,
            };
          });

          let final_products = [];
          if (addedProducts.length > 0) {
            final_products = view_products.filter(
              (v_item) =>
                !addedProducts.some((t_item) => {
                  return t_item.value.id == v_item.value.id;
                })
            );
          } else {
            final_products = view_products;
          }

          resolve({
            options: final_products,
            hasMore: viewLastPage,
            additional: {
              page: page + 1,
            },
          });
        })
        .catch((error) => {
          const errors = {
            responseMessage: error.response.data,
            status: error.response.status,
          };
          setIsError(true);
          setResponseMessage(errors.responseMessage);
          reject(error.responseMessage);
        });
    });
  }

  function orderPrice(qty, product, offers, per_price) {
    let view_product = product;
    let price = per_price ? per_price * qty : view_product.price * qty;
    let offers_array = [];
    let to_select = [];
    let view_qty = parseInt(qty);
    let free_qty = 0;

    for (let i = 0; i < offers.length; i++) {
      const viewOffer = offers[i];

      if (view_qty >= viewOffer.x_amt) {
        offers_array.push(viewOffer);
        to_select.push(viewOffer);
        if (viewOffer.scheme == "BnXEX") {
          let variance = Math.floor(view_qty / parseInt(viewOffer.x_amt));
          for (let index = 0; index < variance; index++) {
            free_qty += viewOffer.y_amt;
          }
        }
        // else if (viewOffer.scheme == "BnXy%O") {
        //   let percDisc = 100 - viewOffer.y_amt;
        //   price = price * (percDisc / 100);
        // }
      }
    }

    setViewOffers(
      offers_array.map((item) => {
        return item.id;
      })
    );
    setSelectOffers(to_select);
    setCurrentOffer(
      offers_array[0]
        ? { value: offers_array[0], label: offers_array[0].detail_name }
        : ""
    );
    setProduct(product.id);
    setOrderPrice(price);
    setPerPrice(per_price ?? view_product.price);
    setFreeQty(free_qty);
  }

  function fetchCurrentOffers(page, value, current_qty) {
    const token = localStorage.getItem("token");
    let product = value.value;
    let config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    let url = `../retailer/api/view_price_offers/?page=${page}&product_id=${product.id}`;
    if (current_qty && level) {
      url = url + `&prod_qty=${current_qty}&level_id=${level}`;
    }

    axios
      .get(url, config)
      .then((res) => {
        orderPrice(
          current_qty,
          product,
          res.data.price_offers,
          res.data.per_price
        );
        setCurrentProduct(value);
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        console.log(errors);
      });
  }

  function clearAddOrder() {
    setProduct("");
    setPerPrice(1);
    setQty(1);
    setOrderPrice(1);
    setViewOffers([]);
    setCurrentProduct("");
    setCurrentOffer("");
    setFreeQty(0);
  }

  function placeOrder() {
    let total = 0;
    let order_ids = [];

    let offers = [];
    for (let index = 0; index < place_orders.length; index++) {
      let order = place_orders[index];
      Array.prototype.push.apply(offers, [
        ...order.price_offers.map((item) => item.id),
      ]);
      total += parseFloat(order.order_price);
      order_ids.push(order.id);
    }

    uploadRetailOrder(total, order_ids, offers);
  }

  return (
    <Fragment>
      <div className="card-header">
        <div className="row justify-content-between">
          <h3>{isEdit ? "Edit Orders" : "Place Order"}</h3>
          {!isEdit ? (
            <div
              onClick={() => placeOrder()}
              className="btn btn-success btn-large"
            >
              Place Order
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Offers <CustomToolTip message={"Order Products on Offer"}/></th>
            <th>Product* <CustomToolTip message={"Choose a Product"}/></th>
            <th>Quantity* <CustomToolTip message={"Enter Product Quantity"}/> </th>
            <th className="text-right">Free*</th>
            <th className="text-right">Per Unit*</th>
            <th className="text-right">Total*</th>
            <th className="text-right">Actions</th>
            <th>{"  "}</th>
          </tr>
        </thead>
        <tbody>
          {place_orders ? (
            place_orders.map((order, index) => {
              return (
                <PlaceOrderRow
                  key={index}
                  index={index}
                  order={order}
                  deleteOrder={deleteOrder}
                  offers={offers}
                  fetchPriceOffers={fetchPriceOffers}
                  updateOrder={updateOrder}
                  level={level}
                />
              );
            })
          ) : (
            <div />
          )}
          <tr>
            <td width="10%">#</td>
            <td width="15%">
              <AsyncPaginate
                loadOptions={fetchSelectOffers}
                value={currentOffer}
                onChange={(value) => addByOffer(value)}
                additional={{
                  page: 1,
                }}
                key={offer_key}
                loadOptionsOnMenuOpen={true}
                closeMenuOnSelect={true}
              />
            </td>
            <td width="15%">
              <AsyncPaginate
                loadOptions={fetchSelectProduct}
                value={currentProduct}
                onChange={(value) => fetchCurrentOffers(1, value, qty)}
                additional={{
                  page: 1,
                }}
                key={product_key}
                closeMenuOnSelect={true}
              />
            </td>
            <td width="15%">
              <div className="form-label-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Please input product quantity"
                  name="qty"
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                  onKeyUp={Debouncer((e) => {
                    if (qty) {
                      fetchCurrentOffers(1, currentProduct, qty);
                    }
                  }, 2000)}
                  required
                />
              </div>
            </td>
            <td width="10%" className="text-right">
              {free_qty}
            </td>
            <td width="15%" className="text-right">
              {perPrice}
            </td>
            <td width="10%" className="text-right">
              {order_price}
            </td>
            <td width="10%" className="text-right">
              <div
                onClick={() => {
                  uploadOrder(
                    currentProduct.value.id,
                    qty,
                    order_price,
                    viewOffers,
                    free_qty,
                    perPrice
                  );

                  clearAddOrder();
                }}
                className="btn btn-primary btn-lg"
              >
                Add
              </div>
            </td>
            <td>{"  "}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
