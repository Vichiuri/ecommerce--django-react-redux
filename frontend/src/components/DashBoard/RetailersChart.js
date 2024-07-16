import React, { useState, useEffect } from "react";
import Chartist from "chartist";
import ChartistGraph from "react-chartist";
import { getDateName, getMonthName } from "../../utils/FormatDateNames";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";
import { Link } from "react-router-dom";

export default function RetailersChart(props) {
  const { retailer_reports } = props;

  const period = [
    { name: "Daily Perfomance", value: 7 },
    { name: "Monthly Perfomance", value: 30 },
  ];

  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const popUpValues = { anchorEl, popUpItems: period };

  function handlePopClick(value) {
    let from_date = formatInputDate(
      new Date().setDate(new Date().getDate() - value)
    );
    let to_date = formatInputDate(new Date().setDate(new Date().getDate()));
    fetchOrdersStatics(from_date, to_date);
    setCurrentPeriod(value);
    setAnchorEl(null);
  }

  var delays = 80,
    durations = 500;
  var delays2 = 80,
    durations2 = 500;

  const chartData = {
    data: {
      labels:
        currentPeriod == 0
          ? retailer_reports.map((item) => {
              return getDateName(item.date);
            })
          : retailer_reports.map((item) => {
              return getMonthName(item.date);
            }),
      series: [
        retailer_reports.map((item) => {
          return item.count;
        }),
      ],
    },
    options: {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      low: 0,
      high:
        Math.max(
          ...retailer_reports.map((item) => {
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
    <Link to="/home/retailers" className="card side_nav_item">
      <div className="card-header card_header_warning">
        <ChartistGraph
          data={chartData.data}
          type="Line"
          options={chartData.options}
          listener={chartData.animation}
        />
      </div>
      <div className="card-content">
        <h4>New Retailers</h4>
        <div className="row justify-content-between pl-3 pr-3 btn_type">
          <p>{period[0].name}</p>
          <i className="fas fa-chevron-circle-down"></i>
        </div>
      </div>
      <CustomPopUpMenu
        popUpValues={popUpValues}
        handlePopUpClick={handlePopClick}
        handlePopUp={(e) =>
          anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget)
        }
      />
    </Link>
  );
}
