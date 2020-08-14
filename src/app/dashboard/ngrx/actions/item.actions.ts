import {Item} from '../reducers/item.reducers';
import {Action} from '@ngrx/store';

export const CREATE     = '[Items] Create'
export const UPDATE     = '[Items] Update'
export const DELETE     = '[Items] Delete'
export const DELETEALL  = '[Items] DeleteAll'

export class Create implements Action{
    readonly type = CREATE;
    constructor(public item: Item){}
}

export class Update implements Action{
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Item>
    ){}
}

export class Delete implements Action{
    readonly type = DELETE;
    constructor(public id: string){}
}

export class DeleteAll implements Action{
    readonly type = DELETEALL;
    
}

export type ItemActions = Create | Update | Delete | DeleteAll