/**
 * @description Archivo en donde contendra las constantes de la aplicacion variables que pueden ser cambiantes
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */

const ipServicioUsuarios = 'http://localhost:3000/user';
const ipServicioTikets = 'http://localhost:3000/tickets';
const ipServicioPagos= 'http://localhost:3000/payments';
const ipServicioTipoTarjeta= 'http://localhost:3000/imgTypeCard';


//SE EXPORTAN LAS VARIABLES
const service = {
    ipServicioUsuarios,
    ipServicioTikets,
    ipServicioPagos,
    ipServicioTipoTarjeta,
}

module.exports = service;