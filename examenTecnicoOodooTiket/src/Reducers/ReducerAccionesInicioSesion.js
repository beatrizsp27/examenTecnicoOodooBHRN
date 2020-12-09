
import { INICIAR_SESION, CERRAR_SESION, RECUPERAR_TOKEN } from '../Acciones/TiposConstantes';


//VALORES INICIALES
export const estadosInicialesLogin = {
    esCargando: true,
    nombreUsuario: null,
    tokenUsuario: null,
};


//FUNCION QUE DECIDE QUE VALOR DARLE AL USUARIO
export const iniciarSesionReducer = (prevState, action) => {
    switch (action.type) {
        case RECUPERAR_TOKEN:
            return {
                ...prevState,
                userToken: action.token,
                esCargando: false,
            };
        case INICIAR_SESION:
            return {
                ...prevState,
                nombreUsuario: action.id,
                tokenUsuario: action.token,
                esCargando: false,

            };
        case CERRAR_SESION:
            return {
                ...prevState,
                nombreUsuario: null,
                tokenUsuario: null,
                esCargando: false,
            };
    };

}