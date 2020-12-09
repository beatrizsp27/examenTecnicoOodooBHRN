import { createStore, combineReducers } from 'redux';
import reducerTarjeta from '../Reducers/ReducerAccionesTarjeta';

const rootReducer = combineReducers({
    reducerTarjeta: reducerTarjeta
})

const configureStore = () => createStore(rootReducer);

export default configureStore;