import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import SimpleBackdrop from "../../../frontend/src/widgets/SimpleBackDrop";
import retailerRoutes from "../utils/RetailerRoutes";
import Navigation from "./NavBar/Navigation";
import Footer from "./Footer/Footer";

export default function Home() {
  const switchRoutes = (
    <Suspense fallback={<SimpleBackdrop open={true} />}>
      <Switch>
        {retailerRoutes.map((prop, key) => {
          if (prop.layout === "/home") {
            return (
              <Route
                exact
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          }

          return null;
        })}

        <Redirect from="/home" to="/home/dashboard" />
      </Switch>
    </Suspense>
  );
  return (
    <div class="page-wrapper lazyload-image">
      <Navigation />
      {switchRoutes}
      <Footer />
    </div>
  );
}
