import { FETCH_API_INTEGRATION } from "../Actions/types";


const IntegrationReducer = (integration=[], action) => {
    switch(action.type){
        case FETCH_API_INTEGRATION:
            return action.payload
        default:
            return integration;    
    }
}

export default IntegrationReducer
