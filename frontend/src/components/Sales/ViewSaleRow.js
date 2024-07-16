import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";

export default function ViewSaleRow(props) {
  const { person, index, deleteSalesPerson, viewEdit, canManage } = props;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const popUpItems = [
    // {
    //   icon: <i className="fas fa-user btn_type"></i>,
    //   name: "Assign Retailer",
    //   value: "Assign",
    // },
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
      deleteSalesPerson(person.id);
    } else if (value == "Edit") {
      viewEdit(person);
    }
  }
  return (
    <React.Fragment>
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="sales_round_img">
            <img
              src={person.pic ? `..${person.pic}` : "../static/images/user.png"}
              alt="customer image"
            />
          </div>
        </td>
        <td>
          {person.first_name} {person.last_name}
        </td>
        <td>{person.phone}</td>
        <td>{person.email}</td>
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
      </tr>
      <tr>
        <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Retailers
              </Typography>
              <Table size="small" aria-label="purchases">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th align="right">Phone</th>
                    <th align="right">city</th>
                  </tr>
                </thead>
                <TableBody>
                  {person.retailers ? (
                    person.retailers.map((retailer, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{retailer.name}</td>
                          <td>{retailer.email}</td>
                          <td>{retailer.phone}</td>
                          <td>{retailer.city ? retailer.city.name : ""}</td>
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
    </React.Fragment>
  );
}
