import React, { Component } from "react";
import AddProduct from "./AddProduct";
import ViewProducts from "./ViewProducts";
import "./Product.css";
import { connect } from "react-redux";
import {
  fetchProducts,
  fetchCategories,
  fetchProductUnits,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  fetchPaginatedProducts,
  updateProductState,
} from "../../redux/Actions/Products";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import EditProduct from "./EditProduct";
import PermissionHandler from "../../utils/PermissionHandler";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentPage: 1,
      productItem: null,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.changePage = this.changePage.bind(this);
    this.editProduct = this.editProduct.bind(this);
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
    this.props.fetchProducts(1);
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  editProduct(product) {
    this.props.fetchCategories();
    this.props.fetchProductUnits();
    this.setState({ currentPage: 3, productItem: product });
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
      updateProduct,
      addProduct,
      deleteProduct,
      auth,
      searchProducts,
      fetchPaginatedProducts,
      fetchProducts,
      updateProductState,
    } = this.props;
    const {
      products,
      isLoading,
      categories,
      units,
      products_current_page,
      products_last_page,
    } = productsReducer;
    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentPage,
      productItem,
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
      current_page: products_current_page,
      last_page: products_last_page,
    };

    switch (currentPage) {
      case 1:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <ViewProducts
              changePage={this.changePage}
              products={products}
              deleteProduct={deleteProduct}
              editProduct={this.editProduct}
              canManage={auth.group.permission.can_manage_product}
              searchProducts={searchProducts}
              fetchPaginatedProducts={fetchPaginatedProducts}
              pageDetails={pageDetails}
              fetchProducts={fetchProducts}
              updateProductState={updateProductState}
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
            <AddProduct
              changePage={this.changePage}
              setResponse={this.setResponse}
              addProduct={addProduct}
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
            <EditProduct
              changePage={this.changePage}
              units={units}
              categories={categories}
              setResponse={this.setResponse}
              updateProduct={updateProduct}
              product={productItem}
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
            <ViewProducts
              changePage={this.changePage}
              products={products}
              searchProduct={searchProduct}
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

/** View add edit product view screen */
export default connect(mapStateToProps, {
  fetchProducts,
  fetchCategories,
  fetchProductUnits,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  fetchPaginatedProducts,
  updateProductState,
})(Products);
