import { FETCH_API_INTEGRATION, INTEGRATION_ERROR } from "./types";
import TokenConfig from "../../utils/TokenConfig";
import Axios from "axios";
import { createErrorMessage } from "./Messages";


export const fetchApiIntegration = () => (dispatch, getState) =>{
    console.log('fetchApiIntegration')
    const config = TokenConfig(getState)
    let url = `../api/v1/5/token`

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
