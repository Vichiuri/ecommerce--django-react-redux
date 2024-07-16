import React from "react";
import ReactTooltip from "react-tooltip";
import "./widget.css";

export default function CustomToolTip({ message }) {
  return (
    <span className="tool_tip" tabIndex="1">
      <i
        data-tip={message ?? ""}
        className="fas fa-info-circle ml-2 text-primary"
      ></i>

      <ReactTooltip type="success" effect="float" />
    </span>
  );
}
