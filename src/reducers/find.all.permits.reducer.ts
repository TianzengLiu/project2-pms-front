import { IAllPerimitsState } from ".";
import { fetchPermitsTypes } from "../actions/find.all.permits.action";


const initialState: IAllPerimitsState ={
    permits: undefined
}

export const findAllPermitsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case fetchPermitsTypes.SUCCESSFUL_PERMITS_FETCH:
            return{
                ...state,
                permits: action.payload.permits
            }
        case fetchPermitsTypes.UNSUCCESSFUL_PERMITS_FETCH:
            return{
                ...state
            }
    
        default:
    } return state
}