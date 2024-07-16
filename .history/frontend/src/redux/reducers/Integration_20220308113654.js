import { FETCH_API_INTEGRATION } from "../Actions/types";


const initialState = {
    apiData: [],
};

/**
 * @param {{ type: any; payload: { apiData: any; }; }} action
 */
export default function (state=initialState, action){
    switch(action.type){
        case FETCH_API_INTEGRATION:
            return {
                ...state,
                apiData: action.payload.apiData,
            }
        default:
            return state;    
    }
}
