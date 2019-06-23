import { combineReducers } from "redux";
import { findAllUsersReducer } from "./find.all.users.reducer";
import { findAllPermitsReducer } from "./find.all.permits.reducer";
import { loginReducer } from "./login.reducer";

export interface IAllUsersState{
    users: undefined
}

export interface IAllPerimitsState{
    permits: undefined
}

export interface ILoginState{
    currentUser: undefined
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