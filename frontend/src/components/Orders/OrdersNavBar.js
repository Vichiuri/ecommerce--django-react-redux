import React, { useEffect } from "react";

export default function OrdersNavBar(props) {
  const { fetchOrders, currentIndex, setCurrentIndex, ordersTypes } = props;
  useEffect(() => {
    setCurrentIndex(0);
  }, []);
  return (
    <div className="order-bar bg_themed overlay-scrollbar">
      <ul className="tab-bar tab_overflow">
        {ordersTypes.map((order, index) => {
          return (
            <li
              onClick={() => {
                fetchOrders(1, order.status);
                setCurrentIndex(index);
              }}
              key={index}
              className={
                index == currentIndex ? "tab wave indicator" : "tab wave"
              }
            >
              {order.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
