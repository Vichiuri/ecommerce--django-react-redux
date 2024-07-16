import React, { useState, useEffect, Fragment } from "react";
import FormatCommas from "../../utils/FormatCommas";

export default function PriceListRow(props) {
  const { price, updatePriceList, deletePriceList, index } = props;

  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [rate, setRate] = useState("");
  const [disc_amount, setDiscAmount] = useState("");
  const [perc_amount, setPercAmount] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setMinAmount(price.min_amount ? price.min_amount : 1);
    setMaxAmount(price.max_amount ? price.max_amount : 1);
    setRate(price.rate ? price.rate : 0);
    setDiscAmount(price.discount_amount ? price.discount_amount : 0);
    setPercAmount(price.discount_percent ? price.discount_percent : 0);
  }, [price]);

  function editPriceList() {
    if (minAmount && maxAmount && rate) {
      updatePriceList({
        min_amount: minAmount,
        max_amount: maxAmount,
        rate: rate,
        discount_amount: disc_amount,
        discount_percent: perc_amount,
        id: price.id,
      });
      setIsEdit(false);
    }
  }

  return (
    <Fragment>
      {isEdit ? (
        <tr>
          <td>{index + 1}</td>
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
            <i
              onClick={() => editPriceList()}
              className="fas fa-check text-success btn_type"
            ></i>
            <i
              onClick={() => setIsEdit(false)}
              className="fas fa-times text-danger btn_type ml-2"
            ></i>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{index + 1}</td>
          <td>{price.min_amount}</td>
          <td>{price.max_amount}</td>
          <td className="text-right">KES. {FormatCommas(price.rate)}</td>
          <td className="text-right">
            {" "}
            KES. {FormatCommas(price.discount_amount)}
          </td>
          <td>{price.discount_percent}</td>
          <td>
            <i
              onClick={() => setIsEdit(true)}
              className="fas fa-edit text-primary btn_type"
            ></i>
            <i
              onClick={() => deletePriceList(price.id)}
              className="fas fa-trash text-danger btn_type ml-2"
            ></i>
          </td>
        </tr>
      )}
    </Fragment>
  );
}
