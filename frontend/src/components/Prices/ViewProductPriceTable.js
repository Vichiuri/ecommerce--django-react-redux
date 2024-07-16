import React, { Fragment, useState, useEffect } from "react";
import PriceListRow from "./PriceListRow";

export default function ViewProductPriceTable(props) {
  const {
    price_list,
    currentPrice,
    uploadPriceList,
    updatePriceList,
    deletePriceList,
  } = props;

  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [rate, setRate] = useState(currentPrice);
  const [disc_amount, setDiscAmount] = useState("");
  const [perc_amount, setPercAmount] = useState("");

  useEffect(() => {
    setRate(currentPrice);
    const view_price = price_list.sort((a, b) => {
      return b.max_amount - a.max_amount;
    });
    setMinAmount(view_price[0] ? view_price[0].max_amount + 1 : "");
  }, [currentPrice, price_list]);

  function addPriceList() {
    uploadPriceList(minAmount, maxAmount, rate, disc_amount, perc_amount);
    setMinAmount(price_list[0] ? price_list[0].max_amount + 1 : "");
    setMaxAmount("");
    setRate(currentPrice);
    setDiscAmount("");
    setPercAmount("");
  }

  return (
    <Fragment>
      <div className="card-header">
        <h3>Price Table</h3>
      </div>
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Min Qty*</th>
              <th>Max Qty*</th>
              <th className="text-right">Rate Per Product*</th>
              <th className="text-right">Disc Amount</th>
              <th>Percentage(%)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter min amount"
                  value={minAmount}
                  name="minAmount"
                  onChange={(e) => setMinAmount(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter max amount"
                  value={maxAmount}
                  name="maxAmount"
                  onChange={(e) => setMaxAmount(e.target.value)}
                />
              </td>
              <td className="text-right">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter rate"
                  value={rate}
                  name="rate"
                  onChange={(e) => setRate(e.target.value)}
                />
              </td>
              <td className="text-right">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter discount amount"
                  value={disc_amount}
                  name="disc_amount"
                  onChange={(e) => setDiscAmount(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please enter discount percentage"
                  value={perc_amount}
                  name="disc_amount"
                  onChange={(e) => setPercAmount(e.target.value)}
                />
              </td>
              <td>
                <div onClick={() => addPriceList()} className="btn btn-primary">
                  Add
                </div>
              </td>
            </tr>
            {price_list.map((price, index) => {
              return (
                <PriceListRow
                  price={price}
                  index={index}
                  key={index}
                  updatePriceList={updatePriceList}
                  deletePriceList={deletePriceList}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
