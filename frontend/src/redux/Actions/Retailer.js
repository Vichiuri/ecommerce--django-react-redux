import Axios from "axios";
import TokenConfig from "../../utils/TokenConfig";
import TokenMultiPartConfig from "../../utils/TokenMultiPartConfig";
import { createErrorMessage, createSuccessMessage } from "./Messages";
import {
  DASHBOARD_PROGRESS,
  RETAILER_ADD,
  RETAILER_AREA_ADD,
  RETAILER_AREA_DELETE,
  RETAILER_AREA_EDIT,
  RETAILER_AREA_LOADED,
  RETAILER_CITIES,
  RETAILER_CITY_ADD,
  RETAILER_CITY_DELETE,
  RETAILER_CITY_EDIT,
  RETAILER_DELETE,
  RETAILER_EDIT,
  RETAILER_ERROR,
  RETAILER_LOADED,
  RETAILER_LOADING,
  RETAILER_LOCATION_ADD,
  RETAILER_LOCATION_DELETE,
  RETAILER_LOCATION_EDIT,
  RETAILER_LOCATION_LOADED,
} from "./types";

export const fetchRetailers = (page, query, rows) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);

  let url = `../retailer/api/retailers?page=${page}`;

  if (query) {
    url = url + `&query=${query}`;
  }
  if (rows) {
    url = url + `&rows=${rows}`;
  }

  Axios.get(url, config)
    .then((res) => {
      dispatch({
        type: RETAILER_LOADED,
        payload: {
          retailers: res.data.retailers,
          region_current_page: page,
          region_last_page: res.data.last_page,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};

export function fetchSelectRetailer(search, loadOptions, { page }) {
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
    ? `../retailer/api/search_retailer/?page=${page}&query=${search}`
    : `../retailer/api/search_retailer/?page=${page}`;

  return new Promise((resolve, reject) => {
    Axios.get(url, config)
      .then((res) => {
        let viewLastPage = false;
        if (res.data.last_page > page) {
          viewLastPage = true;
        }
        let view_retailers = res.data.retailers.map((item) => {
          return {
            value: item,
            label: item.contact_name,
          };
        });

        resolve({
          options: view_retailers,
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

export const addRetailer = (body) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.post("../retailer/api/retailers/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: RETAILER_ADD,
        payload: res.data,
      });
      // dispatch({
      //   type: DASHBOARD_PROGRESS,
      //   payload: res.data.view_complete,
      // });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};

export const updateRetailer = (body) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenMultiPartConfig(getState);

  Axios.put("../retailer/api/retailers/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: RETAILER_EDIT,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};

export const deleteRetailer = (id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/retailers?retailer_id=${id}`, config).then(
    (res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: RETAILER_DELETE,
        payload: id,
      });
    }
  );
};

export const fetchRetailRegions = (page) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);

  Axios.get(`../retailer/api/distributionRegion?page=${page}`, config)
    .then((res) => {
      dispatch({
        type: RETAILER_LOCATION_LOADED,
        payload: {
          retailer_regions: res.data.retailer_regions,
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
      dispatch({ type: RETAILER_ERROR });
    });
};

export function fetchSelectRetailRegions(search, loadOptions, { page }) {
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
    ? `../retailer/api/distributionRegion/?page=${page}&query=${search}`
    : `../retailer/api/distributionRegion/?page=${page}`;

  return new Promise((resolve, reject) => {
    Axios.get(url, config)
      .then((res) => {
        let viewLastPage = false;
        if (res.data.last_page > page) {
          viewLastPage = true;
        }
        let view_regions = res.data.retailer_regions.map((item) => {
          return {
            value: item,
            label: item.name,
          };
        });

        resolve({
          options: view_regions,
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

export const addRetailRegions = (body) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/distributionRegion/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data));
      dispatch({
        type: RETAILER_LOCATION_ADD,
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
      dispatch({ type: RETAILER_ERROR });
    });
};

export const updateRetailerRegions = (body) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);

  Axios.put("../retailer/api/distributionRegion/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: RETAILER_LOCATION_EDIT,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};

export const deleteRetailerRegions = (id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/distributionRegion/?region_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: RETAILER_LOCATION_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};

export const fetchRetailAreas = (page, city) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);
  const url = city
    ? `../retailer/api/distribution_area?page=${page}&city=${city}`
    : `../retailer/api/distribution_area?page=${page}`;
  Axios.get(url, config)
    .then((res) => {
      dispatch({
        type: RETAILER_AREA_LOADED,
        payload: {
          areas: res.data.areas,
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
      dispatch({ type: RETAILER_ERROR });
    });
};

export function fetchSelectArea(search, loadOptions, { page, city }) {
  console.log(city);
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
  let url = `../retailer/api/distribution_area/?page=${page}`;

  if (search) {
    url = url + `&query=${search}`;
  }

  if (city) {
    url = url + `&city=${city}`;
  }

  return new Promise((resolve, reject) => {
    Axios.get(url, config)
      .then((res) => {
        let viewLastPage = false;
        if (res.data.last_page > page) {
          viewLastPage = true;
        }
        let view_areas = res.data.areas.map((item) => {
          return {
            value: item,
            label: item.name,
          };
        });

        resolve({
          options: view_areas,
          hasMore: viewLastPage,
          additional: {
            page: page + 1,
            city: city,
          },
        });
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}

export const addRetailAreas = (body) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/distribution_area/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: RETAILER_AREA_ADD,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};

export const updateRetailerAreas = (body) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);
  Axios.put("../retailer/api/distribution_area/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: RETAILER_AREA_EDIT,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};

export const deleteRetailerArea = (id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/distribution_area/?area_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: RETAILER_AREA_DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};

export const fetchRetailerCities = (region) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);
  const url = region
    ? `../retailer/api/distribution_city_api?region=${region}`
    : `../retailer/api/distribution_city_api`;
  Axios.get(url, config)
    .then((res) => {
      dispatch({
        type: RETAILER_CITIES,
        payload: res.data.cities,
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};

export function fetchSelectCity(search, loadOptions, { page, region }) {
  console.log(region);
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
  let url = `../retailer/api/distribution_city_api/?page=${page}`;

  if (search) {
    url = url + `&query=${search}`;
  }

  if (region) {
    url = url + `region=${region}`;
  }

  return new Promise((resolve, reject) => {
    Axios.get(url, config)
      .then((res) => {
        let viewLastPage = false;
        if (res.data.last_page > page) {
          viewLastPage = true;
        }
        let view_cities = res.data.cities.map((item) => {
          return {
            value: item,
            label: item.name,
          };
        });

        resolve({
          options: view_cities,
          hasMore: viewLastPage,
          additional: {
            page: page + 1,
            region: region,
          },
        });
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}

export const addRetailerCity = (body, region_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);

  Axios.post("../retailer/api/distribution_city_api/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: RETAILER_CITY_ADD,
        payload: {
          dist_city: res.data.dist_city,
          region_id: region_id,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};

export const updateRetailerCity = (body, region_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);

  Axios.put("../retailer/api/distribution_city_api/", body, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: RETAILER_CITY_EDIT,
        payload: {
          dist_city: res.data.dist_city,
          region_id: region_id,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};

export const deleteRetailerCity = (id, region_id) => (dispatch, getState) => {
  dispatch({ type: RETAILER_LOADING });
  const config = TokenConfig(getState);

  Axios.delete(`../retailer/api/distribution_city_api/?city_id=${id}`, config)
    .then((res) => {
      dispatch(createSuccessMessage(res.data, res.status));
      dispatch({
        type: RETAILER_CITY_DELETE,
        payload: {
          id: id,
          region_id: region_id,
        },
      });
    })
    .catch((error) => {
      const errors = {
        responseMessage: error.response.data,
        status: error.response.status,
      };

      dispatch(createErrorMessage(errors));
      dispatch({ type: RETAILER_ERROR });
    });
};
