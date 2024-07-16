import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

const ITEM_HEIGHT = 48;

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    PaperProps={{
      style: {
        maxHeight: ITEM_HEIGHT * 4.5,
      },
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomViewCurrenciesPopUp(props) {
  const { popUpValues, handlePopUp, handlePopUpClick } = props;
  const { anchorEl, popUpItems } = popUpValues;

  return (
    <StyledMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={(e) => handlePopUp(e)}
    >
      {popUpItems.map((popUpItem, index) => {
        return (
          <StyledMenuItem
            className="bg_themed"
            key={index}
            onClick={() => handlePopUpClick(popUpItem.cc)}
          >
            <ListItemText primary={popUpItem.cc} />
            <ListItemText primary={popUpItem.name} />
          </StyledMenuItem>
        );
      })}
    </StyledMenu>
  );
}
