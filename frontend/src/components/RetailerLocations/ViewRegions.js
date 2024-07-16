import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import ViewRegionRow from "./ViewRegionRow";
import AddRegionModal from "./AddRegionModal";
import EditRegionModal from "./EditRegionModal";
import AddCityModal from "./AddCityModal";
import EditCityModal from "./EditCityModal";

export default function ViewRegions({
  retailer_regions,
  addRetailRegions,
  canManage,
  updateRetailerRegions,
  deleteRetailerRegions,
  addRetailerCity,
  updateRetailerCity,
  deleteRetailerCity,
}) {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddCityModal, setShowAddCityModal] = useState(false);
  const [showEditCityModal, setShowEditCityModal] = useState(false);
  const [viewRegion, setViewRegion] = useState(null);
  const [viewCity, setViewCity] = useState(null);

  function viewEditRegion(region) {
    setViewRegion(region);
    setShowEditModal(true);
  }

  function addCity(region) {
    setViewRegion(region);
    setShowAddCityModal(true);
  }

  function editCity(region, city) {
    setViewRegion(region);
    setViewCity(city);
    setShowEditCityModal(true);
  }

  return (
    <div className="row justify-content-end">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs12 p-2">
        <div className="card">
          <div className="card-header">
            <h3>View Regions</h3>
            {canManage ? (
              <i onClick={() => setShowModal(true)} className="fas fa-plus"></i>
            ) : (
              <div />
            )}
          </div>
          <div className="card-content">
            <Table aria-label="collapsible table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                  <th>Cities</th>
                </tr>
              </thead>

              <TableBody>
                {retailer_regions.map((region, index) => {
                  return (
                    <ViewRegionRow
                      region={region}
                      index={index}
                      key={index}
                      canManage={canManage}
                      deleteRetailerRegions={deleteRetailerRegions}
                      viewEditRegion={viewEditRegion}
                      addCity={addCity}
                      editCity={editCity}
                      deleteRetailerCity={deleteRetailerCity}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <AddRegionModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        addRetailRegions={addRetailRegions}
      />
      <EditRegionModal
        show={showEditModal}
        handleModal={() => setShowEditModal(!showEditModal)}
        updateRetailerRegions={updateRetailerRegions}
        viewRegion={viewRegion}
      />
      <AddCityModal
        show={showAddCityModal}
        handleModal={() => setShowAddCityModal(!showAddCityModal)}
        region={viewRegion}
        addRetailerCity={addRetailerCity}
      />
      <EditCityModal
        show={showEditCityModal}
        handleModal={() => setShowEditCityModal(!showEditCityModal)}
        region={viewRegion}
        city={viewCity}
        updateRetailerCity={updateRetailerCity}
      />
    </div>
  );
}
