import React, { useState } from "react";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomBreadcrumbs from "../../widgets/CustomBreadCrumbs";
import DispatchOrderTable from "./DispatchOrderTable";

export default function DispatchOrder(props) {
  const { changePage, order, dispatchOrder, dispatchPartialOrder } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [v_number, setVNumber] = useState("");
  const [note, setNote] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  function createDispatch() {
    setIsError(null);
    setResponseMessage("");
    if (name && phone && v_number && note) {
      dispatchOrder({
        order_id: order.id,
        vehicle_no: v_number,
        transporter_name: name,
        transporter_phone: phone,
        remarks: note,
      });
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input driver name");
    } else if (!phone) {
      setIsError(true);
      setResponseMessage("Please input driver phone number");
    } else if (!v_number) {
      setIsError(true);
      setResponseMessage("Please input vehicle ");
    } else if (!note) {
      setIsError(true);
      setResponseMessage("Please input reference note");
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant fields");
    }
  }

  function createPartialOrder(orders) {
    setIsError(null);
    setResponseMessage("");
    if (name && phone && v_number && note) {
      const order_items = orders.map((item) => {
        return { id: item.id, total_qty: item.total_qty };
      });
      dispatchPartialOrder({
        order_id: order.id,
        vehicle_no: v_number,
        transporter_name: name,
        transporter_phone: phone,
        remarks: note,
        orders: JSON.stringify(order_items),
      });
    } else if (!name) {
      setIsError(true);
      setResponseMessage("Please input driver name");
    } else if (!phone) {
      setIsError(true);
      setResponseMessage("Please input driver phone number");
    } else if (!v_number) {
      setIsError(true);
      setResponseMessage("Please input vehicle ");
    } else if (!note) {
      setIsError(true);
      setResponseMessage("Please input reference note");
    } else {
      setIsError(true);
      setResponseMessage("Please input all relevant fields");
    }
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
        <div className="card">
          <div className="card-header">
            <div className="row justify-content-between ml-2 mr-2">
              <center>
                <h3>
                  Dispatch Order (Reference number #
                  {order ? order.ref_number : ""})
                </h3>
              </center>

              <CustomBreadcrumbs
                prevPropsName="Orders"
                propsName="Dispatch Order"
                changePage={changePage}
              />
            </div>
          </div>
          <div className="card-content">
            <CustomAlertBar
              isError={isError}
              responseMessage={responseMessage}
            />
            <div className="card-header">Transport Details</div>
            <div className="row justify-content-between">
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2">
                <label>Driver Name*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please input driver name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2">
                <label>Phone Number*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please input phone number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 form-group  mt-2">
                <label>Vehicle Plate*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please input plate number"
                  name="v_number"
                  value={v_number}
                  onChange={(e) => setVNumber(e.target.value)}
                  required
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 form-group  mt-2">
                <label>Reference Note*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please input reference note"
                  name="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="card-header">Retailer Details</div>

            {order && order.retailer ? (
              <div className="row justify-content-between">
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2">
                  <label>Retailer Name*</label>
                  <input
                    type="text"
                    className="form-control bg_themed"
                    placeholder="Please input driver name"
                    name="name"
                    value={order.retailer.contact_name}
                    disabled
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 form-group  mt-2">
                  <label>Phone Number*</label>
                  <input
                    type="text"
                    className="form-control bg_themed"
                    placeholder="Please input phone number"
                    name="phone"
                    value={order.retailer.contact_phone}
                    disabled
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 form-group  mt-2">
                  <label>Retailer Email*</label>
                  <input
                    type="text"
                    className="form-control bg_themed"
                    placeholder="Please input plate number"
                    name="v_number"
                    value={order.retailer.contact_email}
                    disabled
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 form-group  mt-2">
                  <label>Location</label>
                  <input
                    type="text"
                    className="form-control bg_themed"
                    name="note"
                    value={order.retailer.city ? order.retailer.city.name : ""}
                    disabled
                  />
                </div>
              </div>
            ) : (
              <div />
            )}
            <DispatchOrderTable
              ret_orders={order ? order.ret_orders : []}
              createDispatch={createDispatch}
              createPartialOrder={createPartialOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
