import React from "react";

export default function RegionCitiesRow(props) {
  const {
    index,
    city,
    region,
    canManage,
    editCity,
    deleteRetailerCity,
  } = props;

  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{city.name}</td>
      {canManage ? (
        <div>
          <i
            onClick={(e) => editCity(region, city)}
            className="fas fa-edit text-primary btn_type"
          ></i>
          <i
            onClick={(e) => deleteRetailerCity(city.id, region.id)}
            className="fas fa-trash text-danger btn_type ml-2"
          ></i>
        </div>
      ) : (
        <div />
      )}
    </tr>
  );
}
