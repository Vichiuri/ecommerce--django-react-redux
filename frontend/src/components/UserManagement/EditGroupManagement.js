import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import customPermission from "../../utils/CustomPermissions";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomCheckBox from "../../widgets/CustomCheckBox";
import CustomToolTip from "../../widgets/CustomToolTip";


export default function EditGroupManagement(props) {
  const { show, handleModal, group, updateManagementGroup } = props;
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState(customPermission);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (group) {
      setName(group.name);

      let permissionArray = [];
      Object.keys(group.permission).map((prop, key) => {
        if (prop != "id" && prop != "distributor") {
          const viewPerm = permissions.filter((item) => item.label == prop)[0];
          if (viewPerm) {
            viewPerm.selected = group.permission[prop];
            permissionArray.push(viewPerm);
          }
        }
      });
      setPermissions(permissionArray);
    }
  }, [group]);

  function uploadPermissionGroup() {
    setIsError(null);
    setResponseMessage("");
    if (name) {
      const body = { name, id: group.id };
      for (let i = 0; i < permissions.length; i++) {
        const perm = permissions[i];
        body[perm.label] = perm.selected;
      }

      updateManagementGroup(body);
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input group name");
    }
  }

  function getChangePermission(label) {
    const d_permission = permissions.filter(
      (t_permission) => t_permission.label === label
    )[0];

    if (d_permission) {
      return d_permission.selected;
    } else {
      return false;
    }
  }

  return (
    <Modal
      show={show}
      onHide={handleModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="card-header bg_themed" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Group</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <div className="row p-2">
          {permissions.map((permission, index) => {
            if (!permission.disabled) {
              const view_primary = permission.primary
                ? getChangePermission(permission.primary)
                : false;
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <CustomCheckBox
                    key={index}
                    option={permission}
                    disabled={view_primary}
                    handleChange={(m_option) => {
                      let permissionsArray = permissions.filter(
                        (item) => item.label != m_option.label
                      );
                      m_option.selected = !permission.selected;

                      permissionsArray.splice(index, 0, m_option);
                      if (permission.secondary) {
                        let v_array = permissionsArray.map((item) => {
                          let new_item = item;
                          if (
                            new_item.label === m_option.secondary &&
                            m_option.selected === true
                          ) {
                            new_item.selected = true;
                          }
                          return new_item;
                        });
                        permissionsArray = v_array;
                      }
                      setPermissions(permissionsArray);
                    }}
                  />
                </div>
              );
            } else {
              return <div key={index} />;
            }
          })}
        </div>
        <div className="form-group">
          <label>Group Name <CustomToolTip message={"Enter a Group Name"}/> </label>
          <input
            type="text"
            className="form-control"
            placeholder="Add a Group Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadPermissionGroup()}
        >
          Save Group
        </button>
      </Modal.Footer>
    </Modal>
  );
}
