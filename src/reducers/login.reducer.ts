import { ILogin } from ".";
import { logintypes } from "../actions/login.action";



const initialState: ILogin = {
    currentuser: null
}

export const loginreducer = (state = initialState, action:any)=>{
    switch (action.type) {
        case logintypes.INVALID_CREDENTIALS:
            return {
                ...state
            }
        
            case logintypes.SUCCESSFUL_LOGIN:
                    return {
                        ...state,
                        currentuser: action.payload.user
                    }
    
        default:
    }
    return state
}