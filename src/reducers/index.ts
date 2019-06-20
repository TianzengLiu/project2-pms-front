import { combineReducers } from "redux";
import { loginreducer } from "./login.reducer";



export interface IState {
    login: ILogin
}


export interface ILogin{
    currentuser:null
}

export const state = combineReducers<IState>({
   login:loginreducer
})