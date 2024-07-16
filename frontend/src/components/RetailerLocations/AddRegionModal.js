import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function AddRegionModal(props) {
  const { show, handleModal, addRetailRegions } = props;

  const [region, setRegion] = useState("");
  const [cityItem, setCityItem] = useState("");
  const [cities, setCities] = useState([]);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  function removeCityObject(e_cityItem) {
    let citiesArray = cities.filter((city) => city != e_cityItem);

    setCities(citiesArray);
  }

  function addCityItem(e) {
    if (e.key === "Enter") {
      let citiesArray = [...cities, cityItem];
      setCities(citiesArray);
      setCityItem("");
    }
  }

  function uploadRegion() {
    if (region) {
      addRetailRegions({ region, cities });
      clearModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input all fields");
    }
  }

  function clearModal() {
    setRegion("");
    setCityItem("");
    setCities([]);
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
        <Modal.Title id="contained-modal-title-vcenter">Add Region</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <div className="form-group">
          <label>Region*<CustomToolTip
                    message={"Input region"}
                  /> </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter region"
            value={region}
            name="region"
            onChange={(e) => setRegion(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className="form-group">
          <label>Cities<CustomToolTip
                    message={"Add city then press enter"}
                  /> </label>
          <input
            type="text"
            className="form-control"
            placeholder="Add city name and press enter"
            value={cityItem}
            onChange={(e) => setCityItem(e.target.value)}
            onKeyDown={(e) => {
              addCityItem(e);
            }}
          />
        </div>
        {cities.length != 0 ? (
          <div className="card-content border">
            <div className="row">
              {cities.map((city, index) => {
                return (
                  <div
                    className="col-lg-4 col-md-4 col-sm-4 col-xs-6 col-xs-6 mb-2 p-2"
                    key={index}
                  >
                    <button className="tag_button btn btn-primary">
                      {city}
                      <i
                        className="fas fa-times"
                        onClick={() => removeCityObject(city)}
                      ></i>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div />
        )}
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadRegion()}
        >
          Upload Region
        </button>
      </Modal.Footer>
    </Modal>
  );
}
