import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import ResetScroll from "../../../frontend/src/utils/ResetScroll";
import store from "../redux/store";
import RetailerPrivateRoute from "../utils/RetailerPrivateRoute";
import AuthBody from "./Auth/AuthBody";
import Home from "./Home";
import { fetchRetailUser } from "../redux/Actions/RetailerAuth";

export default function App() {
  useEffect(() => {
    store.dispatch(fetchRetailUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <HashRouter>
        <ResetScroll />
        <Fragment>
          <Switch>
            <RetailerPrivateRoute path="/home" component={Home} />
            <Route path="/login" component={AuthBody} />

            <Redirect from="/" to="/home" />
          </Switch>
        </Fragment>
      </HashRouter>
    </Provider>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
