import { IAllUsersState } from '.'
import { fetchUsersTypes } from '../actions/find.all.users.action'

const initialState: IAllUsersState ={
    users: undefined
}

export const findAllUsersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case fetchUsersTypes.SUCCESSFUL_USERS_FETCH:
            return{
                ...state,
                users: action.payload.users
            }
        case fetchUsersTypes.UNSUCCESSFUL_USERS_FETCH:
            return{
                ...state
            }
        default:
    } return state
}