import React, { useState, useEffect, Fragment } from "react";

export default function AddPriceListRow(props) {
  const { price, index, updatePriceList, viewPriceLists } = props;

  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [rate, setRate] = useState("");
  const [disc_amount, setDiscAmount] = useState("");
  const [perc_amount, setPercAmount] = useState("");

  useEffect(() => {
    setMinAmount(price.price_list.min_amount ? price.price_list.min_amount : 1);
    setMaxAmount(price.price_list.max_amount ? price.price_list.max_amount : 1);
    setRate(price.price_list.rate ? price.price_list.rate : price.price);
    setDiscAmount(
      price.price_list.discount_amount ? price.price_list.discount_amount : 0
    );
    setPercAmount(
      price.price_list.discount_percent ? price.price_list.discount_percent : 0
    );
  }, [price]);

  return (
    <Fragment>
      <tr>
        <td>{index + 1}</td>
        <td>{price.name}</td>
        <td>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter min amount"
            value={minAmount}
            name="minAmount"
            onChange={(e) => setMinAmount(e.target.value)}
            disabled
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
            disabled
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter rate"
            value={rate}
            name="rate"
            onChange={(e) => setRate(e.target.value)}
            disabled
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter discount amount"
            value={disc_amount}
            name="disc_amount"
            onChange={(e) => setDiscAmount(e.target.value)}
            disabled
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
            disabled
          />
        </td>
        <td>
          <button
            onClick={() => viewPriceLists(price)}
            className="btn btn-primary"
          >
            {/* <i className="fas fa-plus text-primary btn_type"></i> */}
            Add
          </button>
        </td>
      </tr>
    </Fragment>
  );
}
