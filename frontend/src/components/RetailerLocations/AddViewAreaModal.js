import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function AddViewAreaModal(props) {
  const { show, handleModal, addRetailAreas, cities } = props;

  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [viewCities, setViewCities] = useState([]);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    setViewCities(cities);
  }, [cities]);

  function uploadArea() {
    setIsError(null);
    setResponseMessage("");
    if (area && city) {
      addRetailAreas({ area, city });
      clearModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input all fields");
    }
  }

  function clearModal() {
    setArea("");
    setCity("");
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
        <Modal.Title id="contained-modal-title-vcenter">Add Area</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <div className="form-group">
          <label>Add Area <CustomToolTip
                    message={"Input an area"}
                  />  </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter area"
            value={area}
            name="area"
            onChange={(e) => setArea(e.target.value)}
          />
        </div>

        <div class="form-group  mt-2">
          <label>Select City <CustomToolTip
                    message={"Choose a City"}
                  />  </label>
          <select
            class="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">...</option>
            {viewCities.map((viewCity, index) => {
              return (
                <option key={index} value={viewCity.id}>
                  {viewCity.name}
                </option>
              );
            })}
          </select>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadArea()}
        >
          Upload Area
        </button>
      </Modal.Footer>
    </Modal>
  );
}
