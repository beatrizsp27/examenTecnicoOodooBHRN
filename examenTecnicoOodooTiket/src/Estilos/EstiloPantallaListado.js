
/**
 * @description Hoja de estilos para la pantalla inicio de sesion 
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    contenidoPantallaListado: {
        flex: 1,
    },
    contenidoTarjetaAgregar: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    elemento: {
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    textInput: {
        paddingLeft: hp("3%"),
        color: '#05375a',
    },
    contenidoElementoTarjeta: {
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        width: wp("90%")
    },
    titulo: {
        fontSize: hp("2%"),
    },
    tituloTexto: {
        fontSize: hp("3.2%"),
        textAlign: "center"
    },
    contenidoTarjeta: {
        backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        width: wp("90%")

    },
    contenidoTarjetaFilaImagen: {
        width: wp("30%")
    },
    contenidoTarjetaFilaDescripcion: {
        width: wp("50%"),
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagen: {
        backgroundColor: 'transparent',
        width: wp("15%"),
        height: hp("9%")
    },
    contenidoEliminar: {
        flexDirection: 'row',
        backgroundColor: 'pink',
        width: wp("50%")
    },
    contenidoEliminarFila1: {
        backgroundColor: 'pink',
        width: wp("30%")
    },
    contenidoEliminarFila2: {
        backgroundColor: 'pink',
        width: wp("20%")
    }
}