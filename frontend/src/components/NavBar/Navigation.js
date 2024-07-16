import React, { Component } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { logOutUser } from "../../redux/Actions/Auth";
import { fetchDistNotifications } from "../../redux/Actions/Notification";
import { connect } from "react-redux";
import "./Navigation.css";
import HorizontalNavBar from "./HorizontalNavBar";

class Navigation extends Component {
  componentDidMount() {
    this.props.fetchDistNotifications(1);
  }

  render() {
    const { logOutUser, auth, notificationsReducer } = this.props;
    const { dist_notifications } = notificationsReducer;

    return (
      <div>
        <NavBar
          logOutUser={logOutUser}
          user={auth.user}
          account={auth.account}
          logo={auth.logo}
          notifications={dist_notifications}
        />

        <HorizontalNavBar group={auth.group} account={auth.account} />
        <SideBar group={auth.group} account={auth.account} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.authReducer,
  notificationsReducer: state.notificationsReducer,
});

/** Navigation view class for distrbutor */
export default connect(mapStateToProps, { logOutUser, fetchDistNotifications })(
  Navigation
);
