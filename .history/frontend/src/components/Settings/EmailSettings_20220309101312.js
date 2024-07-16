import React, { useState, useEffect } from "react";
import CustomAlertBar from "../../widgets/CustomAlertDialog";
import CustomCheckBox from "../../widgets/CustomCheckBox";
import CustomToolTip from "../../widgets/CustomToolTip";

export default function EmailSettings(props) {
  const { addEmailSettings, updateEmailSettings, email_settings } = props;

  const [email_host, setEmailHost] = useState("");
  const [email_port, setEmailPort] = useState(0);
  const [email_user, setEmailUser] = useState("");
  const [email_password, setEmailPassword] = useState("");
  const [use_tls, setUseTls] = useState(false);
  const [test_receiver, setTestReceiver] = useState("");
  const [isError, setIsError] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (email_settings) {
      setEmailHost(email_settings.email_host);
      setEmailPort(email_settings.email_port ? email_settings.email_port : "");
      setEmailUser(email_settings.email_user);
      setEmailPassword(email_settings.email_password);
      setUseTls(email_settings.use_tls);
      setTestReceiver(email_settings.test_receiver);
    }
  }, [email_settings]);

  function uploadEmailSettings() {
    setIsError(null);
    setResponseMessage("");
    if (email_host && email_user && email_password && test_receiver) {
      if (email_settings.id) {
        updateEmailSettings({
          id: email_settings.id,
          email_host,
          email_port,
          email_user,
          email_password,
          use_tls,
          test_receiver,
        });
      } else {
        addEmailSettings({
          email_host,
          email_port,
          email_user,
          email_password,
          use_tls,
          test_receiver,
        });
      }
    } else if (!email_host) {
      setIsError(true);
      setResponseMessage("Please input email host");
    } else if (!email_user) {
      setIsError(true);
      setResponseMessage("Please input sender email");
    } else if (!email_password) {
      setIsError(true);
      setResponseMessage("Please input email password");
    } else if (!test_receiver) {
      setIsError(true);
      setResponseMessage("Please input test email");
    }
  }

  return (
    <div className="profile-info col-md-9">
      <div className="card panel">
        <div class="bio-graph-heading card-header">
          <h3>Email Settings</h3>
        </div>
        <div className="card-content panel-body container-fluid">
          <CustomAlertBar isError={isError} responseMessage={responseMessage} />

          <div className="row justify-content-between ">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
              <label>Email Host* <CustomToolTip message={"Input Email Host"}/></label>

              <input
                type="text"
                className="form-control"
                placeholder="Please enter host name"
                value={email_host}
                name="email_host"
                onChange={(e) => setEmailHost(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
              <label>Email Port* <CustomToolTip message={"Input Email Port"}/> </label>

              <input
                type="number"
                className="form-control"
                placeholder="Please enter email port"
                value={email_port}
                name="email_port"
                onChange={(e) => setEmailPort(e.target.value)}
              />
            </div>
          </div>

          <div className="row justify-content-between">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
              <label>Sender Email*<CustomToolTip message={"Input Sender Email"}/> </label>

              <input
                type="email"
                className="form-control"
                placeholder="Please enter email address"
                value={email_user}
                name="email_user"
                onChange={(e) => setEmailUser(e.target.value)}
                required
              />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
              <label>Email Password*  <CustomToolTip message={"Input Strong Password"}/></label>

              <input
                type="password"
                className="form-control"
                placeholder="Please enter password"
                value={email_password}
                name="email_password"
                onChange={(e) => setEmailPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row justify-content-between">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
              <label>Test Email* <CustomToolTip message={"Input Test Email"}/> </label>

              <input
                type="email"
                className="form-control"
                placeholder="Please enter test email"
                value={test_receiver}
                name="test_receiver"
                onChange={(e) => setTestReceiver(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row justify-content-between">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 form-group">
              <CustomCheckBox
                option={{
                  name: "Use TLS for non-ssl Servers",
                  selected: use_tls,
                }}
                handleChange={(tsl) => setUseTls(!tsl.selected)}
              />
            </div>
          </div>

          <div className="row justify-content-end">
            <div
              onClick={() => uploadEmailSettings()}
              className="btn btn-primary btn-lg mt-5 mr-5 mb-2"
            >
              Save Email Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
