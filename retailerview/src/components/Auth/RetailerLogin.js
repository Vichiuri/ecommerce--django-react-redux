import React, { useState } from "react";
import ForgotPasswordModal from "../../../../frontend/src/components/Auth/ForgotPasswordModal";
import CustomAlertBar from "../../../../frontend/src/widgets/CustomAlertDialog";

export default function RetailerLogin(props) {
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
    <div class="login-root">
      <div
        class="box-root flex-flex flex-direction--column"
        style={{ minHeight: "100vh", flexGrow: "1" }}
      >
        <div class="loginbackground box-background--white padding-top--64">
          <div class="loginbackground-gridContainer">
            <div
              class="box-root flex-flex"
              style={{ gridArea: "top / start / 8 / end" }}
            >
              <div
                class="box-root"
                style={{
                  backgroundImage:
                    "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                  flexGrow: "1",
                }}
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style={{ gridArea: "4 / 2 / auto / 5" }}
            >
              <div
                class="box-root box-divider--light-all-2 animationLeftRight tans3s"
                style={{ flexGrow: "1" }}
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style={{ gridArea: "6 / start / auto / 2" }}
            >
              <div
                class="box-root box-background--blue800"
                style={{ flexGrow: "1" }}
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style={{ gridArea: "7 / start / auto / 4" }}
            >
              <div
                class="box-root box-background--blue animationLeftRight"
                style={{ flexGrow: "1" }}
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style={{ gridArea: "8 / 4 / auto / 6" }}
            >
              <div
                class="box-root box-background--gray100 animationLeftRight tans3s"
                style={{ flexGrow: "1" }}
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style={{ gridArea: "2 / 15 / auto / end" }}
            >
              <div
                class="box-root box-background--cyan200 animationRightLeft tans4s"
                style={{ flexGrow: "1" }}
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style={{ gridArea: "3 / 14 / auto / end" }}
            >
              <div
                class="box-root box-background--blue animationRightLeft"
                style={{ flexGrow: "1" }}
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style={{ gridArea: "4 / 17 / auto / 20" }}
            >
              <div
                class="box-root box-background--gray100 animationRightLeft tans4s"
                style={{ flexGrow: "1" }}
              ></div>
            </div>
            <div
              class="box-root flex-flex"
              style={{ gridArea: "5 / 14 / auto / 17" }}
            >
              <div
                class="box-root box-divider--light-all-2 animationRightLeft tans3s"
                style={{ flexGrow: "1" }}
              ></div>
            </div>
          </div>
        </div>
        <div
          class="box-root padding-top--24 flex-flex flex-direction--column"
          style={{ flexGrow: "1", zIndex: "9" }}
        >
          <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1>
              <a href="#" rel="dofollow">
                NetBot
              </a>
            </h1>
          </div>
          <div class="formbg-outer">
            <div class="formbg">
              <div class="formbg-inner padding-horizontal--48">
                <span class="padding-bottom--15">Sign in to your account</span>
                <div id="stripe-login">
                  <CustomAlertBar
                    isError={isError}
                    responseMessage={responseMessage}
                  />
                  <div class="field padding-bottom--24">
                    <label for="email">Email</label>
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
                  <div class="field padding-bottom--24">
                    <label for="password">Password</label>

                    <div class="input-group">
                      <input
                        type={passVisibility ? "text" : "password"}
                        name="password"
                        id="password"
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
                      <i
                        className={
                          passVisibility ? "fas fa-eye" : "fas fa-eye-slash"
                        }
                        onClick={() => setPassVisibility(!passVisibility)}
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                    <div onClick={() => setShowModal(true)} class="reset-pass">
                      <div>Forgot your password?</div>
                    </div>
                  </div>
                  <div class="field padding-bottom--24">
                    <input
                      onClick={() => authenticateUser()}
                      type="submit"
                      name="submit"
                      value="Continue"
                    />
                  </div>
                  {/* <div class="field">
                    <a class="ssolink" href="#">
                      Use single sign-on (Google) instead
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="footer-link padding-top--24">
              {/* <span>
                Don't have an account? <a href="">Sign up</a>
              </span> */}
              <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                <span>
                  <a href="#">© NetBot Solutions</a>
                </span>
                <span>
                  <a href="#">Contact</a>
                </span>
                <span>
                  <a href="#">Privacy & terms</a>
                </span>
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
