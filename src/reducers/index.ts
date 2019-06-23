import { combineReducers } from "redux";
import { findAllUsersReducer } from "./find.all.users.reducer";
import { findAllPermitsReducer } from "./find.all.permits.reducer";

export interface IAllUsersState{
    users: undefined
}

export interface IState{
    allUsers: IAllUsersState
}

export interface IAllPerimitsState{
    permits: undefined
}

export interface IState{
    allPermits: IAllPerimitsState
}

export const state = combineReducers<IState>({
    allUsers: findAllUsersReducer,
    allPermits: findAllPermitsReducer
})