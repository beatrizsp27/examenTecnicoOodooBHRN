import { createStore, combineReducers } from 'redux';
import reducerTarjetaReducer from '../Reducers/ReducerAccionesTarjeta';

const rootReducer = combineReducers({
    reducerTarjetaReducer: reducerTarjetaReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;