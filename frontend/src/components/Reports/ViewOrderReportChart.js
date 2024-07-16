import React, { useState } from "react";
import FormatMonthlyWeek from "../../utils/FormatMonthlyWeek";
import {
  getDateName,
  getMonthName,
  getMonthIndexName,
} from "../../utils/FormatDateNames";
import Chartist from "chartist";
import ChartistGraph from "react-chartist";

export default function ViewOrderReportChart(props) {
  const { reports, period } = props;

  const chartTypes = ["Line", "Bar"];

  const [viewType, setViewType] = useState(chartTypes[0]);

  var delays = 80,
    durations = 500;
  var delays2 = 80,
    durations2 = 500;

  const chartData = {
    data: {
      labels:
        period == "Daily"
          ? reports.map((item) => {
              return getDateName(item.date);
            })
          : period == "Weekly"
          ? reports.map((item) => {
              return FormatMonthlyWeek(item.date);
            })
          : period == "Monthly"
          ? reports.map((item) => {
              return getMonthIndexName(item.date);
            })
          : reports.map((item) => {
              return item.date;
            }),
      series: [
        reports.map((item) => {
          return item.count;
        }),
      ],
    },
    options: {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      height: 400,
      low: 0,
      high:
        Math.max(
          ...reports.map((item) => {
            return item.count;
          })
        ) + 20, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    //   // for animation
    animation: {
      draw: function (data) {
        if (data.type === "line" || data.type === "area") {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path
                .clone()
                .scale(1, 0)
                .translate(0, data.chartRect.height())
                .stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint,
            },
          });
        } else if (data.type === "point") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: "ease",
            },
          });
        }
      },
    },
  };

  return (
    <div>
      <div className="row justify-content-end">
        {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 form-group">
          <label>Select Chart Type</label>
          <select
            className="form-control first"
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
            required
          >
            {chartTypes.map((type, index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div> */}
      </div>
      <div className="card-header card_header_success">
        <ChartistGraph
          data={chartData.data}
          type={viewType}
          options={chartData.options}
          listener={chartData.animation}
        />
      </div>
      <div className="card-content">
        <h4>Approved Orders</h4>
        <div className="row justify-content-between pl-3 pr-3 btn_type">
          <p>{period}</p>
        </div>
      </div>
    </div>
  );
}
