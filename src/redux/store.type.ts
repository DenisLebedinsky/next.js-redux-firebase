import { Store } from 'redux';
import { Task } from 'redux-saga';

export interface ReduxSagaStore extends Store {
    sagaTask?: Task
}

export interface AppState {
    
}