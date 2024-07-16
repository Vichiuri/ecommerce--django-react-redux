import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomTextEditor from "../../widgets/CustomTextEditor";

export default function EditCompanyStatus(props) {
  const { show, handleModal, type, value, updateStatus } = props;

  const [statusValue, setStatusValue] = useState(value ? value : "");

  return (
    <Modal
      show={show}
      onHide={handleModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="card-header bg_themed" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{type}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <div>
          <div className="card-header mt-2">
            <h5>{type} Description*</h5>
          </div>

          <CustomTextEditor
            description={value || ""}
            setDescription={(e) => setStatusValue(e.target.getContent())}
          />
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => {
            updateStatus(type, statusValue);
            setStatusValue("");
            handleModal();
          }}
        >
          Save {type}
        </button>
      </Modal.Footer>
    </Modal>
  );
}
