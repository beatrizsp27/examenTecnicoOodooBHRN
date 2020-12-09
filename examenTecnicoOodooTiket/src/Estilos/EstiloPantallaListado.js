
/**
 * @description Hoja de estilos para la pantalla inicio de sesion 
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    contenidoPantallaListado: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    elemento: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    titulo: {
        fontSize: hp("3.2%"),
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
        width: wp("30%")
    },
    imagen: {
        width: wp("10%"),
        height: hp("10%")
    }

}