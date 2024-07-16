import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import OrderTableRow from "./OrderTableRow";
import { ExportToCsv } from "export-to-csv";
import Debouncer from "../../utils/Debouncer";
import OrdersNavBar from "./OrdersNavBar";
import ViewOrderDetails from "./ViewOrderDetails";
import CustomPagination from "../../widgets/CustomPagination";

export default function OrderTable(props) {
  const {
    changePage,
    orders,
    fetchOrders,
    deleteRetailOrder,
    deleteOrder,
    updateRetailerOrderStatus,
    dispatchOrder,
    searchOrders,
    viewEditOrder,
    canManage,
    viewOrderLogs,
    fetchRetDistOrder,
    ret_order,
    fetchRetDispatchOrder,
    viewKey,
    pageDetails,
    clearRetailOrderApproved,
    cancelRetailOrder,
  } = props;
  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: true,
    title: "My Awesome CSV",
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };

  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState(25);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ordersTypes = [
    { name: "All", status: "" },
    { name: "Pending", status: "Pending" },
    { name: "On Hold", status: "On Hold" },
    { name: "Approved", status: "Approved" },
    { name: "Partial", status: "Partial" },
    { name: "Dispatched", status: "Dispatched" },
    { name: "Declined", status: "Declined" },
    { name: "Cancelled", status: "CANCELED" },
  ];

  function viewCurrentOrder(order) {
    fetchRetDispatchOrder(order.id);
    setShowModal(true);
  }

  function onChangeRows(viewRows) {
    fetchOrders(1, ordersTypes[currentIndex].status, viewRows, query);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchOrders(page, ordersTypes[currentIndex].status, rows, query);
  }

  useEffect(() => {
    setCurrentIndex(1);
    fetchOrders(1, ordersTypes[1].status);
  }, []);

  return (
    <div className="row justify-content-end">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <OrdersNavBar
          fetchOrders={fetchOrders}
          key={viewKey}
          currentIndex={currentIndex}
          ordersTypes={ordersTypes}
          setCurrentIndex={(index) => setCurrentIndex(index)}
        />
        <div className="bg_themed container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-6 form-group p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-right-0 "
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={Debouncer(() => {
                    if (query) {
                      fetchOrders(
                        1,
                        ordersTypes[currentIndex].status,
                        rows,
                        query
                      );
                      // searchOrders(query);
                    } else {
                      fetchOrders(
                        1,
                        ordersTypes[currentIndex].status,
                        rows,
                        ""
                      );
                    }
                  }, 2000)}
                  placeholder="Search"
                />
                <span className="input-group-text border-left-0">
                  <i className="ml-1 fas fa-search"></i>
                </span>
              </div>
            </div>
            <div className="d-flex">
              {canManage ? (
                <div
                  onClick={() => changePage(2)}
                  className="btn btn-primary btn-lg table_menu_btn mb-3 mr-3"
                >
                  Add Order
                </div>
              ) : (
                <div />
              )}
              <div
                onClick={() => {
                  const csvExporter = new ExportToCsv(options);
                  const generatedOrders = [];
                  for (let index = 0; index < orders.length; index++) {
                    const order = orders[index];
                    let orderItem = {
                      id: order.id,
                      retailer: order.retailer.name,
                      salesman: order.salesman
                        ? order.salesman.last_name
                          ? `${order.salesman.first_name} ${order.salesman.last_name}`
                          : order.salesman.first_name
                        : "",
                      offer: order.offers[0]
                        ? order.offers[0].detail_name
                        : "No Offer",
                      total: order.total_cost,
                      status: order.status,
                    };
                    generatedOrders.push(orderItem);
                  }
                  csvExporter.generateCsv(generatedOrders);
                }}
                className="btn btn-success btn-lg table_menu_btn mb-3 mr-2"
              >
                Export
              </div>
            </div>
            <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Table aria-label="collapsible ">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>
                      Date <i className="fas fa-sort ml-2"></i>
                    </th>
                    <th>
                      Reference No.
                      <i className="fas fa-sort ml-2"></i>
                    </th>
                    <th>Retailer</th>
                    <th>Salesman</th>
                    <th className="row justify-content-end mr-1">
                      <i className="fas fa-sort mr-2"></i>
                      Total
                    </th>
                    <th>Status</th>
                    <th>Details</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <TableBody>
                  {orders.map((order, index) => {
                    return (
                      <OrderTableRow
                        key={index}
                        order={order}
                        index={index + 1}
                        deleteRetailOrder={deleteRetailOrder}
                        updateRetailerOrderStatus={updateRetailerOrderStatus}
                        dispatchOrder={dispatchOrder}
                        viewEditOrder={viewEditOrder}
                        canManage={canManage}
                        viewOrderLogs={viewOrderLogs}
                        fetchRetDistOrder={fetchRetDistOrder}
                        viewCurrentOrder={viewCurrentOrder}
                        clearRetailOrderApproved={clearRetailOrderApproved}
                        cancelRetailOrder={cancelRetailOrder}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
          {pageDetails.last_page && pageDetails.last_page > 1 ? (
            <CustomPagination
              rows={rows}
              changeRows={onChangeRows}
              pageDetails={pageDetails}
              changePage={onChangePage}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
      <ViewOrderDetails
        order={ret_order}
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        dispatchOrder={dispatchOrder}
        updateRetailerOrderStatus={updateRetailerOrderStatus}
      />
    </div>
  );
}
