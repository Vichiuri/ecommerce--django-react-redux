import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthBody from "./Auth/AuthBody";
import Home from "./Home";
import store from "../redux/store";
import { fetchUser } from "../redux/Actions/Auth";
import ResetScroll from "../utils/ResetScroll";
import PrivateRoutes from "../utils/PrivateRoutes";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import OnBoarding from "./OnBoarding/OnBoarding";

/** Initial capture page when website loads */
export default function App() {
  useEffect(() => {
    store.dispatch(fetchUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <HashRouter>
        <ResetScroll />
        <Fragment>
          <Switch>
            <PrivateRoutes path="/home" component={Home} />
            <Route path="/login" component={AuthBody} />
            <PrivateRoutes path="/onboard" component={OnBoarding} />

            <Redirect from="/" to="/home" />
          </Switch>
        </Fragment>
      </HashRouter>
    </Provider>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
