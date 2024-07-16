import { FETCH_API_INTEGRATION, INTEGRATION_ERROR } from "./types";
import TokenConfig from "../../utils/TokenConfig";
import Axios from "axios";
import { createErrorMessage } from "./Messages";


export const fetchApiIntegration = () => (dispatch, getState) =>{
    console.log('fetchApiIntegration')
    const config = TokenConfig(getState)
    let url = 'http://127.0.0.1:8000/api/v1/2/token'

    Axios.get(url, config).then((res) =>{
        dispatch({ 
            type: FETCH_API_INTEGRATION,
            payload: res.data
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
