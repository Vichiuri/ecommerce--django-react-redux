import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function CustomBreadcrumbs(props) {
  const classes = useStyles();

  const { propsName, changePage, prevPropsName } = props;

  function handleClick(event) {
    event.preventDefault();
    changePage(1);
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <RouteLink to="/" style={{ color: "grey" }} className={classes.link}>
        Home
      </RouteLink>
      <Link
        color="initial"
        href="/product"
        onClick={handleClick}
        className="side_nav_item"
      >
        <span>{prevPropsName}</span>
      </Link>
      <Typography color="initial" className="side_nav_item">
        {propsName}
      </Typography>
    </Breadcrumbs>
  );
}
