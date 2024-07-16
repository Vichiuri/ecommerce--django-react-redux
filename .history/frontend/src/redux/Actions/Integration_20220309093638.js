import { API_LOADED, API_LOADING, TOKEN_GENERATED, INTEGRATION_ERROR } from "./types";
import TokenConfig from "../../utils/TokenConfig";
import Axios from "axios";
import { createErrorMessage, createSuccessMessage  } from "./Messages";


export const fetchApiIntegration = (token=false) => (dispatch, getState) =>{
    let distributorId = JSON.parse(localStorage.getItem('account')).id;
    console.log(distributorId)
    dispatch({ type: API_LOADING })
    console.log('fetchApiIntegration')
    const config = TokenConfig(getState)
    let url = `../api/v1/${distributorId}/token`

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

export const generateAuthToken = () =>(dispatch, getState) =>{
    let distributorId = JSON.parse(localStorage.getItem('account')).id
    console.log("HERE")
    // dispatch({ type: GENERATE_TOKEN })
    const config = TokenConfig(getState)
    let url = `../api/v1/${distributorId}`

    Axios.get(url,config).then((res) => {
        dispatch({
            type: TOKEN_GENERATED,
            payload: {
                token: res.data
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
