import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import FormatCommas from "../../utils/FormatCommas";

export default function DashBoardValues({ dashBoardCount }) {
  const [complete_orders, setCompleteOrders] = useState(0);
  const [total_orders, setTotalOrders] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [products, setProducts] = useState(0);
  const [retailers, setRetailers] = useState(0);

  const [stats, setStats] = useState([]);

  useEffect(() => {
    if (dashBoardCount) {
      setProducts(
        dashBoardCount.product_count ? dashBoardCount.product_count : 0
      );
      setTotalOrders(
        dashBoardCount.total_orders ? dashBoardCount.total_orders : 0
      );
      setCompleteOrders(
        dashBoardCount.complete_orders ? dashBoardCount.complete_orders : 0
      );
      setRevenue(dashBoardCount.revenue ? dashBoardCount.revenue : 0);
      setRetailers(
        dashBoardCount.retailers_count ? dashBoardCount.retailers_count : 0
      );
    }
    const stat_items = localStorage.getItem("stat_items");
    let viewArray = [];
    if (stat_items) {
      viewArray = JSON.parse(stat_items);
      viewArray = viewArray.sort((a, b) => a.position - b.position);
    } else {
      viewArray = [
        { name: "orders", visibility: true, position: 0 },
        { name: "revenue", visibility: true, position: 1 },
        { name: "products", visibility: true, position: 2 },
        { name: "retailer", visibility: true, position: 3 },
      ];
      localStorage.setItem("stat_items", JSON.stringify(viewArray));
    }
    setStats(viewArray);
  }, [dashBoardCount]);

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    let newArray = [];
    let initial = result.source.index;
    let final = result.destination.index;
    if (final != initial) {
      if (final > initial) {
        newArray = stats.map((item) => {
          let viewitem = item;
          if (viewitem.position >= initial && viewitem.position <= final) {
            if (viewitem.position != initial) {
              viewitem.position -= 1;
            } else {
              viewitem.position = final;
            }
          }

          return viewitem;
        });
      } else {
        newArray = stats.map((item) => {
          let viewitem = item;
          if (viewitem.position >= final && viewitem.position <= initial) {
            if (viewitem.position != initial) {
              viewitem.position += 1;
            } else {
              viewitem.position = final;
            }
          }

          return viewitem;
        });
      }

      let viewStats = newArray.sort((a, b) => a.position - b.position);
      localStorage.setItem("stat_items", JSON.stringify(viewStats));
      setStats(viewStats);
    }
  }

  const orders = (
    <Link to="/home/orders" className="text-Deco">
      <div className="card card-stats">
        <div className="card-header card-header-warning card-header-icon">
          <div className="card-icon">
            <i className="fas fa-copy display-4 text-warning"></i>
          </div>
          <p className="card-category">Order</p>
          <h3 className="card-title">
            {complete_orders}/{total_orders}
            <small className="mr-2"> Orders</small>
          </h3>
        </div>
        <div className="card-footer">
          {complete_orders < total_orders ? (
            <div className="stats">
              <i className="fas fa-exclamation-triangle text-danger"></i>
              <label className="ml-2"> Orders not complete</label>
            </div>
          ) : (
            <div className="stats">
              <i className="fas fa-thumbs-up text-success"></i>
              <label className="ml-2"> Orders are complete</label>
            </div>
          )}
        </div>
      </div>
    </Link>
  );

  const viewRevenue = (
    <div className="card card-stats">
      <div className="card-header card-header-success card-header-icon">
        <div className="card-icon">
          <i className="fas fa-dollar-sign display-4 text-success"></i>
        </div>
        <p className="card-category">Revenue</p>
        <h3 className="card-title">KSH. {FormatCommas(revenue)}</h3>
      </div>
      <div className="card-footer">
        <div className="stats">
          <i className="fas fa-calendar-alt"></i> Last 24 Hours
        </div>
      </div>
    </div>
  );

  const viewProduct = (
    <Link to="/home/products" className="text-Deco">
      <div className="card card-stats">
        <div className="card-header card-header-danger card-header-icon">
          <div className="card-icon">
            <i className="fas fa-store display-4 text-primary"></i>
          </div>
          <p className="card-category">Products</p>
          <h3 className="card-title">{products}</h3>
        </div>
        <div className="card-footer">
          <div className="stats">
            <i className="fas fa-tags"></i> Tracked from store
          </div>
        </div>
      </div>
    </Link>
  );

  const viewRetailers = (
    <Link to="/home/retailers" className="text-Deco">
      <div className="card card-stats">
        <div className="card-header card-header-info card-header-icon">
          <div className="card-icon">
            <i className="fa fa-user display-4 text-warning"></i>
          </div>
          <p className="card-category">Retailers</p>
          <h3 className="card-title">+{retailers}</h3>
        </div>
        <div className="card-footer">
          <div className="stats">
            <i className="fas fa-redo"></i> Just Updated
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="Droppable" direction="horizontal">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div className="row">
              {stats.map((viewStat, index) => {
                const currentItem =
                  viewStat.name == "orders"
                    ? orders
                    : viewStat.name == "retailer"
                    ? viewRetailers
                    : viewStat.name == "products"
                    ? viewProduct
                    : viewRevenue;
                return (
                  <Draggable key={index} draggableId={`${index}`} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className="col-lg-3 col-md-6 col-sm-6"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {currentItem}
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
