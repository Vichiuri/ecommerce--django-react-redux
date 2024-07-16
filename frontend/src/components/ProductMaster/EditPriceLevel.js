import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EditPriceLevel(props) {
  const { show, handleModal, updatePriceLevel, level } = props;

  const [level_name, setLevelName] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (level) {
      setLevelName(level.level_name);
    }
  }, [level]);

  function uploadPriceLevel() {
    setIsError(null);
    setResponseMessage("");
    if (level_name) {
      updatePriceLevel({ level_name, id: level.id });
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please insert all name");
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
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Price Level
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />

        <div className="form-group">
          <label>Level Name* <CustomToolTip message={"Input the most appropriate level"} />  </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter level name"
            value={level_name}
            name="level_name"
            onChange={(e) => setLevelName(e.target.value)}
            required
            autoFocus
          />
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadPriceLevel()}
        >
          Edit Price Level
        </button>
      </Modal.Footer>
    </Modal>
  );
}
