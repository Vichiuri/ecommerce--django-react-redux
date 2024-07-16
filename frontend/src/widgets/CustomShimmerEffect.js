import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

export default function CustomShimmerEffect() {
  return (
    <div style={{ marginTop: "20px", marginLeft: "10px", marginRight: "10px" }}>
      <Skeleton variant="circle" width={40} height={40} />
      <br />
      <Skeleton variant="text" />
      <br />
      <Skeleton variant="rect" height={100} />
    </div>
  );
}
