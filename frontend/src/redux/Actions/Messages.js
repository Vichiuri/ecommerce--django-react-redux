import { GET_MESSAGES, GET_ERRORS } from "./types";

//Create Messages
export const createSuccessMessage = (responseMessage, status) => (dispatch) => {
  dispatch({
    type: GET_MESSAGES,
    payload: {
      responseMessage: responseMessage,
      isError: false,
      status: status,
    },
  });
};

export const createErrorMessage = (errors) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: errors,
  });
};
