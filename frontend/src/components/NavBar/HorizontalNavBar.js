import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "../../utils/NavItems";

/** Horizontal change for sidebar */
export default function HorizontalNavBar({ group, account }) {
  const [nav_view, setNavView] = useState([]);
  useEffect(() => {
    const view_nav = NavItems(group, account);

    setNavView(view_nav);
  }, [group, account]);

  return (
    <div className="horizontal-menu" id="nav_horizontal_bar">
      <div className="sidebar active pt-1">
        <div className="site-width">
          <ul id="side-menu" className="sidebar-menu">
            {nav_view.map((view, index) => {
              if (view) {
                return (
                  <li key={index} className="dropdown view_h_item">
                    {view.link ? (
                      <Link to={view.link} className="side_nav_item">
                        {view.icon}
                        {view.name}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="side_nav_item row"
                        style={{ pointerEvents: "none" }}
                      >
                        {view.icon} {view.name}
                      </a>
                    )}

                    {view.v_component ? (
                      <ul className="inner_menu mt-0 pt-0">
                        {view.v_component.map((component, v_index) => {
                          if (component) {
                            return (
                              <div key={v_index} className="border-top mt-0">
                                <li className="ml-2 p-0 row justify-content-start ">
                                  <Link className="p-2 " to={component.link}>
                                    {component.name}
                                  </Link>
                                </li>
                              </div>
                            );
                          } else {
                            return <li key={v_index} />;
                          }
                        })}
                      </ul>
                    ) : (
                      <div />
                    )}
                  </li>
                );
              } else {
                return <li key={index} />;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
