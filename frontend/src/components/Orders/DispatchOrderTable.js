import React, { Fragment, useState, useEffect } from "react";
import DispatchOrderRow from "./DispatchOrderRow";

export default function DispatchOrderTable(props) {
  const { ret_orders, createDispatch, createPartialOrder } = props;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const newArray = [...ret_orders.filter((item) => item.delivered == false)];
    setOrders(newArray);
  }, [ret_orders]);

  function checkDispatch() {
    for (let i = 0; i < orders.length; i++) {
      let order = orders[i];

      if (order.initialValue && order.initialValue != order.total_qty) {
        return createPartialOrder(orders);
      }
    }
    return createDispatch();
  }

  function updateQty(id, qty) {
    if (qty) {
      let newArray = orders.map((item) => {
        let viewItem = item;
        if (viewItem.id == id) {
          if (!viewItem.initialValue) {
            viewItem.initialValue = viewItem.total_qty;
          }
          viewItem.total_qty = parseFloat(qty);
        }
        return viewItem;
      });

      setOrders(newArray);
    }
  }

  return (
    <Fragment>
      <div className="card-header">
        <div className="row justify-content-between">
          <h3>View Orders</h3>
          <div
            onClick={() => checkDispatch()}
            className="btn btn-success btn-large"
          >
            Dispatch Order
          </div>
        </div>
      </div>
      <div className="card-content">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product *</th>
              <th>Quantity to dispatch *</th>
              <th>Total Products</th>
              <th>Delivered Products</th>
              <th>Remaining Products</th>
              {/* <th>Offers</th> */}
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {orders ? (
              orders.map((view_order, index) => {
                return (
                  <DispatchOrderRow
                    key={index}
                    index={index}
                    order={view_order}
                    updateQty={updateQty}
                  />
                );
              })
            ) : (
              <div />
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
