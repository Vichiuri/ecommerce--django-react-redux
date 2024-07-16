import React, { useState } from "react";
import EditGroupManagement from "./EditGroupManagement";
import GroupManagementModal from "./GroupManagementModal";
import GroupManagementRow from "./GroupManagementRow";

export default function ViewGroupManagement(props) {
  const {
    groups,
    addManagementGroup,
    deleteManagementGroup,
    updateManagementGroup,
    canManage,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [viewGroup, setViewGroup] = useState(null);

  function editGroup(group) {
    setViewGroup(group);
    setShowEditModal(true);
  }

  return (
    <div className="row justify-content-between">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="card">
          <div className="card-header">
            <h3>Management Groups</h3>
            {canManage ? (
              <i
                onClick={() => setShowModal(true)}
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
                  <th>Name</th>
                  <th>Status</th>
                  <th>Users</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group, index) => {
                  return (
                    <GroupManagementRow
                      group={group}
                      index={index}
                      key={index}
                      deleteManagementGroup={deleteManagementGroup}
                      editGroup={editGroup}
                      canManage={canManage}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <GroupManagementModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        addManagementGroup={addManagementGroup}
      />
      <EditGroupManagement
        show={showEditModal}
        handleModal={() => setShowEditModal(!showEditModal)}
        updateManagementGroup={updateManagementGroup}
        group={viewGroup}
      />
    </div>
  );
}
