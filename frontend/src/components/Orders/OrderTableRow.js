import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import formatDate from "../../utils/FormatDate";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";
import AddNoteModal from "./AddNoteModal";
import FormatCommas from "../../utils/FormatCommas";

export default function OrderTableRow(props) {
  const {
    order,
    index,
    deleteRetailOrder,
    updateRetailerOrderStatus,
    dispatchOrder,
    viewEditOrder,
    canManage,
    viewOrderLogs,
    fetchRetDistOrder,
    viewCurrentOrder,
    clearRetailOrderApproved,
    cancelRetailOrder,
  } = props;

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [viewStatus, setViewStatus] = useState("");

  useEffect(() => {
    setOpen(false);
  }, [order]);

  let popUpItems = [
    {
      icon: <i className="fas fa-eye btn_type"></i>,
      name: "View",
      value: "View",
    },
    {
      icon: <i className="fas fa-clipboard btn_type"></i>,
      name: "Logs",
      value: "Logs",
    },
  ];

  if (order.status == "Pending") {
    popUpItems = [
      {
        icon: <i className="fas fa-thumbs-up btn_type text-success"></i>,
        name: "Approve",
        value: "Approve",
      },
      {
        icon: <i className="fas fa-hand-paper btn_type"></i>,
        name: "Hold",
        value: "Hold",
      },
      {
        icon: <i className="fas fa-window-close btn_type"></i>,
        name: "Decline",
        value: "Decline",
      },
      {
        icon: <i className="fas fa-edit btn_type"></i>,
        name: "Edit",
        value: "Edit",
      },
      {
        icon: <i className="fas fa-trash btn_type"></i>,
        name: "Delete",
        value: "Delete",
      },
      ...popUpItems,
    ];
  } else if (order.status == "On Hold") {
    popUpItems = [
      {
        icon: <i className="fas fa-thumbs-up btn_type"></i>,
        name: "Release",
        value: "Release",
      },
      {
        icon: <i className="fas fa-edit btn_type"></i>,
        name: "Edit",
        value: "Edit",
      },
      {
        icon: <i className="fas fa-trash btn_type"></i>,
        name: "Delete",
        value: "Delete",
      },
      ...popUpItems,
    ];
  } else if (order.status == "Approved") {
    popUpItems = [
      {
        icon: <i className="fas fa-truck btn_type text-success"></i>,
        name: "Dispatch",
        value: "Dispatch",
      },
      {
        icon: <i className="fas fa-thumbs-down btn_type"></i>,
        name: "Disapprove",
        value: "Disapprove",
      },
      {
        icon: <i className="fas fa-ban btn_type"></i>,
        name: "Cancel",
        value: "Cancel",
      },

      ...popUpItems,
    ];
  } else if (order.status == "Partial") {
    popUpItems = [
      {
        icon: <i className="fas fa-truck btn_type text-success"></i>,
        name: "Dispatch",
        value: "Dispatch",
      },
      ...popUpItems,
    ];
  }

  const popUpValues = { anchorEl, popUpItems };

  function handlePopClick(value) {
    if (value == "Delete") {
      deleteRetailOrder(order.id);
    } else if (value == "Edit") {
      viewEditOrder(order);
    } else if (value == "Approve") {
      updateRetailerOrderStatus({ id: order.id, status: "Approved", note: "" });
    } else if (value == "Hold") {
      setShowModal(true);
      setViewStatus("On Hold");
    } else if (value == "Release") {
      updateRetailerOrderStatus({ id: order.id, status: "Release", note: "" });
    } else if (value == "Decline") {
      setShowModal(true);
      setViewStatus("Declined");
    } else if (value == "Logs") {
      viewOrderLogs(order.id);
    } else if (value == "Dispatch") {
      dispatchOrder(order);
    } else if (value == "View") {
      viewCurrentOrder(order);
    } else if (value == "Disapprove") {
      console.log("called here");
      clearRetailOrderApproved({ id: order.id });
    } else if (value == "Cancel") {
      cancelRetailOrder({ id: order.id });
    }
    setAnchorEl(null);
  }

  function sendNoteMessage(note) {
    updateRetailerOrderStatus({ id: order.id, status: viewStatus, note: note });
  }

  function calculateRemaining(total, delivered) {
    return total - delivered;
  }

  function fetchRetOrders() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
      fetchRetDistOrder(1, order.id);
    }
  }

  return (
    <React.Fragment>
      <tr>
        <td>{index}</td>
        <td>{formatDate(order.when_placed)}</td>
        <td>#{order.ref_number}</td>
        <td>{order.retailer ? order.retailer.contact_name : ""}</td>
        <td>
          {order.salesman
            ? order.salesman.last_name
              ? `${order.salesman.first_name} ${order.salesman.last_name}`
              : order.salesman.first_name
            : ""}
        </td>
        <td className="row justify-content-end mr-1">
          {order.total_cost_currency} {FormatCommas(order.total_cost)}
        </td>
        {order.status == "Pending" ? (
          <td>
            <span className="dot">
              <i className="bg-warning"></i>
              Pending
            </span>
          </td>
        ) : order.status == "On Hold" ? (
          <td>
            <span className="dot">
              <i className="bg-warning"></i>
              On Hold
            </span>
          </td>
        ) : order.status == "Approved" ? (
          <td>
            <span className="dot">
              <i className="bg-success"></i>
              Approved
            </span>
          </td>
        ) : order.status == "Dispatched" ? (
          <td>
            <span className="dot">
              <i className="bg-success"></i>
              Dispatched
            </span>
          </td>
        ) : order.status == "Partial" ? (
          <td>
            <span className="dot">
              <i className="bg-warning"></i>
              Partial
            </span>
          </td>
        ) : order.status == "CANCELED" ? (
          <td>
            <span className="dot">
              <i className="bg-danger"></i>
              Cancelled
            </span>
          </td>
        ) : (
          <td>
            <span className="dot">
              <i className=" bg-danger"></i>
              Declined
            </span>
          </td>
        )}
        <td>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => fetchRetOrders()}
          >
            {open ? (
              <i className="fas fa-sort-up bg_themed"></i>
            ) : (
              <i className="fas fa-sort-down bg_themed"></i>
            )}
          </IconButton>
        </td>
        <td>
          {canManage ? (
            <i
              onClick={(e) => setAnchorEl(e.currentTarget)}
              className="fas fa-ellipsis-h btn_type"
            ></i>
          ) : (
            <div />
          )}
        </td>
      </tr>
      <tr>
        <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Order Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th className="text-right">Total</th>
                    <th className="text-right">Quantity</th>
                    <th className="text-right">Free</th>

                    {order.status == "Partial" ? (
                      <th className="text-right">Delivered</th>
                    ) : (
                      <th></th>
                    )}
                    {order.status == "Partial" ? (
                      <th className="text-right">Remaining</th>
                    ) : (
                      <th></th>
                    )}
                    <th className="text-right">Total price</th>
                  </tr>
                </thead>
                <TableBody>
                  {order.dist_orders ? (
                    order.dist_orders.map((retail, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{retail.product.name}</td>
                          <td className="text-right">
                            {retail.free_qty
                              ? retail.free_qty + retail.qty
                              : retail.qty}
                          </td>
                          <td className="text-right">{retail.qty}</td>
                          <td className="text-right">
                            {retail.free_qty ? retail.free_qty : 0}
                          </td>

                          {order.status == "Partial" ? (
                            <td className="text-right">
                              {retail.delivered_qty}
                            </td>
                          ) : (
                            <td></td>
                          )}
                          {order.status == "Partial" ? (
                            <td className="text-right">
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

                          <td className="text-right">
                            {retail.order_price_currency}{" "}
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
          </Collapse>
        </td>
      </tr>
      <CustomPopUpMenu
        popUpValues={popUpValues}
        handlePopUpClick={handlePopClick}
        handlePopUp={(e) =>
          anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget)
        }
      />
      <AddNoteModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        sendNoteMessage={sendNoteMessage}
      />
    </React.Fragment>
  );
}
