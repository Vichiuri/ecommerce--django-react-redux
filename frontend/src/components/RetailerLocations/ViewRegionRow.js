import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import CustomPopUpMenu from "../../widgets/CustomPopUpMenu";
import RegionCitiesRow from "./RegionCitiesRow";

export default function ViewRegionRow({
  region,
  index,
  canManage,
  deleteRetailerRegions,
  viewEditRegion,
  addCity,
  editCity,
  deleteRetailerCity,
}) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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
      deleteRetailerRegions(region.id);
    } else if (value == "Edit") {
      viewEditRegion(region);
    }
    setAnchorEl(null);
  }
  return (
    <React.Fragment>
      <tr>
        <td>{index + 1}</td>
        <td>{region.name}</td>
        <td>
          <span className="dot">
            <i className="bg-success"></i>
            Completed
          </span>
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
      {region.region_cities != null ? (
        <tr>
          <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <div className="row justify-content-between">
                  <Typography variant="h6" gutterBottom component="div">
                    Region Cities
                  </Typography>
                  {canManage ? (
                    <i
                      onClick={() => addCity(region)}
                      className="fas fa-plus btn_type"
                    ></i>
                  ) : (
                    <div />
                  )}
                </div>

                <Table size="small" aria-label="purchases">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th align="right">Action</th>
                    </tr>
                  </thead>
                  <TableBody>
                    {region.region_cities.map((city, index) => {
                      return (
                        <RegionCitiesRow
                          city={city}
                          region={region}
                          index={index}
                          key={index}
                          canManage={canManage}
                          editCity={editCity}
                          deleteRetailerCity={deleteRetailerCity}
                        />
                      );
                    })}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </td>
        </tr>
      ) : (
        <tr />
      )}
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
