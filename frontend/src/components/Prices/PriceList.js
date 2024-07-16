import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchPriceLists,
  fetchAddPriceList,
  addPriceList,
  fetchCategories,
  fetchProducts,
  fetchProductPriceLevels,
  updatePriceList,
  deletePriceList,
} from "../../redux/Actions/Products";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import AddPriceList from "./AddPriceList";
import ViewProductPrice from "./ViewProductPrice";

class PriceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentPage: 1,
      viewPrice: null,
      price_data: null,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.changePage = this.changePage.bind(this);
    this.viewEditPriceList = this.viewEditPriceList.bind(this);
    this.goToViewProduct = this.goToViewProduct.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) this.setResponse(error);
    else if (message !== prevProps.message) this.setResponse(message);
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts(1);
    this.props.fetchProductPriceLevels();
    this.props.fetchAddPriceList(1);
  }

  changePage(page) {
    if (page == 2) {
      this.props.fetchCategories();
      this.props.fetchProductPriceLevels();
      this.props.fetchAddPriceList(1);
    }
    this.setState({ currentPage: page });
  }

  viewEditPriceList(price) {
    this.props.fetchCategories();
    this.props.fetchProducts(1);
    this.props.fetchProductPriceLevels();
    this.setState({ viewPrice: price, currentPage: 3 });
  }

  goToViewProduct(price_data) {
    this.setState({ price_data: price_data, currentPage: 2 });
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
      addPriceList,
      fetchProducts,
      fetchAddPriceList,
      updatePriceList,
      deletePriceList,
      fetchPriceLists,
      auth,
    } = this.props;
    const {
      price_lists,
      product_price_list,
      categories,
      isLoading,
      products,
      price_levels,
    } = productsReducer;
    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentPage,
      viewPrice,
      price_data,
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

    switch (currentPage) {
      case 1:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <AddPriceList
              changePage={this.changePage}
              products={products}
              categories={categories}
              price_levels={price_levels}
              addPriceList={addPriceList}
              fetchProducts={fetchProducts}
              price_list={product_price_list}
              fetchPriceLists={fetchAddPriceList}
              updatePriceList={updatePriceList}
              deletePriceList={deletePriceList}
              goToViewProduct={this.goToViewProduct}
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
            <ViewProductPrice
              changePage={this.changePage}
              products={products}
              categories={categories}
              price_levels={price_levels}
              fetchProducts={fetchProducts}
              price_list={price_lists}
              fetchPriceLists={fetchPriceLists}
              updatePriceList={updatePriceList}
              deletePriceList={deletePriceList}
              addPriceList={addPriceList}
              price_data={price_data}
            />
          </div>
        );

      default:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <AddPriceList
              changePage={this.changePage}
              products={products}
              categories={categories}
              price_levels={price_levels}
              addPriceList={addPriceList}
              fetchProducts={fetchProducts}
              price_list={product_price_list}
              fetchPriceLists={fetchAddPriceList}
              updatePriceList={updatePriceList}
              deletePriceList={deletePriceList}
              goToViewProduct={this.goToViewProduct}
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

/** Price list view for distributor */
export default connect(mapStateToProps, {
  fetchPriceLists,
  fetchAddPriceList,
  addPriceList,
  fetchProducts,
  fetchCategories,
  fetchProductPriceLevels,
  updatePriceList,
  deletePriceList,
})(PriceList);
