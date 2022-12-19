import {createStore, combineReducers} from 'redux';
import pathReducer from './reducers';

const rootReducer = combineReducers(
    {filePath: pathReducer}
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;