import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function AddNoteModal({ sendNoteMessage, show, handleModal }) {
  const [note, setNote] = useState("");

  return (
    <Modal
      show={show}
      onHide={handleModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="card-header bg_themed" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Note</Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <div className="form-group">
          <textarea
            type="text"
            rows="4"
            className="form-control"
            placeholder="Add reference note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            autoFocus
          />
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => {
            sendNoteMessage(note);
            setNote("");
            handleModal();
          }}
        >
          Submit Reason
        </button>
      </Modal.Footer>
    </Modal>
  );
}
