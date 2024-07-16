import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import CustomAlertBar from "../../widgets/CustomAlertDialog";

export default function EditCityModal(props) {
  const { city, region, updateRetailerCity, show, handleModal } = props;

  const [name, setName] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (city) {
      setName(city.name);
    }
  }, [city]);

  function uploadCity() {
    if (name) {
      updateRetailerCity(
        { region_id: region.id, name, id: city.id },
        region.id
      );
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please enter city name");
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
        <Modal.Title id="contained-modal-title-vcenter">Add City</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add reference note"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadCity()}
        >
          Add City
        </button>
      </Modal.Footer>
    </Modal>
  );
}
