import React, { useState, Fragment, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import Debouncer from "../../utils/Debouncer";
import axios from "axios";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import IconButton from "@material-ui/core/IconButton";
import FormatCommas from "../../utils/FormatCommas";

export default function PlaceOrderRow({
  index,
  order,
  deleteOrder,
  updateOrder,
  level,
}) {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(order.qty ? order.qty : 0);
  const [order_price, setOrderPrice] = useState(
    order.order_price ? order.order_price : 0
  );
  const [per_price, setPerPrice] = useState(
    order.per_price ? order.per_price : 0
  );
  const [free_qty, setFreeQty] = useState(order.free_qty ? order.free_qty : 0);
  const [viewOffers, setViewOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState(index);

  useEffect(() => {
    if (order) {
      setQty(order.qty ? order.qty : 0);
      setFreeQty(order.free_qty ? order.free_qty : 0);
      setPerPrice(order.per_price ? order.per_price : 0);
      setOrderPrice(order.order_price ? order.order_price : 0);
    }
    setKey(Math.random() + index);
  }, [order]);

  function orderPrice(value, offers) {
    let price = order.product.price * value;
    let offers_array = [];
    let view_qty = parseInt(value);
    let free_qty = 0;

    for (let i = 0; i < offers.length; i++) {
      const viewOffer = offers[i];

      if (value >= viewOffer.x_amt) {
        offers_array.push(viewOffer.id);
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

    setViewOffers(offers_array);
    setOrderPrice(price);

    updateOrder(
      {
        id: order.id,
        product_id: order.product.id,
        retailer_id: order.retailer,
        qty: value,
        free_qty: free_qty,
        order_price: price,
        price_offers: offers_array,
        per_price,
        level,
      },
      index
    );
    setQty(value);
  }

  function fetchCurrentOffers(page, product, current_qty) {
    setIsLoading(true);
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
    axios
      .get(
        `../retailer/api/priceOffer?page=${page}&product_id=${product}`,
        config
      )
      .then((res) => {
        setIsLoading(false);
        orderPrice(current_qty, res.data.price_offers);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        console.log(errors);
      });
  }

  return (
    <Fragment key={index}>
      <SimpleBackdrop open={isLoading} />
      <tr>
        <td width="10%">{index + 1}</td>
        <td width="15%">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <i className="fas fa-sort-up bg_themed"></i>
            ) : (
              <i className="fas fa-sort-down bg_themed"></i>
            )}
          </IconButton>
        </td>
        <td width="15%">{order.product != null ? order.product.name : ""}</td>
        <td width="15%">
          <input
            type="number"
            className="form-control"
            placeholder="Please input product quantity"
            name="qty"
            value={qty}
            onChange={(e) => {
              setQty(e.target.value);
            }}
            key={key}
            onKeyUp={Debouncer((e) => {
              if (qty) {
                fetchCurrentOffers(1, order.product.id, qty);
              }
            }, 2000)}
          />
        </td>
        <td width="10%" className="text-right">
          {free_qty}
        </td>
        <td width="15%" className="text-right">
          {order.order_price_currency}{" "}
          {per_price != null ? FormatCommas(per_price) : ""}
        </td>
        <td width="10%" className="text-right">
          {order.order_price_currency} {FormatCommas(order_price)}
        </td>

        <td width="10%" className="bg_themed text-right">
          <i
            className="fas fa-trash btn_type"
            onClick={() => deleteOrder(order.id)}
          ></i>
        </td>
        <td>{"  "}</td>
      </tr>
      <tr>
        <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Offers
              </Typography>
              <Table size="small" aria-label="purchases">
                <thead>
                  <tr>
                    <th>#</th>
                    <th></th>
                    <th>Name</th>
                    <th align="right">Scheme</th>
                  </tr>
                </thead>
                <TableBody>
                  {order.price_offers.map((offer, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="offer_order_img">
                            <img
                              src={
                                offer.pic
                                  ? `..${offer.pic}`
                                  : "../static/images/logo.svg"
                              }
                              alt="offer logo"
                            />
                          </div>
                        </td>
                        <td>{offer.name}</td>
                        <td>{offer.detail_name ? offer.detail_name : ""}</td>
                      </tr>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </td>
      </tr>
    </Fragment>
  );
}
