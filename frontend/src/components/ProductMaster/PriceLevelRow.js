import React from "react";

export default function PriceLevelRow(props) {
  const { level, editLevel, deletePriceLevel, canManage } = props;
  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div> {level.level_name}</div>
        {canManage ? (
          <div>
            <i onClick={() => editLevel(level)} className="fas fa-edit"></i>
            <i
              onClick={() => deletePriceLevel(level.id)}
              className="fas fa-times ml-3"
            ></i>
          </div>
        ) : (
          <div />
        )}
      </div>
    </li>
  );
}
