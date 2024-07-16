import { FETCH_API_INTEGRATION } from "./types";
import TokenConfig from "../../utils/TokenConfig";
import Axios from "axios";


export const fetchApiIntegration = () => (dispatch, getState) =>{
    const config = TokenConfig(getState)
    let url = `http://127.0.0.1:8000/api/v1/5/token`

    Axios.get(url, config).then((res) =>{
        dispatch({ 
            type: FETCH_API_INTEGRATION,
            payload: res.data
        })
    }).catch((error) => console.log(error))
}
