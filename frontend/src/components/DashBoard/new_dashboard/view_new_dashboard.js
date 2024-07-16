import React from "react";
import "./new_dash_board.css";
import ViewDashBoardSalesStats from "./view_dash_board_sales_stats";
import ViewDashBoardValues from "./view_dash_board_values";
import ViewDashboarCustomers from "./view_dash_board_customers";
import NewViewDashBoardChart from "./new_view_dash_board_chart";
import ViewDashBoardProducts from "./view_dash_board_products";
import DashBoardProgressChart from "./dash_board_progress_chart";
import DashBoardMapView from "./dash_board_map_view";
import FormatCommas from "../../../utils/FormatCommas";

/** New Distributor view dashboard */
export default function ViewNewDashoard(props) {
  const {
    order_reports,
    fetchOrdersStatics,
    dashBoardCount,
    view_retailers,
    product_reports,
    view_products,
    map_data,
  } = props;

  return (
    <div className="row ml-1">
      <div className="col-xl-8 p-1">
        <div className="white_card  card_height_100">
          <div className="white_card_header">
            <div className="row align-items-center justify-content-between flex-wrap">
              <div className="col-lg-4">
                <div className="main-title">
                  <h3 className="m-0">Stock Details</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="white_card_body dashboard_chart">
            <NewViewDashBoardChart
              order_reports={order_reports}
              fetchOrdersStatics={fetchOrdersStatics}
              product_reports={product_reports}
            />
          </div>
        </div>
      </div>
      <ViewDashBoardValues dashBoardCount={dashBoardCount} />
      {/* <ViewDashboarCustomers view_retailers={view_retailers} /> */}
      <div className="col-xl-4 dashb_board_card_padding">
        <div className="white_card card_height_100 mb_30">
          <div className="white_card_header">
            <div className="box_header m-0">
              <div className="main-title">
                <h3 className="m-0">Sales Monthly Summary</h3>
              </div>
            </div>
          </div>

          <div className="white_card_body">
            <DashBoardProgressChart />
            <div className="monthly_plan_wraper">
              <div className="single_plan d-flex align-items-center justify-content-between">
                <div className="plan_left d-flex align-items-center">
                  <div className="thumb">
                    <img src="../static/images/icon2/7.svg" alt="" />
                  </div>
                  <div>
                    <h5>Monthly Delivered Orders</h5>
                    <span>
                      {dashBoardCount?.monthly_complete_order ?? 0} Completed
                      order this month
                    </span>
                  </div>
                </div>
              </div>
              <div className="single_plan d-flex align-items-center justify-content-between">
                <div className="plan_left d-flex align-items-center">
                  <div className="thumb">
                    <img src="../static/images/icon2/6.svg" alt="" />
                  </div>
                  <div>
                    <h5>Monthly Revenue</h5>
                    <span>
                      KES. {FormatCommas(dashBoardCount?.monthly_revenue ?? 0)}{" "}
                      in total revenue
                    </span>
                  </div>
                </div>
              </div>
              <div className="single_plan d-flex align-items-center justify-content-between">
                <div className="plan_left d-flex align-items-center">
                  <div className="thumb">
                    <img src="../static/images/icon2/5.svg" alt="" />
                  </div>
                  <div>
                    <h5>New Retailer</h5>
                    <span>
                      {dashBoardCount?.monthly_retailer ?? 0} Joined this month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ViewDashBoardSalesStats dashBoardCount={dashBoardCount} />
      <DashBoardMapView map_data={map_data} />
      <ViewDashBoardProducts view_products={view_products} />
      <ViewDashboarCustomers view_retailers={view_retailers} />
      {/* <DashBoardMapView /> */}
    </div>
  );
}
