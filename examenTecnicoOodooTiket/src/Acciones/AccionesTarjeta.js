
import { AGREGAR_TARJETA, ELIMINAR_TARJETA } from '../Acciones/TiposConstantes';

export const agregarTarjeta = (food) => (
    {
        type: AGREGAR_TARJETA,
        data: tarjeta
    }
);

export const eliminarTarjeta = (key) => (
    {
        type: ELIMINAR_TARJETA,
        key: key
    }
);