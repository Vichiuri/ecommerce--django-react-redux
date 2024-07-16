import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { getDateName } from "../../../utils/FormatDateNames";

export default function NewViewDashBoardChart(props) {
  const { order_reports, fetchOrdersStatics, product_reports } = props;

  const [series, setSeries] = useState([]);

  const [options, setOptions] = useState({});

  useEffect(() => {
    setSeries([
      {
        name: "Orders",
        type: "column",
        data: order_reports.map((item) => {
          return item.count;
        }),
        //   [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "Products",
        type: "area",
        data: product_reports.map((l_item) => {
          return l_item.count;
        }),
        //    [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
    ]);
    setOptions({
      chart: {
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: order_reports.map((item) => {
        return getDateName(item.date);
      }),

      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Quantity",
        },
        min: 0,
        max:
          Math.max(
            ...order_reports.map((item) => {
              return item.count;
            })
          ) + 20,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0);
            }
            return y;
          },
        },
      },
    });
  }, [order_reports]);

  return (
    <div id="chart">
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
}
