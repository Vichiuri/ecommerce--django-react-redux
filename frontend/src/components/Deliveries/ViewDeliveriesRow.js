import React, { useState, Fragment } from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";
import FormatCommas from "../../utils/FormatCommas";

export default function ViewDeliveriesRow(props) {
  const { delivery, index, viewOrderLogs } = props;

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const popUpItems = [
    {
      icon: <i className="fas fa-info text-success btn_type"></i>,
      name: "View",
      value: "View",
    },
    {
      icon: <i className="fas fa-clipboard btn_type"></i>,
      name: "Logs",
      value: "Logs",
    },
  ];

  const popUpValues = { anchorEl, popUpItems };

  function handlePopClick(value) {
    if (value == "View") {
      window.open(`/delivery/print/${delivery.id}`);
    } else if (value == "Logs") {
      viewOrderLogs(delivery.order.id);
    }
    setAnchorEl(null);
  }
  return (
    <Fragment>
      <tr>
        <td>{index + 1}</td>
        <td>#{delivery.order.ref_number}</td>
        <td>
          {delivery.order.retailer ? delivery.order.retailer.contact_name : ""}
        </td>
        <td>{delivery.remarks ? delivery.remarks : ""}</td>
        <td>
          {delivery.confirmed ? (
            <td>
              <span className="dot">
                <i className="bg-success"></i>
                Completed
              </span>
            </td>
          ) : (
            <td>
              <span className="dot">
                <i className="bg-warning"></i>
                Pending
              </span>
            </td>
          )}
        </td>
        <td>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <i className="fas fa-sort-up bg_themed"></i>
            ) : (
              <i className="fas fa-sort-down bg_themed"></i>
            )}
          </IconButton>
        </td>
        <td>
          <div
            onClick={(e) => setAnchorEl(e.currentTarget)}
            className="btn_type"
          >
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </td>
      </tr>
      {delivery.order.ret_orders ? (
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
                      <th align="right">Amount</th>
                      <th className="row justify-content-end">Total price</th>
                      <th align="right">Offer</th>
                    </tr>
                  </thead>
                  <TableBody>
                    {delivery.order.ret_orders.map((retail, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{retail.product.name}</td>
                          <td>
                            {retail.free_qty
                              ? retail.free_qty + retail.qty
                              : retail.qty}
                          </td>
                          <td className="row justify-content-end">
                            {retail.order_price_currency}{" "}
                            {FormatCommas(retail.order_price)}
                          </td>
                          <td>{"   "}</td>
                        </tr>
                      );
                    })}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </td>
        </tr>
      ) : (
        <div />
      )}
      <CustomPopUpMenu
        popUpValues={popUpValues}
        handlePopUpClick={handlePopClick}
        handlePopUp={(e) =>
          anchorEl ? setAnchorEl(null) : setAnchorEl(e.currentTarget)
        }
      />
    </Fragment>
  );
}
