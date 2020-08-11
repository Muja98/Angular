import {Action} from '@ngrx/store';
import {User} from '../model/user.model';

export enum UserActionTypes{
    GET_USER           = 'User get',
    GET_USER_SUCCESS   = 'User get success'
}   


export class GetUser implements Action{
    readonly type = UserActionTypes.GET_USER;
    constructor(public payload: string){}
}

export class GetUserSuccess implements Action{
    readonly type = UserActionTypes.GET_USER_SUCCESS;
    constructor(public payload: User){}
}


export type UserActions = GetUser | GetUserSuccess