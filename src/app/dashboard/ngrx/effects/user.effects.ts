import { AuthenticationService } from './../../../service/authentication.service';
import {UserActionTypes} from '../actions/user.actions';
import { Injectable } from '@angular/core';
import {Effect,Actions, ofType} from '@ngrx/effects'
import {GetUser, GetUserSuccess} from '../actions/user.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable()
export class UserEffects{
    constructor(private actions: Actions, private service:AuthenticationService){}

    @Effect() 
    getUser  = this.actions.pipe(
        ofType<GetUser>(UserActionTypes.GET_USER),
        mergeMap(
            (action)=>this.service.getUserById(action.payload)
            .pipe(
                map((data:any)=>{
                    return new GetUserSuccess(data)
                    console.log(data)
                })
            )
          
        )
    )



    

}