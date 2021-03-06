import { combineReducers } from "redux";
import { findAllUsersReducer } from "./find.all.users.reducer";
import { findAllPermitsReducer } from "./find.all.permits.reducer";
import { loginReducer } from "./login.reducer";
import { User } from "../models/user";

export interface IAllUsersState{
    users: undefined
}

export interface IAllPerimitsState{
    permits: undefined
}

export interface ILoginState{
    currentUser: User
}

export interface IState{
    allPermits: IAllPerimitsState,
    allUsers: IAllUsersState,
    login: ILoginState
}

export const state = combineReducers<IState>({
    allUsers: findAllUsersReducer,
    allPermits: findAllPermitsReducer,
    login: loginReducer
})