import { FETCH_API_INTEGRATION } from "../Actions/types";

const initialState = {
    token: '',
    apiKey: '',
    id: ''
}

const IntegrationReducer = (apiData=initialState, action) => {
    switch(action.type){
        case FETCH_API_INTEGRATION:
            return{
                ...apiData,
                token: action.payload.token,
                apiKey: action.payload.apiKey,
                id: action.payload.id
            }
        default:
            return apiData;    
    }
}

export default IntegrationReducer
