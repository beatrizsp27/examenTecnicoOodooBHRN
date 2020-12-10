
/**
 * @description archivo que contiene las acciones de eliminar y actuzliar
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
import { AGREGAR_TARJETA, ELIMINAR_TARJETA } from '../Acciones/TiposConstantes';

const initialState = {
    listaTarjetas: []
}


// {
//     "id": 1,
//     "type": "visa",
//     "img": "imagen visa"
// },
// {
//     "id": 2,
//     "type": "master card",
//     "img": "imagen master card"
// },
// {
//     "id": 3,
//     "type": "amex",
//     "img": "imagen amex"
// },

/**
 * @description funcion reducer que contiene las funciones que se ejecutaran 
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
const reducerTarjetaReducer = (state = initialState, action) => {
    console.log("action.data:  " + action.data)
    console.log("action.data:  " + action.id)


    switch (action.type) {
        case AGREGAR_TARJETA:
            return {
                ...state,
                listaTarjetas: state.listaTarjetas.concat({
                    key: Math.random(),
                    id: Math.random().toString(),
                    type: action.data
                })
            };
        case ELIMINAR_TARJETA:
            return {
                ...state,
                listaTarjetas: state.listaTarjetas.filter((item) =>
                    item.id !== action.id)
            };
        default:
            return state;
    }
}



export default reducerTarjetaReducer;