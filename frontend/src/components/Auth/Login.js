import React, { useState } from "react";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import ForgotPasswordModal from "./ForgotPasswordModal";

/** Login view for distributor */
export default function Login(props) {
  const { login, forgotPassword } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [passVisibility, setPassVisibility] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function authenticateUser() {
    setIsError(null);
    setResponseMessage("");
    if (email && password) {
      login(email, password);
    } else {
      setIsError(true);
      setResponseMessage("Please input all fields");
    }
  }

  return (
    <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img
                src={"../static/images/3955595.webp"}
                alt="login"
                className="login-card-img"
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="brand-wrapper">
                    <img
                      src={"../static/images/login.png"}
                      alt="logo"
                      className="logo"
                    />
                  </div>
                  <h3 className="ml-3">NetBot Group</h3>
                </div>
                <p className="login-card-description">Sign into your account</p>
                <CustomAlertBar
                  isError={isError}
                  responseMessage={responseMessage}
                />
                <div>
                  <div className="form-group">
                    <label className="sr-only">Email</label>
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <span className="input-group-text border-right-0">
                          <i className="btn_type fas fa-envelope"></i>
                        </span>
                        <input
                          type="email"
                          name="email"
                          className="form-control border-left-0"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Password</label>
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <span className="input-group-text border-right-0">
                          <i className="fas fa-lock"></i>
                        </span>
                        <input
                          type={passVisibility ? "text" : "password"}
                          name="password"
                          id="password"
                          className="form-control border-right-0 border-left-0"
                          placeholder="***********"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onKeyUp={(e) => {
                            if (e.key === "Enter") {
                              if (e.target.value && email) {
                                authenticateUser();
                              }
                            }
                          }}
                          required
                        />
                        <span
                          onClick={() => setPassVisibility(!passVisibility)}
                          className="input-group-text border-left-0 btn_type"
                        >
                          {passVisibility ? (
                            <i
                              className="fa fa-eye p-0 bg_themed"
                              id="eye"
                              aria-hidden="true"
                            ></i>
                          ) : (
                            <i
                              className="fa fa-eye-slash p-0 bg_themed"
                              id="eye"
                              aria-hidden="true"
                            ></i>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <form
                    className="visibily_none"
                    action="../accounts/login"
                    method="POST"
                    id="login_form"
                  >
                    <input type="hidden" id="var2" name="email" value={email} />
                    <input
                      value={password}
                      name="password"
                      type="hidden"
                      id="var1"
                    />
                  </form>

                  <button
                    className="btn btn-block login-btn mb-4"
                    onClick={() => authenticateUser()}
                  >
                    Login
                  </button>
                </div>
                <center>
                  <div
                    className="forgot-password-link btn_type"
                    onClick={() => setShowModal(true)}
                  >
                    Forgot password?
                  </div>
                  {/* <p className="login-card-footer-text">
                    Don't have an account?
                    <a href="#!" className="text-reset">
                      Register here
                    </a>
                  </p> */}
                </center>
                <nav className="login-card-footer-nav">
                  <a className="mr-3" href="#!">
                    Terms of use.
                  </a>
                  <a href="#!">Privacy policy</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ForgotPasswordModal
        show={showModal}
        handleModal={() => setShowModal(!showModal)}
        forgotPassword={forgotPassword}
      />
    </div>
  );
}
