/**
 * @description Archivo en donde contendra el consumo de servicios REST para el funcionamiento de la aplicación
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
import {
    ipServicioTikets,
    ipServicioPagos,
    ipServicioTipoTarjeta,
} from '../Utilerias';

/**
 * @description Método que obtiene informacion de los tikets
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
const obtenerTiketsUsuario = () =>
    new Promise((resolve, reject) => {
        console.log('url:::: ', ipServicioTikets);
        fetch(ipServicioTikets, {
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



/**
 * @description Método que obtiene informacion para autenticar a un usuario tipo pago
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
const obtenerPagosPorUsuario = () =>
    new Promise((resolve, reject) => {
        console.log('url:::: ', ipServicioPagos);
        fetch(ipServicioPagos, {
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
    

    
/**
 * @description Método que obtiene informacion para autenticar a un usuario tipo pago
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
const obtenerListadoTarjeta = () =>
new Promise((resolve, reject) => {
    console.log('url:::: ', ipServicioTipoTarjeta);
    fetch(ipServicioTipoTarjeta, {
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


const metodos = {
    obtenerTiketsUsuario,
    obtenerListadoTarjeta,
    obtenerPagosPorUsuario,
};

module.exports = metodos;