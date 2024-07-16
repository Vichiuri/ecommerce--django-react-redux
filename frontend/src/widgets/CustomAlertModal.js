import React from "react";
import Modal from "react-bootstrap/Modal";

export default function CustomAlertModal(props) {
    const { values, handleModal, goAction } = props;
    const { show, goText, title, description } = values;
    return (
        <Modal
            show={show}
            onHide={() => handleModal()}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="card-header" closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{description}</p>
            </Modal.Body>

            <Modal.Footer>
                <button
                    className="btn btn-secondary btn-lg"
                    onClick={() => handleModal()}
                >
                    Close
                </button>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => goAction()}
                >
                    {goText}
                </button>
            </Modal.Footer>
        </Modal>
    );
}
