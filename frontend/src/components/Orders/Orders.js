import React, { Component } from "react";
import { connect } from "react-redux";
import OrderTable from "./OrderTable";
import {
  fetchOrders,
  fetchPlaceOrders,
  addOrder,
  deleteOrder,
  addRetailerOrder,
  deleteRetailOrder,
  updateRetailerOrderStatus,
  editRetailerOrder,
  updateOrder,
  searchOrders,
  fetchOrderLogs,
  updateAddRetailOrder,
  fetchRetailOrder,
  updateEditRetailOrder,
  updateDeleteRetailOrder,
  fetchRetDistOrder,
  fetchEditRetDistOrders,
  clearPlaceOrderTable,
  fetchRetDispatchOrder,
  clearRetailOrderApproved,
  cancelRetailOrder,
} from "../../redux/Actions/Orders";
import { fetchRetailers } from "../../redux/Actions/Retailer";
import {
  fetchProducts,
  fetchProductPriceLevels,
} from "../../redux/Actions/Products";
import {
  dispatchOrder,
  dispatchPartialOrder,
} from "../../redux/Actions/Delivery";
import { fetchSalesPeople } from "../../redux/Actions/Sales";
import { fetchPriceOffers } from "../../redux/Actions/Offers";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import CustomSnackBar from "../../widgets/CustomSnackBar";
import AddOrder from "./AddOrder";
import "./Orders.css";
import DispatchOrder from "./DispatchOrder";
import EditOrder from "./EditOrder";
import PermissionHandler from "../../utils/PermissionHandler";
import ViewOrderLogs from "./ViewOrderLogs";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isError: null,
      responseMessage: "",
      snackPosition: { vertical: "top", horizontal: "center" },
      currentPage: 1,
      viewKey: 1,
      viewOrder: null,
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.changePage = this.changePage.bind(this);
    this.dispatchOrder = this.dispatchOrder.bind(this);
    this.viewEditOrder = this.viewEditOrder.bind(this);
    this.viewOrderLogs = this.viewOrderLogs.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error) this.setResponse(error);
    else if (message !== prevProps.message) {
      if (message.status == 201) {
        // this.props.fetchOrders(1, "");

        this.setState({ currentPage: 1 });
      }
      this.setResponse(message);
    }
  }

  componentDidMount() {
    // this.props.fetchOrders(1, "");
    this.props.clearPlaceOrderTable();
  }

  changePage(page) {
    if (this.state.currentPage == 2 || this.state.currentPage == 4) {
      this.props.clearPlaceOrderTable();
    }
    this.setState({ currentPage: page });
  }

  viewOrderLogs(id) {
    this.props.fetchOrderLogs(id);
    this.setState({ currentPage: 5 });
  }

  viewEditOrder(order) {
    this.props.fetchEditRetDistOrders(1, order.id);
    this.setState({ viewOrder: order, currentPage: 4 });
  }

  dispatchOrder(order) {
    this.props.fetchRetDispatchOrder(order.id);
    this.setState({ currentPage: 3 });
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
      ordersReducer,
      fetchOrders,
      productsReducer,
      retailersReducer,
      fetchPlaceOrders,
      salesReducer,
      addOrder,
      deleteOrder,
      offersReducer,
      fetchPriceOffers,
      addRetailerOrder,
      deleteRetailOrder,
      updateRetailerOrderStatus,
      editRetailerOrder,
      updateOrder,
      deliveryReducer,
      dispatchOrder,
      searchOrders,
      auth,
      updateAddRetailOrder,
      updateEditRetailOrder,
      updateDeleteRetailOrder,
      dispatchPartialOrder,
      fetchRetDistOrder,
      fetchRetDispatchOrder,
      clearRetailOrderApproved,
      cancelRetailOrder,
    } = this.props;
    const {
      orders,
      isLoading,
      place_orders,
      order_logs,
      ret_order,
      orders_current_page,
      orders_last_Page,
    } = ordersReducer;
    const {
      openSnackBar,
      isError,
      responseMessage,
      snackPosition,
      currentPage,
      viewOrder,
      viewKey,
    } = this.state;
    const snackValues = {
      isError,
      responseMessage,
      openSnackBar,
      snackPosition,
    };
    if (!auth.group.permission.can_view_orders) {
      return PermissionHandler(this.props.auth.group.permission);
    }

    const orders_page_details = {
      current_page: orders_current_page,
      last_page: orders_last_Page,
    };

    switch (currentPage) {
      case 1:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <OrderTable
              changePage={this.changePage}
              orders={orders}
              fetchOrders={fetchOrders}
              deleteRetailOrder={deleteRetailOrder}
              deleteOrder={deleteOrder}
              updateRetailerOrderStatus={updateRetailerOrderStatus}
              dispatchOrder={this.dispatchOrder}
              searchOrders={searchOrders}
              viewEditOrder={this.viewEditOrder}
              canManage={auth.group.permission.can_manage_orders}
              viewOrderLogs={this.viewOrderLogs}
              fetchRetDistOrder={fetchRetDistOrder}
              ret_order={ret_order}
              fetchRetDispatchOrder={fetchRetDispatchOrder}
              viewKey={viewKey}
              pageDetails={orders_page_details}
              clearRetailOrderApproved={clearRetailOrderApproved}
              cancelRetailOrder={cancelRetailOrder}
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
            <AddOrder
              fetchPlaceOrders={fetchPlaceOrders}
              place_orders={place_orders}
              addOrder={addOrder}
              changePage={this.changePage}
              deleteOrder={deleteOrder}
              offers={offersReducer.offers}
              fetchPriceOffers={fetchPriceOffers}
              addRetailerOrder={addRetailerOrder}
              updateOrder={updateOrder}
              setResponse={this.setResponse}
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
            <SimpleBackdrop
              open={
                isLoading ||
                offersReducer.isLoading ||
                deliveryReducer.isLoading ||
                isLoading
              }
            />
            <DispatchOrder
              changePage={this.changePage}
              dispatchOrder={this.dispatchOrder}
              order={ret_order}
              dispatchOrder={dispatchOrder}
              dispatchPartialOrder={dispatchPartialOrder}
            />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        );

      case 4:
        return (
          <div>
            <SimpleBackdrop
              open={
                isLoading ||
                retailersReducer.isLoading ||
                productsReducer.isLoading ||
                salesReducer.isLoading ||
                offersReducer.isLoading
              }
            />
            <EditOrder
              products={productsReducer.products}
              retailers={retailersReducer.retailers}
              fetchPlaceOrders={fetchPlaceOrders}
              place_orders={place_orders}
              sales_people={salesReducer.sales_people}
              levels={productsReducer.price_levels}
              editRetailerOrder={editRetailerOrder}
              changePage={this.changePage}
              deleteOrder={deleteOrder}
              offers={offersReducer.offers}
              fetchPriceOffers={fetchPriceOffers}
              addRetailerOrder={addRetailerOrder}
              updateOrder={updateOrder}
              retail_order={viewOrder}
              updateAddRetailOrder={updateAddRetailOrder}
              updateEditRetailOrder={updateEditRetailOrder}
              updateDeleteRetailOrder={updateDeleteRetailOrder}
              setResponse={this.setResponse}
            />
            <CustomSnackBar
              values={snackValues}
              closeSnackBar={this.closeSnackBar}
            />
          </div>
        );

      case 5:
        return (
          <div>
            <SimpleBackdrop open={isLoading} />
            <ViewOrderLogs
              order_logs={order_logs}
              changePage={this.changePage}
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
            <OrderTable
              changePage={this.changePage}
              orders={orders}
              fetchOrders={fetchOrders}
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
  ordersReducer: state.ordersReducer,
  productsReducer: state.productsReducer,
  salesReducer: state.salesReducer,
  retailersReducer: state.retailersReducer,
  offersReducer: state.offersReducer,
  error: state.errorsReducer,
  message: state.messagesReducer,
  deliveryReducer: state.deliveryReducer,
});

/** Add and approve retail orders view */
export default connect(mapStateToProps, {
  fetchOrders,
  fetchProducts,
  fetchRetailers,
  fetchPlaceOrders,
  fetchSalesPeople,
  fetchProductPriceLevels,
  addOrder,
  deleteOrder,
  fetchPriceOffers,
  addRetailerOrder,
  deleteRetailOrder,
  updateRetailerOrderStatus,
  editRetailerOrder,
  updateOrder,
  dispatchOrder,
  searchOrders,
  fetchOrderLogs,
  updateAddRetailOrder,
  updateEditRetailOrder,
  updateDeleteRetailOrder,
  fetchRetailOrder,
  dispatchPartialOrder,
  fetchRetDistOrder,
  fetchEditRetDistOrders,
  clearPlaceOrderTable,
  fetchRetDispatchOrder,
  clearRetailOrderApproved,
  cancelRetailOrder,
})(Orders);
