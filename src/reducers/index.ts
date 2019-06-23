import { combineReducers } from "redux";
import { findAllUsersReducer } from "./find.all.users.reducer";


export interface IAllUsersState{
    users: undefined
}

export interface IState{
    allUsers: IAllUsersState
}

export const state = combineReducers<IState>({
    allUsers: findAllUsersReducer
})