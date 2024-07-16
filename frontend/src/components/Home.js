import React, { Suspense, useEffect, useState } from "react";
import Navigation from "./NavBar/Navigation";
import { Redirect, Route, Switch, useLocation } from "react-router";
import routes from "../utils/routes";
import { getHomeRoute, SaveHomeRoute } from "../utils/HomeRoutes";
import CustomProgressBar from "./ProgressBar/CustomProgressBar";
import SimpleBackdrop from "../widgets/SimpleBackDrop";
import { changeMenu, ControlMenu } from "../utils/ControlMenu";
import { getTokenConfig, onMessageListener } from "../utils/FireBaseConfig";
import { connect } from "react-redux";
import { updateUserToken } from "../redux/Actions/Auth";
import { updateDistNotificationList } from "../redux/Actions/Notification";
import NotificationTab from "../widgets/NotificationTabView";

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    if (location && location.pathname != "/home") {
      SaveHomeRoute(location.pathname);
    }
  }, [location]);
}

/** Authenticated user home page */
function Home(props) {
  usePageViews();

  let lastRoute = getHomeRoute();
  const [openTab, setOpenTab] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    title: "",
    message: "",
    data: {},
  });

  useEffect(() => {
    ControlMenu();
    window.addEventListener("resize", (e) => {
      if (window.innerWidth <= 1200) {
        changeMenu("vertical");
      }
    });
    initFirebaseMessaging();
  }, []);

  function viewNotificationType(notification_data) {
    try {
      const { type, dist_notification } = notification_data;
      if (dist_notification) {
        const notifications = JSON.parse(dist_notification);
        props.updateDistNotificationList(notifications);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function initFirebaseMessaging() {
    try {
      if ("serviceWorker" in navigator) {
        const swRegistration = await navigator?.serviceWorker?.register(
          "/static/js/firebase-messaging-sw.js"
        );
        if (swRegistration) {
          const { status, token, messaging } = await getTokenConfig(
            swRegistration
          );
          if (status) {
            props.updateUserToken({ token });
            onMessageListener(
              setResponseMessage,
              setOpenTab,
              viewNotificationType,
              messaging
            );
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const switchRoutes = (
    <Suspense fallback={<SimpleBackdrop open={true} />}>
      <Switch>
        {routes.map((prop, key) => {
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

        {lastRoute ? (
          <Redirect from="/home" to={lastRoute} />
        ) : (
          <Redirect from="/home" to="/home/dashboard" />
        )}
      </Switch>
    </Suspense>
  );

  const snackValues = {
    responseMessage,
    openSnackBar: openTab,
    snackPosition: { vertical: "top", horizontal: "right" },
  };

  return (
    <div>
      <Navigation />
      <div id="home_wrapper" className="wrapper">
        <div id="home_container" className="container-fluid">
          <CustomProgressBar />
          {switchRoutes}
        </div>
      </div>
      <NotificationTab
        values={snackValues}
        closeSnackBar={() => setOpenTab(!openTab)}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, {
  updateUserToken,
  updateDistNotificationList,
})(Home);
