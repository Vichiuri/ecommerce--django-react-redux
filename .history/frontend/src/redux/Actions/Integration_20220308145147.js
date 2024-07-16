import { API_LOADED, API_LOADING, INTEGRATION_ERROR } from "./types";
import TokenConfig from "../../utils/TokenConfig";
import Axios from "axios";
import { createErrorMessage, createSuccessMessage  } from "./Messages";


export const fetchApiIntegration = () => (dispatch, getState) =>{
    dispatch({ type: API_LOADING })
    console.log('fetchApiIntegration')
    const config = TokenConfig(getState)
    let url = 'http://127.0.0.1:8000/api/v1/token'

    Axios.get(url, config).then((res) =>{
        dispatch({ 
            type: API_LOADED,
            payload: {
                apiData: res.data
            }
        })
    }).catch((error) => {
        const errors = {
            responseMessage: error.response.data,
            status: error.status.status,
        }

        dispatch(createErrorMessage(errors))
        dispatch({ type: INTEGRATION_ERROR })
    })
}
