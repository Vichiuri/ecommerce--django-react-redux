import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import TokenMultiPartConfig from "../../utils/TokenMultiPartConfig";
import { createErrorMessage, createSuccessMessage } from "./Messages";
import {
  PRODUCT_LOADED,
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  PRODUCT_CATEGORIES,
  PRODUCT_UNITS,
  PRODUCT_ADD,
  PRODUCT_CATEGORIES_ADD,
  PRODUCT_UNITS_ADD,
  PRODUCT_COMPOUND_UNITS,
  PRODUCT_ADD_COMPOUND_UNITS,
  PRODUCT_PRICE_LEVELS,
  PRODUCT_ADD_PRICE_LEVELS,
  PRODUCT_PRICE_LIST,
  PRODUCT_ADD_PRICE_LIST,
  PRODUCT_EDIT,
  PRODUCT_DELETE,
  PRODUCT_CATEGORIES_EDIT,
  PRODUCT_CATEGORIES_DELETE,
  PRODUCT_UNITS_UPDATE,
  PRODUCT_UNITS_DELETE,
  PRODUCT_COMPOUND_UNITS_UPDATE,
  PRODUCT_COMPOUND_UNITS_DELETE,
  PRODUCT_PRICE_LEVELS_UPDATE,
  PRODUCT_PRICE_LEVELS_DELETE,
  PRODUCT_EDIT_PRICE_LIST,
  PRODUCT_DELETE_PRICE_LIST,
  PRODUCT_VIEW_PRICE_LIST,
  DASHBOARD_PROGRESS,
  PRODUCT_PAGINATION_LOADED,
  PRODUCT_BRANDS,
  PRODUCT_BRANDS_ADD,
  PRODUCT_BRANDS_UPDATE,
  PRODUCT_BRANDS_DELETE,
} from "./types";

export const fetchProducts =
  (page, category_id, query, rows) => (dispatch, getState) => {
    dispatch({ type: PRODUCT_LOADING });
    const config = TokenConfig(getState);
    let url = `../retailer/api/products/?page=${page}`;
    if (category_id) {
      url = url + `&category_id=${category_id}`;
    }

    if (query) {
      url = url + `&query=${query}`;
    }

    if (rows) {
      url = url + `&rows=${rows}`;
    }

    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: PRODUCT_LOADED,
          payload: {
            products: res.data.products,
            currentPage: page,
            lastPage: res.data.last_page,
          },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: PRODUCT_ERROR });
      });
  };

export const fetchPaginatedProducts =
  (page, category_id, query) => (dispatch, getState) => {
    const config = TokenConfig(getState);
    let url = `../retailer/api/products/?page=${page}`;
    if (category_id) {
      url = url + `&category_id=${category_id}`;
    }

    if (query) {
      url = url + `&query=${query}`;
    }

    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: PRODUCT_PAGINATION_LOADED,
          payload: {
            products: res.data.products,
            currentPage: page,
            lastPage: res.data.last_page,
          },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: PRODUCT_ERROR });
      });
  };

