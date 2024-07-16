import { FETCH_API_INTEGRATION } from "../Actions/types";

const initialState = {
    token: '',
    apiKey: '',
    id: ''
}

const IntegrationReducer = (integration=initialState, action) => {
    switch(action.type){
        case FETCH_API_INTEGRATION:
            return{
                ...integration,
                token: action.payload.token,
                apiKey: action.payload.apiKey,
                id: action.payload.id
            }
        default:
            return integration;    
    }
}

export default IntegrationReducer
