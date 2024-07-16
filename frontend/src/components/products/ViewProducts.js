import React, { useState, useEffect } from "react";
import Debouncer from "../../utils/Debouncer";
import ViewProductRow from "./ViewProductRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import ViewProductDescription from "./ViewProductDescription";
import CustomPagination from "../../widgets/CustomPagination";

export default function ViewProducts(props) {
  const {
    changePage,
    products,
    deleteProduct,
    editProduct,
    canManage,
    pageDetails,
    fetchProducts,
    updateProductState,
  } = props;

  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(25);
  const [viewProduct, setViewProduct] = useState(null);
  const [showModal, setShowModal] = useState();

  function viewDescription(v_product) {
    setShowModal(true);
    setViewProduct(v_product);
  }

  function onChangeRows(viewRows) {
    fetchProducts(1, "", query, viewRows);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchProducts(page, "", query, rows);
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <div className="bg_themed container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-6 form-group p-1">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-right-0 "
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={Debouncer(() => {
                    if (query) {
                      fetchProducts(1, "", query, rows);
                    } else {
                      fetchProducts(1, "", "", rows);
                    }
                  }, 2000)}
                  placeholder="Search"
                />
                <span className="input-group-text border-left-0">
                  <i className="ml-1 fas fa-search"></i>
                </span>
              </div>
            </div>
            <div>
              {canManage ? (
                <div
                  onClick={() => changePage(2)}
                  className="btn btn-primary btn-lg table_menu_btn mr-3"
                >
                  Add Product
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>

          <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Table aria-label="collapsible ">
              <thead>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th className="row justify-content-end mr-1">
                    <i className="fas fa-sort mr-2"></i>
                    Price
                  </th>
                  <th>Stock</th>
                  <th>Unit</th>
                  <th>Description</th>
                  <th>Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <TableBody>
                {products.map((product, index) => {
                  return (
                    <ViewProductRow
                      key={index}
                      index={index}
                      product={product}
                      deleteProduct={deleteProduct}
                      editProduct={editProduct}
                      canManage={canManage}
                      viewProductDescription={viewDescription}
                      updateProductState={updateProductState}
                    />
                  );
                })}
              </TableBody>
            </Table>
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
      </div>
      <ViewProductDescription
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        product={viewProduct}
        editProduct={editProduct}
      />
    </div>
  );
}
