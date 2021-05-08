import {Action, ActionReducer, ActionReducerMap, createReducer, MetaReducer} from '@ngrx/store';
import {codeInitialState, CodeState} from "../code/state/code.reducer";

export interface AppState {
    code: CodeState
}

export const rootInitialState: AppState = {
    code: codeInitialState
};

export const rootReducers: ActionReducerMap<any, Action> = {
    rootReducer: createReducer(rootInitialState)
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const rootMetaReducers: MetaReducer<any, Action>[] = [debug];
