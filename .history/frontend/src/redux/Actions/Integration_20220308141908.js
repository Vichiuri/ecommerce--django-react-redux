import { API_LOADED, API_LOADING, INTEGRATION_ERROR } from "./types";
import TokenConfig from "../../utils/TokenConfig";
import Axios from "axios";
import { createErrorMessage, createSuccessMessage  } from "./Messages";


export const fetchApiIntegration = () => (dispatch, getState) =>{
    dispatch({ type: API_LOADING })
    console.log('fetchApiIntegration')
    const config = TokenConfig(getState)
    let url = 'https://www.google.com/search?q=snack+bar+menu&sxsrf=APq-WBu0UPISKJ6oCCAfHxSAYN8lRYPkxA%3A1646737181564&ei=HTcnYprXIYeSxc8P5Iuy0A4&oq=snack+bar&gs_lcp=Cgdnd3Mtd2l6EAEYATIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQsAMQQzIHCAAQsAMQQzIHCAAQsAMQQzIHCAAQsAMQQzIKCAAQ5AIQsAMYADIKCAAQ5AIQsAMYADIKCAAQ5AIQsAMYADIPCC4Q1AIQyAMQsAMQQxgBMhIILhDHARCvARDIAxCwAxBDGAFKBAhBGABKBAhGGAFQAFgAYL8NaAFwAXgAgAEAiAEAkgEAmAEAyAERwAEB2gEGCAAQARgJ2gEGCAEQARgI&sclient=gws-wiz'

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
