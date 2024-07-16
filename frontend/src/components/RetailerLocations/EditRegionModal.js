import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EditRegionModal(props) {
  const { show, handleModal, updateRetailerRegions, viewRegion } = props;

  const [region, setRegion] = useState("");
  const [cityItem, setCityItem] = useState("");
  const [cities, setCities] = useState([]);
  const [removed_cities, setRemovedCities] = useState([]);
  const [add_cities, setAddedCities] = useState([]);
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (viewRegion) {
      let cityArray = [];
      if (viewRegion.region_cities) {
        cityArray = viewRegion.region_cities.map((item) => {
          return { id: item.id, name: item.name };
        });
      }
      setCities(cityArray);
      setRegion(viewRegion.name);
    }
  }, [viewRegion]);

  function removeCityObject(e_cityItem) {
    let citiesArray = cities.filter((city) => city !== e_cityItem);
    if (e_cityItem.id) {
      let removedCitiesArray = [...removed_cities, e_cityItem.id];
      setRemovedCities(removedCitiesArray);
    }
    let add_array = add_cities.filter((city) => city !== e_cityItem);
    setCities(citiesArray);
    setAddedCities(add_array);
  }

  function addCityItem(e) {
    if (e.key === "Enter") {
      let citiesArray = [...cities, { name: cityItem }];
      let add_Array = [...add_cities, cityItem];
      setAddedCities(add_Array);
      setCities(citiesArray);
      setCityItem("");
    }
  }

  function uploadRegion() {
    if (region) {
      updateRetailerRegions({
        name: region,
        delete_cities: removed_cities,
        add_cities: add_cities,
        id: viewRegion.id,
      });
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input all fields");
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
        <Modal.Title id="contained-modal-title-vcenter">Add Region</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <div className="form-group">
          <label>Region <CustomToolTip
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
          <label> <CustomToolTip
                    message={"Add city then press enter"}
                  />  </label>
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
                      {city.name}
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
