import { ILoginState } from '.'

const initialState: ILoginState ={
    currentUser: undefined
}

export const loginReducer = (state = initialState, action) =>{
    return state
}