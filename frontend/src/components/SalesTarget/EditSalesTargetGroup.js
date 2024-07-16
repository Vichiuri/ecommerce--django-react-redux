import React, { useState, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import viewCurrencies from "../../utils/currencies";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomViewCurrenciesPopUp from "../../widgets/CustomViewCurrenciesPopUp";
import CustomAsyncPagination from "../../widgets/CustomAsyncPagination";
import { fetchSelectSalesPeople } from "../../redux/Actions/Sales";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EditSalesTargetGroup(props) {
  const { target, updateSalesTarget, changePage } = props;

  const [target_name, setTargetName] = useState("");
  const [salesMen, setSaleMen] = useState([]);
  const [viewSalesPeople, setViewSalesPeople] = useState([]);
  const [sales, setSales] = useState("");
  const [reward, setReward] = useState("");
  const [perc, setPerc] = useState("");
  const [period, setPeriod] = useState("");
  const [viewCurrency, setViewCurrency] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (target) {
      setTargetName(target.name);
      let salesArray = target.salesmen.map((item) => {
        return {
          value: item,
          label: item.last_name
            ? `${item.first_name} ${item.last_name}`
            : item.first_name,
        };
      });
      setSaleMen(salesArray);
      setPeriod(target.period);
      setSales(target.target_sales);
      setReward(target.reward_money);
      setPerc(target.reward_per);
    }
    let commonCurrency = viewCurrencies.filter(
      (currency) => currency.cc === "KES"
    )[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
    } else {
      setViewCurrency(viewCurrencies[0]);
    }
  }, [target]);

  function uploadSalesTarget() {
    setIsError(null);
    setResponseMessage("");
    if (target_name && salesMen.length > 0 && period && sales) {
      const sales_ids = salesMen.map((item) => {
        return item.value.id;
      });

      updateSalesTarget({
        name: target_name,
        sale_people: JSON.stringify(sales_ids),
        period,
        target_sales: sales,
        reward_money: reward,
        reward_per: perc,
        id: target.id,
      });
    } else {
      setIsError(false);
      setResponseMessage("Please input all stared fields");
    }
  }

  const popUpValues = { anchorEl, popUpItems: viewCurrencies };

  function handleCurrencyPopUpClick(value) {
    let commonCurrency = viewCurrencies.filter(
      (currency) => currency.cc === value
    )[0];

    if (commonCurrency) {
      setViewCurrency(commonCurrency);
    }
    setAnchorEl(null);
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>Edit Sales Target</h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Groups"
                propsName="Edit Group"
                changePage={changePage}
              />
            </div>
          </div>
          <div className="card-content">
            <CustomAlertBar
              isError={isError}
              responseMessage={responseMessage}
            />
            <div className="row justify-content-between mt-2">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label>Target Name*  <CustomToolTip
                    message={"Input the best name"}
                  />  </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter target name"
                  value={target_name}
                  name="target_name"
                  onChange={(e) => setTargetName(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group ">
                <label>Select Salesperson* <CustomToolTip
                    message={"choose a salesperson"}
                  />   </label>
                <CustomAsyncPagination
                  isMulti={true}
                  value={salesMen}
                  setValue={(value) => setSaleMen(value)}
                  fetchData={fetchSelectSalesPeople}
                  closeMenuOnSelect={false}
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group ">
                <label>Select Target Period* <CustomToolTip
                    message={"Choose the timeframe"}
                  />    </label>
                <select
                  className="form-control"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  required
                >
                  <option>...</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label className="control-label">Target Sales* <CustomToolTip
                    message={"Input the right target"}
                  />  </label>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div
                      onClick={(e) => setAnchorEl(e.currentTarget)}
                      className="input-group-prepend"
                    >
                      <span className="input-group-text btn_type">
                        {viewCurrencies && viewCurrency ? (
                          <div>{viewCurrency.cc}</div>
                        ) : (
                          <div>KSH .</div>
                        )}
                        <i className="ml-1 fas fa-chevron-down"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="Please input target sales"
                      value={sales}
                      name="sales"
                      onChange={(e) => setSales(e.target.value)}
                      required
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label className="control-label">Monetary Reward <CustomToolTip
                    message={"Enter the reward amount"}
                  />     </label>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div
                      onClick={(e) => setAnchorEl(e.currentTarget)}
                      className="input-group-prepend"
                    >
                      <span className="input-group-text btn_type">
                        {viewCurrencies && viewCurrency ? (
                          <div>{viewCurrency.cc}</div>
                        ) : (
                          <div>KSH .</div>
                        )}
                        <i className="ml-1 fas fa-chevron-down"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="Please input target sales"
                      value={reward}
                      name="sales"
                      onChange={(e) => setReward(e.target.value)}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
                <label className="control-label">Percentage Reward <CustomToolTip
                    message={"Enter the reward %"}
                  />     </label>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">%</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="Please input target sales"
                      value={perc}
                      name="sales"
                      onChange={(e) => setPerc(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
              <div
                onClick={() => uploadSalesTarget()}
                className="btn btn-primary btn-lg mt-5 mr-5 mb-2"
              >
                Save SalesGroup
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomViewCurrenciesPopUp
        popUpValues={popUpValues}
        handlePopUpClick={handleCurrencyPopUpClick}
        handlePopUp={(e) =>
          anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget)
        }
      />
    </div>
  );
}