export function fetchSelectProduct(search, loadOptions, { page }) {
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  const url = search
    ? `../retailer/api/search_product/?page=${page}&query=${search}`
    : `../retailer/api/search_product/?page=${page}`;

  return new Promise((resolve, reject) => {
    Axios.get(url, config)
      .then((res) => {
        let viewLastPage = false;
        if (res.data.last_page > page) {
          viewLastPage = true;
        }
        let view_products = res.data.products.map((item) => {
          return {
            value: item,
            label: item.name,
          };
        });

        resolve({
          options: view_products,
          hasMore: viewLastPage,
          additional: {
            page: page + 1,
          },
        });
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}

export const searchProducts = (query) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../retailer/api/search_product/?query=${query}`, config)
    .then((res) => {
      dispatch({
        type: PRODUCT_LOADED,
        payload: {
          products: res.data.products,
          currentPage: 1,
          lastPage: res.data.last_page,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const addProduct = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenMultiPartConfig(getState);
  Axios.post("../retailer/api/products/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: PRODUCT_ADD, payload: res.data });
      dispatch({
        type: DASHBOARD_PROGRESS,
        payload: res.data.view_complete,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const updateProduct = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.put("../retailer/api/products/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_EDIT,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const updateProductState = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.patch("../retailer/api/products/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_EDIT,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const deleteProduct = (id) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/products?product_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const fetchCategories = (page, query, rows) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);
  let url = `../retailer/api/product_category/?page=${page}`;
  if (query) {
    url = url + `&query=${query}`;
  }
  if (rows) {
    url = url + `&rows=${rows}`;
  }

  Axios.get(url, config)
    .then((res) => {
      dispatch({
        type: PRODUCT_CATEGORIES,
        payload: {
          categories: res.data.categories,
          currentPage: page,
          lastPage: res.data.last_page,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export function fetchSelectCategory(search, loadOptions, { page }) {
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  const url = search
    ? `../retailer/api/product_category/?page=${page}&query=${search}`
    : `../retailer/api/product_category/?page=${page}`;

  return new Promise((resolve, reject) => {
    Axios.get(url, config)
      .then((res) => {
        let viewLastPage = false;
        if (res.data.last_page > page) {
          viewLastPage = true;
        }

        let view_categories = res.data.categories.map((item) => {
          return {
            value: item,
            label: item.name,
          };
        });

        resolve({
          options: view_categories,
          hasMore: viewLastPage,
          additional: {
            page: page + 1,
          },
        });
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}

export const addCategory = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenMultiPartConfig(getState);
  Axios.post("../retailer/api/product_category/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_CATEGORIES_ADD,
        payload: res.data,
      });
      dispatch({
        type: DASHBOARD_PROGRESS,
        payload: res.data.view_complete,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const updateCategories = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenMultiPartConfig(getState);
  Axios.put("../retailer/api/product_category/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_CATEGORIES_EDIT,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const deleteCategory = (id) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);
  Axios.delete(`../retailer/api/product_category?category_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_CATEGORIES_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const fetchProductUnits =
  (page, rows, query) => (dispatch, getState) => {
    dispatch({ type: PRODUCT_LOADING });
    const config = TokenConfig(getState);
    let url = `../retailer/api/mUnit/?page=${page}`;
    if (rows) {
      url = url + `&rows=${rows}`;
    }
    if (query) {
      url = url + `&query=${query}`;
    }
    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: PRODUCT_UNITS,
          payload: {
            units: res.data.units,
            currentPage: page,
            lastPage: res.data.last_page,
          },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: PRODUCT_ERROR });
      });
  };

export const fetchSelectProductUnits = (search, loadOptions, { page }) => {
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  const url = search
    ? `../retailer/api/mUnit/?page=${page}&query=${search}`
    : `../retailer/api/mUnit/?page=${page}`;

  return new Promise((resolve, reject) => {
    Axios.get(url, config)
      .then((res) => {
        let viewLastPage = false;
        if (res.data.last_page > page) {
          viewLastPage = true;
        }

        let view_units = res.data.units.map((item) => {
          return {
            value: item,
            label: item.name,
          };
        });

        resolve({
          options: view_units,
          hasMore: viewLastPage,
          additional: {
            page: page + 1,
          },
        });
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export const addProductUnits = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);
  Axios.post("../retailer/api/mUnit/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: PRODUCT_UNITS_ADD, payload: res.data });
      dispatch({
        type: DASHBOARD_PROGRESS,
        payload: res.data.view_complete,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const updateProductUnits = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);
  Axios.put("../retailer/api/mUnit/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_UNITS_UPDATE,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const deleteUnit = (id) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/mUnit/?unit_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_UNITS_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const fetchProductCompoundUnits =
  (page, rows, query) => (dispatch, getState) => {
    dispatch({ type: PRODUCT_LOADING });
    const config = TokenConfig(getState);

    let url = `../retailer/api/compoundUnit/?page=${page}`;
    if (rows) {
      url = url + `&rows=${rows}`;
    }
    if (query) {
      url = url + `&query=${query}`;
    }

    Axios.get(url, config)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: PRODUCT_COMPOUND_UNITS,
          payload: {
            c_units: res.data.c_units,
            currentPage: page,
            lastPage: res.data.last_page,
          },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: PRODUCT_ERROR });
      });
  };

export const addProductCompoundUnits = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/compoundUnit/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: PRODUCT_ADD_COMPOUND_UNITS, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const updateProductCompoundUnit = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.put("../retailer/api/compoundUnit/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: PRODUCT_COMPOUND_UNITS_UPDATE,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const deleteProductCompoundUnit = (id) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/compoundUnit/?c_unit_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: PRODUCT_COMPOUND_UNITS_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const fetchProductPriceLevels =
  (page, rows, query) => (dispatch, getState) => {
    dispatch({ type: PRODUCT_LOADING });
    const config = TokenConfig(getState);

    let url = `../retailer/api/priceLevel/?page=${page}`;
    if (rows) {
      url = url + `&rows=${rows}`;
    }
    if (query) {
      url = url + `&query=${query}`;
    }

    Axios.get(url, config)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: PRODUCT_PRICE_LEVELS,
          payload: {
            price_levels: res.data.price_levels,
            currentPage: page,
            lastPage: res.data.last_page,
          },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: PRODUCT_ERROR });
      });
  };

