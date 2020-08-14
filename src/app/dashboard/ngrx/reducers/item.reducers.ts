import {EntityState, createEntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store'
import * as actions from '../actions/item.actions';

export interface Item{
    id:string,
    text:string,
    checked:boolean
    habbit:boolean
}


export const itemAdapter = createEntityAdapter<Item>();
export interface State extends EntityState<Item> {}

const defaultItem = {
    ids: ['1'],
    entities:{
        '1':{
            id:'1',
            text:'Get up in 5AM',
            checked:false,
            habbit:false
        }
    }
}

export const initialState: State = itemAdapter.getInitialState(defaultItem);

export function itemReducer( state: State = initialState,action: actions.ItemActions)
{
    switch(action.type)
    {
        case actions.CREATE:
            return itemAdapter.addOne(action.item, state)
        case actions.UPDATE:
            return itemAdapter.updateOne({
                id:action.id,
                changes:action.changes
            },state);
        case actions.DELETE:
            return itemAdapter.removeOne(action.id, state);
        case actions.DELETEALL:
            return itemAdapter.removeAll(state);
        default: 
            return state;
    }
  
}

export const getItemState = createFeatureSelector<State>('item');

export const{
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = itemAdapter.getSelectors(getItemState)

