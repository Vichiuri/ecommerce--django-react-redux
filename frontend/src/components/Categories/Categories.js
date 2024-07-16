import React, { Component } from "react";
import ViewCategories from "./ViewCategories";
import "./Categories.css";
import AddCategory from "./AddCategory";
import { connect } from "react-redux";
import {
  fetchCategories,
  addCategory,
  deleteCategory,
  updateCategories,
} from "../../redux/Actions/Products";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import EditCategory from "./EditCategory";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentPage: 1,
      viewCategory: null,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.changePage = this.changePage.bind(this);
    this.editCategory = this.editCategory.bind(this);
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  editCategory(category) {
    this.setState({ currentPage: 3, viewCategory: category });
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
    this.props.fetchCategories(1);
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
      productsReducer,
      addCategory,
      updateCategories,
      deleteCategory,
      auth,
      fetchCategories,
    } = this.props;
    const { isLoading, categories, category_current_page, category_last_page } =
      productsReducer;
    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentPage,
      viewCategory,
    } = this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };

    if (!auth.group.permission.can_view_products) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    let pageDetails = {
      current_page: category_current_page,
      last_page: category_last_page,
    };

    switch (currentPage) {
      case 1:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <ViewCategories
              changePage={this.changePage}
              categories={categories}
              editCategory={this.editCategory}
              deleteCategory={deleteCategory}
              canManage={auth.group.permission.can_manage_product}
              fetchCategories={fetchCategories}
              pageDetails={pageDetails}
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
            <AddCategory
              changePage={this.changePage}
              categories={categories}
              addCategory={addCategory}
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
            <EditCategory
              changePage={this.changePage}
              categories={categories}
              updateCategory={updateCategories}
              category={viewCategory}
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
            <ViewCategories
              changePage={this.changePage}
              categories={categories}
            />
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
  productsReducer: state.productsReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
});

/** View to add and edit distributor technologies */
export default connect(mapStateToProps, {
  fetchCategories,
  addCategory,
  updateCategories,
  deleteCategory,
})(Categories);