export function fetchSelectPriceLevel(search, loadOptions, { page }) {
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  const url = search
    ? `../retailer/api/priceLevel?page=${page}&query=${search}`
    : `../retailer/api/priceLevel?page=${page}`;

  return new Promise((resolve, reject) => {
    Axios.get(url, config)
      .then((res) => {
        let viewLastPage = false;
        if (res.data.last_page > page) {
          viewLastPage = true;
        }
        let view_levels = res.data.price_levels.map((item) => {
          return {
            value: item,
            label: item.level_name,
          };
        });

        resolve({
          options: view_levels,
          hasMore: viewLastPage,
          additional: {
            page: page + 1,
          },
        });
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}

export const addProductLevels = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/priceLevel/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_ADD_PRICE_LEVELS,
        payload: res.data,
      });
      dispatch({
        type: DASHBOARD_PROGRESS,
        payload: res.data.view_complete,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const updatePriceLevel = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.put("../retailer/api/priceLevel/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_PRICE_LEVELS_UPDATE,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const deletePriceLevel = (id) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/priceLevel/?level_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: PRODUCT_PRICE_LEVELS_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const fetchPriceLists =
  (page, product_id, applicable_from, price_level) => (dispatch, getState) => {
    dispatch({ type: PRODUCT_LOADING });
    const config = TokenConfig(getState);

    let url = `../retailer/api/view_price_list/?page=${page}`;
    if (product_id) {
      url = url + `&product_id=${product_id}`;
    }
    if (applicable_from) {
      url = url + `&applicable_from=${applicable_from}`;
    }
    if (price_level) {
      url = url + `&price_level=${price_level}`;
    }

    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: PRODUCT_VIEW_PRICE_LIST,
          payload: {
            price_lists: res.data.price_lists,
            currentPage: page,
            lastPage: res.data.last_page,
          },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: PRODUCT_ERROR });
      });
  };

export const fetchAddPriceList =
  (page, category_id, applicable_from, price_level) => (dispatch, getState) => {
    dispatch({ type: PRODUCT_LOADING });
    const config = TokenConfig(getState);
    let url = `../retailer/api/priceList/?page=${page}`;
    if (category_id) {
      url = url + `&category_id=${category_id}`;
    }
    if (applicable_from) {
      url = url + `&applicable_from=${applicable_from}`;
    }
    if (price_level) {
      url = url + `&price_level=${price_level}`;
    }
    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: PRODUCT_PRICE_LIST,
          payload: {
            price_lists: res.data.price_lists,
            currentPage: page,
            lastPage: res.data.last_page,
          },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: PRODUCT_ERROR });
      });
  };

export const addPriceList = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/priceList/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: PRODUCT_ADD_PRICE_LIST, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const updatePriceList = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.put("../retailer/api/priceList/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({ type: PRODUCT_EDIT_PRICE_LIST, payload: res.data });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const deletePriceList = (id) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/priceList/?price_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_DELETE_PRICE_LIST,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const fetchProductBrands =
  (page, rows, query) => (dispatch, getState) => {
    dispatch({ type: PRODUCT_LOADING });
    const config = TokenConfig(getState);

    let url = `../retailer/api/dist_brands/?page=${page}`;

    if (rows) {
      url = url + `&rows=${rows}`;
    }

    if (query) {
      url = url + `&query=${query}`;
    }

    Axios.get(url, config)
      .then((res) => {
        dispatch({
          type: PRODUCT_BRANDS,
          payload: {
            brands: res.data.brands,
            currentPage: page,
            lastPage: res.data.last_page,
          },
        });
      })
      .catch((error) => {
        const errors = {
          responseMessage: error.response.data,
          status: error.response.status,
        };

        dispatch(createErrorMessage(errors));
        dispatch({ type: PRODUCT_ERROR });
      });
  };

export function fetchSelectProductBrand(search, loadOptions, { page }) {
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  const url = search
    ? `../retailer/api/dist_brands/?page=${page}&query=${search}`
    : `../retailer/api/dist_brands/?page=${page}`;

  return new Promise((resolve, reject) => {
    Axios.get(url, config)
      .then((res) => {
        let viewLastPage = false;
        if (res.data.last_page > page) {
          viewLastPage = true;
        }
        let view_brands = res.data.brands.map((item) => {
          return {
            value: item,
            label: item.name,
          };
        });

        resolve({
          options: view_brands,
          hasMore: viewLastPage,
          additional: {
            page: page + 1,
          },
        });
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}

export const addProductBrand = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.post("../retailer/api/dist_brands/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_BRANDS_ADD,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const updateProductBrand = (body) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.put("../retailer/api/dist_brands/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_BRANDS_UPDATE,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const deleteProductBrand = (brand_id) => (dispatch, getState) => {
  dispatch({ type: PRODUCT_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/dist_brands/?brand_id=${brand_id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: PRODUCT_BRANDS_DELETE,
        payload: brand_id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: PRODUCT_ERROR });
    });
};
