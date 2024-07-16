import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import OrdersChart from "./OrdersChart";
import ProductChart from "./ProductChart";
import RetailersChart from "./RetailersChart";

export default function DashBoardCharts(props) {
  const {
    order_reports,
    fetchOrdersStatics,
    retailer_reports,
    product_reports,
  } = props;

  const [charts, setCharts] = useState([]);

  useEffect(() => {
    let chartArray = [];
    const chartItems = localStorage.getItem("chart_items");
    if (chartItems) {
      chartArray = JSON.parse(chartItems);
      chartArray = chartArray.sort((a, b) => a.position - b.position);
    } else {
      chartArray = [
        { name: "orders", visibility: true, position: 0 },
        { name: "retailer", visibility: true, position: 1 },
        { name: "products", visibility: true, position: 2 },
      ];
      localStorage.setItem("chart_items", JSON.stringify(chartArray));
    }
    setCharts(chartArray);
  }, []);

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
        newArray = charts.map((item) => {
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
        newArray = charts.map((item) => {
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

      let viewCharts = newArray.sort((a, b) => a.position - b.position);
      localStorage.setItem("chart_items", JSON.stringify(viewCharts));
      setCharts(viewCharts);
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="Droppable" direction="horizontal">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div className="row">
              {charts.map((item, index) => {
                const currentView =
                  item.name == "orders" ? (
                    <OrdersChart
                      order_reports={order_reports}
                      fetchOrdersStatics={fetchOrdersStatics}
                    />
                  ) : item.name == "retailer" ? (
                    <RetailersChart retailer_reports={retailer_reports} />
                  ) : (
                    <ProductChart product_reports={product_reports} />
                  );

                return (
                  <Draggable key={index} draggableId={`${index}`} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div key={index}>{currentView}</div>
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
