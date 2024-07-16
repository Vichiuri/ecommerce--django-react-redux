import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import ViewPartialDeliveryRow from "./ViewPartialDeliveryRow";

export default function ViewPartialDeliveries({ deliveries }) {
  return (
    <div className="row justify-content-justified">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            <h3>Partial Deliveries</h3>
          </div>
          <div className="card-content">
            <Table aria-label="collapsible table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Reference No.</th>
                  <th>Retailer</th>
                  <th>Reception Remarks</th>
                  <th>Status</th>
                  <th>Orders</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <TableBody>
                {deliveries != null ? (
                  deliveries.map((delivery, index) => {
                    return (
                      <ViewPartialDeliveryRow
                        delivery={delivery}
                        index={index}
                        key={index}
                        // viewOrderLogs={viewOrderLogs}
                      />
                    );
                  })
                ) : (
                  <div />
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
