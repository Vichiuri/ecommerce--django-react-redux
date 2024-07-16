import React, { useState } from "react";
import Debouncer from "../../utils/Debouncer";
import ProductBrandRow from "./ProductBrandRow";
import CustomPagination from "../../widgets/CustomPagination";
import "../Categories/Categories.css";
import AddProductBrandModal from "./AddProductBrandModal";
import EditProductBrandModal from "./EditProductBrandModal";


export default function ProductBrands(props) {
  const {
    brands,
    addProductBrand,
    updateProductBrand,
    deleteProductBrand,
    pageDetails,
    fetchProductBrand,
    canManage,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editBrand, setEditBrand] = useState(null);
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState(25);

  function viewEditProductBrand(brand) {
    setEditBrand(brand);
    setShowEditModal(true);
  }

  function onChangeRows(viewRows) {
    fetchProductBrand(1, viewRows, query);
    setRows(viewRows);
  }

  function onChangePage(page) {
    fetchProductBrand(page, rows, query);
  }

  return (
    <div className="bg_themed container-fluid">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-4 col-md-6 col-sm-6 form-group align-items-center p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={Debouncer(() => {
                if (query) {
                  fetchProductBrand(1, rows, query);
                } else {
                  fetchProductBrand(1, rows, "");
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
              onClick={() => setShowModal(true)}
              className="btn btn-primary btn-lg table_menu_btn mr-3"
            >
              Add Brand
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
      <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12 p-2">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => {
              return (
                <ProductBrandRow
                  key={index}
                  index={index}
                  brand={brand}
                  deleteProductBrand={deleteProductBrand}
                  viewEditProductBrand={viewEditProductBrand}
                  canManage={canManage}
                />
              );
            })}
          </tbody>
        </table>
        {pageDetails.last_page && pageDetails.last_page > 1 ? (
          <CustomPagination
            rows={rows}
            changeRows={onChangeRows}
            pageDetails={pageDetails}
            changePage={onChangePage}
            customViewRows={[
              { name: 6, value: 6 },
              { name: 15, value: 15 },
              { name: 20, value: 20 },
            ]}
          />
        ) : (
          <div />
        )}
      </div>
      <AddProductBrandModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        addProductBrand={addProductBrand}
      />
      <EditProductBrandModal
        show={showEditModal}
        handleModal={() => setShowEditModal(!showEditModal)}
        updateProductBrand={updateProductBrand}
        brand={editBrand}
      />
    </div>
  );
}
