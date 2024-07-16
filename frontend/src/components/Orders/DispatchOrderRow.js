import React, { useState, Fragment, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import Debouncer from "../../utils/Debouncer";

export default function DispatchOrderRow({ index, order, updateQty }) {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    setQty(order.total_qty);
  }, [order]);

  function getRemaining(){
    let pQuantity = order.qty
    let pFree = order.free_qty
    let pDelivered = order.delivered_qty
    let remaining = (pQuantity + pFree) - pDelivered
    return remaining
  }

  return (
    <Fragment key={index}>
      <tr>
        <td width="10%">{index + 1}</td>
        <td width="15%">{order.product != null ? order.product.name : ""}</td>
        <td width="15%">
          <input
            type="number"
            className="form-control"
            placeholder="Please input product quantity"
            name="qty"
            value={qty}
            onChange={(e) => {
              if (order.initialValue) {
                if (e.target.value <= order.initialValue) {
                  setQty(e.target.value);
                } else {
                  setQty(order.initialValue);
                }
              } else {
                if (e.target.value <= order.total_qty) {
                  setQty(e.target.value);
                } else {
                  setQty(order.total_qty);
                }
              }
            }}
            onKeyDown={Debouncer((e) => {
              updateQty(order.id, e.target.value);
            }, 2000)}
            required
          />
        </td>
        <td width="15%">{order.qty + order.free_qty}</td>
        <td width="15%">{order.delivered_qty}</td>
        <td width="10%">{getRemaining()}</td>
        {/* <td width="10%">
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
        </td> */}
        {/* <td width="10%" className="bg_themed">
          <i
            className="fas fa-trash btn_type"
            onClick={() => deleteOrder(order.id)}
          ></i>
        </td> */}
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
