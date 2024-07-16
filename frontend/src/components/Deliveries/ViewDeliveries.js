import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import ViewDeliveriesRow from "./ViewDeliveriesRow";

export default function ViewDeliveries({ deliveries, viewOrderLogs }) {
  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            <h3>Deliveries</h3>
          </div>
          <div className="card-content">
            <Table aria-label="collapsible table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Reference No.</th>
                  <th>Retailer</th>
                  <th>Reference Note</th>
                  <th>Status</th>
                  <th>Orders</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <TableBody>
                {deliveries != null ? (
                  deliveries.map((delivery, index) => {
                    return (
                      <ViewDeliveriesRow
                        delivery={delivery}
                        index={index}
                        key={index}
                        viewOrderLogs={viewOrderLogs}
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
