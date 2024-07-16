import React, { Component } from "react";
import AddOffers from "./AddOffers";
import ViewOffers from "./ViewOffers";
import "./Offers.css";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import { connect } from "react-redux";
import {
  fetchPriceOffers,
  addPriceOffer,
  updateOffers,
  deleteOffer,
} from "../../redux/Actions/Offers";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import EditOffer from "./EditOffer";
import PermissionHandler from "../../utils/PermissionHandler";

class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentPage: 1,
      viewOffer: null,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.changePage = this.changePage.bind(this);
    this.editOffer = this.editOffer.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) this.setResponse(error);
    else if (message !== prevProps.message) {
      if (message.status == 201) {
        this.setState({ currentPage: 1 });
      }
      this.setResponse(message);
    }
  }

  componentDidMount() {
    this.props.fetchPriceOffers(1);
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  editOffer(offer) {
    this.setState({ currentPage: 3, viewOffer: offer });
  }

  setResponse(response) {
    let value = Object.keys(response.responseMessage)[0];
    const responseMessage = response.responseMessage[value];
    if (responseMessage instanceof Array)
      this.setState({
        responseMessage: responseMessage[0],
        isError: response.isError,
        openSnackBar: true,
      });
    else
      this.setState({
        responseMessage: responseMessage,
        isError: response.isError,
        openSnackBar: true,
      });
  }

  closeSnackBar() {
    this.setState({ openSnackBar: false });
  }
  render() {
    const {
      offersReducer,
      addPriceOffer,
      deleteOffer,
      updateOffers,
      auth,
      fetchPriceOffers,
    } = this.props;
    const { offers, isLoading, offers_current_page, offers_last_page } =
      offersReducer;
    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentPage,
      viewOffer,
    } = this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };

    let pageDetails = {
      current_page: offers_current_page,
      last_page: offers_last_page,
    };

    if (!auth.group.permission.can_view_offers) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    switch (currentPage) {
      case 1:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <ViewOffers
              changePage={this.changePage}
              offers={offers}
              deleteOffer={deleteOffer}
              editOffer={this.editOffer}
              canManage={auth.group.permission.can_manage_offers}
              pageDetails={pageDetails}
              fetchPriceOffers={fetchPriceOffers}
            />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        );

      case 2:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <AddOffers
              changePage={this.changePage}
              addPriceOffer={addPriceOffer}
            />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        );

      case 3:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <EditOffer
              changePage={this.changePage}
              updateOffers={updateOffers}
              offer={viewOffer}
            />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        );

      default:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <ViewOffers changePage={this.changePage} offers={offers} />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        );
    }
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  offersReducer: state.offersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** View add and Edit offers view */
export default connect(mapStateToProps, {
  fetchPriceOffers,
  addPriceOffer,
  deleteOffer,
  updateOffers,
})(Offers);
