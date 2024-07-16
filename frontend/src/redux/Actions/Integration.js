import { API_LOADED, API_LOADING } from "./types";
import TokenConfig from "../../utils/TokenConfig";
import Axios from "axios";


export const fetchApiIntegration = () => (dispatch, getState) =>{
    var _id = JSON.parse(localStorage.getItem('account')).distributor.id;
    let distributorId = _id
    // console.log(distributorId)
    dispatch({ type: API_LOADING })
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
        console.log(error)
    })
}

export const generateAuthToken = () =>(dispatch, getState) =>{
    // dispatch({ type: API_LOADING })
    var _id = JSON.parse(localStorage.getItem('account')).distributor.id;
    let distributorId = _id
    const config = TokenConfig(getState)
    let url = `../api/v1/${distributorId}`

    Axios.get(url,config).then((res) => {
        dispatch(fetchApiIntegration())
    }).catch((error) => {
        console.log(error)
    })
}
