import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomToolTip from "../../widgets/CustomToolTip";


export default function AddExchangeUnitModal({
  show,
  handleModal,
  addProductUnits,
}) {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  function uploadUnit() {
    setIsError(null);
    setResponseMessage("");
    if (name && symbol) {
      addProductUnits({ name, symbol });
      clearModal();
    } else {
      setIsError(true);
      setResponseMessage("Please insert all fields");
    }
  }

  function clearModal() {
    setName("");
    setSymbol("");
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
        <Modal.Title id="contained-modal-title-vcenter">Add Unit</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <div className="form-group">
          <label>Unit Name*<CustomToolTip message={"Input the correct unit name"} /></label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter unit name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            autoFocus
            required
          />
        </div>

        <div className="form-group">
          <label>Symbol* <CustomToolTip message={"Input the right symbol"} /> </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter symbol"
            value={symbol}
            name="symbol"
            onChange={(e) => setSymbol(e.target.value)}
            required
          />
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadUnit()}
        >
          Add Unit
        </button>
      </Modal.Footer>
    </Modal>
  );
}
