

/**
 * @description Hoja que contiene las acciones del listado de tikets
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
import { AGREGAR_TARJETA, ELIMINAR_TARJETA } from '../Acciones/TiposConstantes';

/**
 * @description agrega una tarjeta
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
export const agregarTarjeta = (tarjeta) => (
    {
        type: AGREGAR_TARJETA,
        data: tarjeta
    }
);

/**
 * @description elimina una tarjeta
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
export const eliminarTarjeta = (id) => (

    {
        type: ELIMINAR_TARJETA,
        id: id
    }
);