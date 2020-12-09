
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
    contenedorPrincipal: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor: 'transparent',
        alignItem: 'center',
        alignContent: 'center',
        backgroundColor: 'gray'
    },
    encabezado: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: hp("1%"),
        paddingBottom: hp("2"),
        alignItem: 'center',
        alignContent: 'center',
    },
    menuPrincipaloader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    mainContenido: {
        width: wp('90%'),
        height: hp('40%'),
        // backgroundColor: 'blue',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItem: 'center'
    },
    titulo: {
        fontSize: hp('5%'),
        fontWeight: '600',
        color: '#3D74B5',
        textAlign: 'center',
    },
    textInput: {
        paddingLeft: hp("3%"),
        color: '#05375a',
    },
    errorMensaje: {
        color: '#FF0000',
        fontSize: hp("1.8%"),
    },
    contendorBoton:{
        marginTop : hp("5%")
    },
    contendorCajaTexto:{
        marginTop : hp("3.5%")
    }


}