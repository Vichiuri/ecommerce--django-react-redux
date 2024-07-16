import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import FormatCommas from "../../utils/FormatCommas";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import AddNoteModal from "./AddNoteModal";

export default function ViewOrderDetails(props) {
  const { order, show, handleModal, dispatchOrder, updateRetailerOrderStatus } =
    props;

  function calculateRemaining(total, delivered) {
    return total - delivered;
  }

  const [showModal, setShowModal] = useState(false);
  const [viewStatus, setViewStatus] = useState("");

  function sendNoteMessage(note) {
    handleModal();
    updateRetailerOrderStatus({ id: order.id, status: viewStatus, note: note });
  }

  return (
    <Modal
      show={show}
      onHide={handleModal}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="card-header bg_themed" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View Order {order ? ` (#${order.ref_number})` : ""}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <div className="container-fluid m-2">
          <div className="row ">
            {order && order.retailer ? (
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 container-fluid overflow-hidden">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <div className="font-weight-bold">Retailer Name: </div>
                    <div className="font-weight-bold">Retailer Email: </div>
                    <div className="font-weight-bold">Retailer Phone: </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <div>{order.retailer.contact_name}</div>
                    <div>{order.retailer.contact_email}</div>
                    <div>{order.retailer.contact_phone}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div />
            )}
            {order && order.salesman ? (
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 container-fluid overflow-hidden">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                    <div className="font-weight-bold">SalesMan Name: </div>
                    <div className="font-weight-bold">SalesMan Email: </div>
                    <div className="font-weight-bold">Salesman Phone: </div>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                    <div>
                      {order.salesman.last_name
                        ? `${order.salesman.first_name} ${order.salesman.last_name}`
                        : order.salesman.first_name}
                    </div>
                    <div>{order.salesman.email}</div>
                    <div>{order.salesman.phone}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div />
            )}
            {order ? (
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 container-fluid overflow-hidden">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                    <div className="font-weight-bold">Order Status: </div>
                    <div className="font-weight-bold">Order Amount: </div>
                    {order.price_level ? (
                      <div className="font-weight-bold">Order Level: </div>
                    ) : (
                      <div />
                    )}
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                    <div>{order.status}</div>
                    <div>
                      {`${order.total_cost_currency} ${FormatCommas(
                        order.total_cost
                      )}`}
                    </div>
                    {order.price_level ? (
                      <div>{order.price_level.level_name}</div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
          {order ? (
            <div className="row justify-content-end">
              {order.status === "Partial" || order.status == "Approved" ? (
                <div
                  className="btn btn-success mr-3"
                  onClick={() => {
                    handleModal();
                    dispatchOrder(order);
                  }}
                >
                  Dispatch
                </div>
              ) : order.status == "Pending" ? (
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Actions
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        handleModal();
                        updateRetailerOrderStatus({
                          id: order.id,
                          status: "Approved",
                          note: "",
                        });
                      }}
                    >
                      Approve
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setShowModal(true);
                        setViewStatus("On Hold");
                      }}
                    >
                      Hold
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setShowModal(true);
                        setViewStatus("Declined");
                      }}
                    >
                      Decline
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : order.status == "On Hold" ? (
                <div
                  className="btn btn-primary mr-3"
                  onClick={() => {
                    handleModal();
                    updateRetailerOrderStatus({
                      id: order.id,
                      status: "Release",
                      note: "",
                    });
                  }}
                >
                  Release
                </div>
              ) : (
                <div />
              )}
            </div>
          ) : (
            <div />
          )}
          {order && order.note ? (
            <div className="px-4 my-4">
              <div className="row justify-content-start border-bottom">
                <h3 className="font-weight-bold">Reference Note</h3>
              </div>
              <p className="mt-2">{order.note}</p>
            </div>
          ) : (
            <div />
          )}
          {order ? (
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Order Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th align="right">Total</th>
                    <th align="right">Quantity</th>
                    <th align="right">Free</th>

                    {order.status == "Partial" ? <th>Delivered</th> : <th></th>}
                    {order.status == "Partial" ? <th>Remaining</th> : <th></th>}
                    <th align="right">Total price</th>
                  </tr>
                </thead>
                <TableBody>
                  {order.ret_orders ? (
                    order.ret_orders.map((retail, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{retail.product.name}</td>
                          <td>
                            {retail.free_qty
                              ? retail.free_qty + retail.qty
                              : retail.qty}
                          </td>
                          <td>{retail.qty}</td>
                          <td>{retail.free_qty ? retail.free_qty : 0}</td>

                          {order.status == "Partial" ? (
                            <td>{retail.delivered_qty}</td>
                          ) : (
                            <td></td>
                          )}
                          {order.status == "Partial" ? (
                            <td>
                              {calculateRemaining(
                                retail.free_qty
                                  ? retail.free_qty + retail.qty
                                  : retail.qty,
                                retail.delivered_qty
                              )}
                            </td>
                          ) : (
                            <td></td>
                          )}

                          <td>
                            {retail.product.price_currency}{" "}
                            {FormatCommas(retail.order_price)}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <div />
                  )}
                </TableBody>
              </Table>
            </Box>
          ) : (
            <div />
          )}
        </div>
      </Modal.Body>
      <AddNoteModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        sendNoteMessage={sendNoteMessage}
      />
    </Modal>
  );
}
