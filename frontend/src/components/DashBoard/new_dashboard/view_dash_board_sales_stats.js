import React from "react";
import { Link } from "react-router-dom";
import FormatCommas from "../../../utils/FormatCommas";

export default function ViewDashBoardSalesStats({ dashBoardCount }) {
  function calculateSalesDiff(complete, total) {
    return total - complete;
  }

  return (
    <Link
      to="/home/orders"
      className="col-xl-4 dashb_board_card_padding text-Deco"
    >
      <div className="white_card card_height_100 mb_30 overflow_hidden">
        <div className="white_card_header">
          <div className="box_header m-0">
            <div className="main-title">
              <h3 className="m-0">Sales Details</h3>
            </div>
          </div>
        </div>
        <div className="white_card_body pb-0">
          <div className="Sales_Details_plan">
            <div className="row">
              <div className="col-lg-6">
                <div className="single_plan d-flex align-items-center justify-content-between">
                  <div className="plan_left d-flex align-items-center">
                    <div className="thumb">
                      <img src="../static/images/icon2/3.svg" alt="" />
                    </div>
                    <div>
                      <h5>{dashBoardCount?.complete_orders ?? 0}</h5>
                      <span>Complete Orders</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single_plan d-flex align-items-center justify-content-between">
                  <div className="plan_left d-flex align-items-center">
                    <div className="thumb">
                      <img src="../static/images/icon2/1.svg" alt="" />
                    </div>
                    <div>
                      <h5>
                        {calculateSalesDiff(
                          dashBoardCount?.complete_orders ?? 0,
                          dashBoardCount?.total_orders ?? 0
                        )}
                      </h5>
                      <span>Pending Orders</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single_plan d-flex align-items-center justify-content-between">
                  <div className="plan_left d-flex align-items-center">
                    <div className="thumb">
                      <img src="../static/images/icon2/4.svg" alt="" />
                    </div>
                    <div>
                      <h5>{dashBoardCount?.total_orders ?? 0}</h5>
                      <span>Total Orders</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single_plan d-flex align-items-center justify-content-between">
                  <div className="plan_left d-flex align-items-center">
                    <div className="thumb">
                      <img src="../static/images/icon2/2.svg" alt="" />
                    </div>
                    <div>
                      <h5>KES. {FormatCommas(dashBoardCount?.revenue ?? 0)}</h5>
                      <span>Total Revenue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chart_wrap overflow_hidden">
          <div id="chart4"></div>
        </div>
      </div>
    </Link>
  );
}
