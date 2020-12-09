
import { AGREGAR_TARJETA, ELIMINAR_TARJETA } from '../Acciones/TiposConstantes';

const initialState = {
    listaTarjetas: []
}

const reducerTarjeta = (state = initialState, action) => {
    switch (action.type) {
        case AGREGAR_TARJETA:
            return {
                ...state,
                listaTarjetas: state.listaTarjetas.concat({
                    key: Math.random(),
                    name: action.data
                })
            };
        case ELIMINAR_TARJETA:
            return {
                ...state,
                listaTarjetas: state.listaTarjetas.filter((item) =>
                    item.key !== action.key)
            };
        default:
            return state;
    }
}

export default reducerTarjeta;