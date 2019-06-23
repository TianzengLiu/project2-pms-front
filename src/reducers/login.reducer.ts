import { ILoginState } from '.'
import { logintypes } from '../actions/login.action';

const initialState: ILoginState ={
    currentUser: undefined
}

export const loginReducer = (state = initialState, action) =>{

    switch (action.type) {
        case logintypes.SUCCESSFUL_LOGIN:
            return {
                currentUser: action.payload.user
            }
    
        default:
            return state
    }
}