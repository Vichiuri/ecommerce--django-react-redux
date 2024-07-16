import { API_LOADED, API_LOADING, TOKEN_GENERATED, INTEGRATION_ERROR } from "./types";
import TokenConfig from "../../utils/TokenConfig";
import Axios from "axios";
import { createErrorMessage, createSuccessMessage  } from "./Messages";


export const fetchApiIntegration = () => (dispatch, getState) =>{
    var _id = JSON.parse(localStorage.getItem('account')).distributor.id;
    let distributorId = _id
    console.log(distributorId)
    // dispatch({ type: API_LOADING })
    console.log('fetchApiIntegration')
    const config = TokenConfig(getState)
    let url = `../api/v1/${distributorId}/token`

    console.log('url', url)

    Axios.get(url, config).then((res) =>{
        dispatch({ 
            type: API_LOADED,
            payload: {
                apiData: res.data
            }
        })
    }).catch((error) => {
        console.log(error.message)
    })
}

export const generateAuthToken = () =>(dispatch, getState) =>{
    var _id = JSON.parse(localStorage.getItem('account')).distributor.id;
    let distributorId = _id
    console.log("HERE", distributorId)
    // dispatch({ type: API_LOADING })
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
        console.log(error)
    })
}
