import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ViewProgressBar(props) {
  const { dashboardProgress, updateVisibility } = props;

  const [viewComplete, setViewComplete] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (dashboardProgress) {
      let viewArray = [];
      Object.keys(dashboardProgress).map((prop, key) => {
        let name = prop;
        let value = dashboardProgress[prop];
        viewArray.push({ name, value });
      });
      let view_false = viewArray.filter((item) => item.value != true);
      let view_true = viewArray.filter((viewItem) => viewItem.value == true);
      if (view_false.length > 0) {
        updateVisibility(true);
      } else {
        updateVisibility(false);
      }
      if (view_true.length > 0) {
        setHasStarted(true);
      } else {
        setHasStarted(false);
      }
      setViewComplete(viewArray);
    }
  }, [dashboardProgress]);

  function goToView(name) {
    switch (name) {
      case "Settings":
        return "/home/settings";
      case "Products":
        return "/home/products";
      case "Sales People":
        return "/home/sales";
      case "Regions":
        return "/home/retailer_location";
      case "Retailers":
        return "/home/retailers";
      case "Units":
        return "/home/product_master";
      case "Categories":
        return "/home/categories";
      case "Offers":
        return "/home/offers";

      default:
        return "/home/dashboard";
    }
  }

  return (
    <section>
      <ol className="custom-progress-bar">
        {hasStarted ? (
          <li className="is-complete">
            <span></span>
          </li>
        ) : (
          <div />
        )}
        {viewComplete.map((view, index) => {
          const viewClass = view.value
            ? "is-complete is-active"
            : "in-complete";
          return (
            <li key={index} className={viewClass}>
              <Link
                className="side_nav_item justify-content-start"
                to={goToView(view.name)}
              >
                <span>{view.name}</span>
              </Link>
            </li>
          );
        })}
        <div />
      </ol>
    </section>
  );
}
