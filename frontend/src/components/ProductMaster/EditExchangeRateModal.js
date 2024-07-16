import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Debouncer from "../../utils/Debouncer";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EditExchangeRateModal(props) {
  const { show, handleModal, units, updateProductCompoundUnit, c_unit } = props;
  const [name, setName] = useState("");
  const [f_unit, setFUnit] = useState("");
  const [viewUnits, setViewUnits] = useState([]);
  const [s_unit, setSUnit] = useState("");
  const [f_to_s, setFToS] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [viewMessage, setViewMessage] = useState("");

  useEffect(() => {
    setViewUnits(units);
    if (c_unit) {
      setName(c_unit.name);
      setFToS(c_unit.f_to_s);
      setFUnit(c_unit.first_unit.id);
      setSUnit(c_unit.second_unit.id);
    }
  }, [units, c_unit]);

  function reduceList(id) {
    const unitsArray = units.filter((unit) => unit.id != id);
    setViewUnits(unitsArray);
  }

  function uploadCompoundUnit() {
    setIsError(null);
    setResponseMessage("");
    if (name && f_unit && s_unit && f_to_s) {
      updateProductCompoundUnit({
        name,
        f_unit,
        s_unit,
        f_to_s,
        id: c_unit.id,
      });
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input all fields");
    }
  }

  function displayResult() {
    const f_unit_item = units.filter((item) => item.id == f_unit)[0];
    const s_unit_item = units.filter((item) => item.id == s_unit)[0];

    setViewMessage(
      `1 ${f_unit_item.name} is equals to ${f_to_s} ${s_unit_item.name}`
    );
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
          Edit Compound Rate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <div className="row justify-content-between">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>Unit Name* <CustomToolTip message={"Enter the best unit name"} />    </label>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter unit name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-group">
            <label>Select First Units* <CustomToolTip message={"choose from the dropdown"} />  </label>
            <select
              className="form-control"
              value={f_unit}
              onChange={(e) => {
                setFUnit(e.target.value);
                reduceList(e.target.value);
              }}
              required
            >
              <option value="">...</option>
              {units.map((viewUnit, index) => {
                return (
                  <option key={index} value={viewUnit.id}>
                    {viewUnit.name} {"(" + viewUnit.symbol + ")"}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-group">
            <label>Select Second Units*   <CustomToolTip message={"choose from the dropdown"} />   </label>
            <select
              className="form-control"
              value={s_unit}
              onChange={(e) => {
                setSUnit(e.target.value);
                reduceList(e.target.value);
              }}
              required
            >
              <option value="">...</option>
              {units.map((viewUnit, index) => {
                return (
                  <option key={index} value={viewUnit.id}>
                    {viewUnit.name} {"(" + viewUnit.symbol + ")"}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
            <label>First to second rate*  <CustomToolTip message={"Input the most right amount"} />  </label>
            <input
              type="number"
              className="form-control"
              placeholder="Please enter symbol"
              value={f_to_s}
              name="symbol"
              onChange={(e) => setFToS(e.target.value)}
              onKeyUp={Debouncer(() => displayResult(), 500)}
              required
            />
            <span className="mt-2 alert alert-info">
              <span className="h6">Interpretation:</span> {viewMessage}
            </span>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => uploadCompoundUnit()}
        >
          Edit Rate
        </button>
      </Modal.Footer>
    </Modal>
  );
}
