import {UserActionTypes, UserActions }  from '../actions/user.actions';
import {User} from '../model/user.model';



export function userReducer(state: User, action: UserActions)
{
    switch(action.type){
        case UserActionTypes.GET_USER:
            return{...state, loading:true};
        
        case UserActionTypes.GET_USER_SUCCESS:
            return {...state, ...action.payload,loading:false};
        
        default:
            return state
    }
}