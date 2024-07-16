import React, { useState, Fragment } from "react";
import FormatCommas from "../../utils/FormatCommas";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";

export default function ViewSalesTargetRow(props) {
  const { index, target, canManage, deleteSalesTarget, viewEditSalesTarget } =
    props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const popUpItems = [
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
  ];

  const popUpValues = { anchorEl, popUpItems };

  function handlePopClick(value) {
    if (value == "Delete") {
      deleteSalesTarget(target.id);
    } else if (value == "Edit") {
      viewEditSalesTarget(target);
    }
    setAnchorEl(null);
  }

  return (
    <Fragment>
      <tr className="ml-2" key={index}>
        <td width="10%" className="text-right">
          {index + 1}
        </td>
        <td width="30%" className="text-right">
          {target.name}
        </td>
        <td width="10%" className="text-right">
          {target.period}
        </td>
        <td width="30%" className="text-right">
          {target.target_sales_currency}. {FormatCommas(target.target_sales)}
        </td>
        <td width="10%" className="text-right">
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
        <td width="10%" className="text-right">
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
                Sales People
              </Typography>
              <Table size="small" aria-label="purchases">
                <thead>
                  <tr>
                    <th>#</th>
                    <th></th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th align="right">Email</th>
                  </tr>
                </thead>
                <TableBody>
                  {target.salesmen.map((person, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="sale_target_img">
                            <img
                              src={
                                person.pic
                                  ? `..${person.pic}`
                                  : "../static/images/login.jpg"
                              }
                              alt="offer logo"
                            />
                          </div>
                        </td>
                        <td>
                          {person.first_name} {person.last_name}
                        </td>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                      </tr>
                    );
                  })}
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
    </Fragment>
  );
}
