import React, { useState } from "react";
import AddViewAreaModal from "./AddViewAreaModal";
import EditAreaModal from "./EditAreaModal";
import ViewAreaRow from "./ViewAreaRow";

export default function ViewAreas(props) {
  const {
    areas,
    addRetailAreas,
    cities,
    fetchRetailerCities,
    canManage,
    updateRetailerAreas,
    deleteRetailerArea,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [viewArea, setViewArea] = useState(null);

  function fetchCities() {
    fetchRetailerCities();
    setShowModal(true);
  }

  function editViewCities(area) {
    fetchRetailerCities();
    setViewArea(area);
    setShowEditModal(true);
  }

  return (
    <div className="row justify-content-between mt-2">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            <h3>Areas</h3>
            {canManage ? (
              <i onClick={() => fetchCities()} className="fas fa-plus"></i>
            ) : (
              <div />
            )}
          </div>
          <div className="card-content">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((area, index) => {
                  return (
                    <ViewAreaRow
                      area={area}
                      index={index}
                      key={index}
                      canManage={canManage}
                      deleteRetailerArea={deleteRetailerArea}
                      editViewCities={editViewCities}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddViewAreaModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        addRetailAreas={addRetailAreas}
        cities={cities}
      />
      <EditAreaModal
        show={showEditModal}
        handleModal={() => setShowEditModal(!showEditModal)}
        updateRetailerAreas={updateRetailerAreas}
        cities={cities}
        viewArea={viewArea}
      />
    </div>
  );
}
