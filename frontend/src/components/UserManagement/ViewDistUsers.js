import React, { useState } from "react";
import AddDistUserModal from "./AddDistUserModal";
import DistUserRow from "./DistUserRow";
import EditDistUserModal from "./EditDistUserModal";

export default function ViewDistUsers(props) {
  const {
    dist_users,
    fetchManagementGroups,
    groups,
    addDistUser,
    deleteDistUser,
    updateDistUser,
    canManage,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [viewUser, setViewUser] = useState(null);

  function editViewUser(user) {
    setViewUser(user);
    fetchManagementGroups();
    setShowEditModal(true);
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            <h3>View User</h3>
            {canManage ? (
              <i
                onClick={() => {
                  fetchManagementGroups();
                  setShowModal(true);
                }}
                className="fas fa-plus btn_type"
              ></i>
            ) : (
              <div />
            )}
          </div>
          <div className="card-content">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Group</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dist_users.map((dist_user, index) => {
                  return (
                    <DistUserRow
                      dist_user={dist_user}
                      index={index}
                      key={index}
                      editViewUser={editViewUser}
                      deleteDistUser={deleteDistUser}
                      canManage={canManage}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddDistUserModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        groups={groups}
        addDistUser={addDistUser}
      />
      <EditDistUserModal
        show={showEditModal}
        handleModal={() => setShowEditModal(!showEditModal)}
        groups={groups}
        updateDistUser={updateDistUser}
        dist_user={viewUser}
      />
    </div>
  );
}
