/**
 * @description Archivo en donde contendra el consumo de servicios REST para el funcionamiento de la aplicación
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
import { ipServicioUsuarios } from '../Utilerias/UtileriasConexion';

/**
 * @description Método que obtiene informacion para autenticar a un usuario
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
const autenticarUsuarios = () =>
    new Promise((resolve, reject) => {
        console.log('url:::: ', ipServicioUsuarios);
        fetch(ipServicioUsuarios, {
            method: 'GET',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => {

                console.log('response:: ', response);
            })
            .then(responseJson => {
                console.log('responseJson: ', responseJson);
                resolve(responseJson)

            })
            .catch(function (error) {
                console.log('Request failed', error);
                reject({
                    mensajeError: 'error'
                });
            });
    });


const methods = {
    autenticarUsuarios,
};

module.exports = methods;