import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomAlertBar from "../../widgets/CustomAlertDialog";

/** Modal for reseting distributor password */
export default function ForgotPasswordModal(props) {
  const { show, handleModal, forgotPassword } = props;

  const [f_email, setFEmail] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  function sendForgotPassword() {
    setIsError(null);
    setResponseMessage("");
    if (f_email) {
      forgotPassword(f_email);
      setFEmail("");
      handleModal();
    } else {
      setIsError(true);
      setResponseMessage("Please input email address");
    }
  }

  return (
    <Modal
      show={show}
      onHide={handleModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="card-header bg_themed" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Forgot Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-content bg_themed">
        <CustomAlertBar isError={isError} responseMessage={responseMessage} />
        <div className="form-group">
          <label className="sr-only">Email</label>
          <div className="form-group">
            <div className="input-group mb-3">
              <span className="input-group-text border-right-0">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                name="f_email"
                className="form-control border-left-0"
                value={f_email}
                onChange={(e) => setFEmail(e.target.value)}
                placeholder="Email address"
                required
              />
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg_themed">
        <button
          className="btn btn-success btn-block mr-2 ml-2"
          onClick={() => sendForgotPassword()}
        >
          Submit Email
        </button>
      </Modal.Footer>
    </Modal>
  );
}
