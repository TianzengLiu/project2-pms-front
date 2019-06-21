import { combineReducers } from "redux";
import { findAllPermitsReducer } from "./find.all.permits.reducer";


export interface IAllPerimitsState{
    permits: undefined
}

export interface IState{
    allPermits: IAllPerimitsState
}

export const state = combineReducers<IState>({
    allPermits: findAllPermitsReducer
})