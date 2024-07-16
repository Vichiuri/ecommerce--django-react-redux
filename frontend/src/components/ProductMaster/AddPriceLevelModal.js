import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function AddPriceLevelModal(props) {
  const { show, handleModal, addProductLevels } = props;

  const [level_name, setLevelName] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  function uploadPriceLevel() {
    setIsError(null);
    setResponseMessage("");
    if (level_name) {
      addProductLevels({ level_name });
      clearModal();
    } else {
      setIsError(true);
      setResponseMessage("Please insert all name");
    }
  }

  function clearModal() {
    setLevelName("");
    handleModal();
  }

  return (
    <Modal
      show={show}
      onHide={handleModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="card-header bg_themed" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Price Level
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />

        <div className="form-group">
          <label>Level Name* <CustomToolTip message={"Input the most appropriate level"} />   </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter level name"
            value={level_name}
            name="level_name"
            onChange={(e) => setLevelName(e.target.value)}
            autoFocus
            required
          />
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadPriceLevel()}
        >
          Add Price Level
        </button>
      </Modal.Footer>
    </Modal>
  );
}
