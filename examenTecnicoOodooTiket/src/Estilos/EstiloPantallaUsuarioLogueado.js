
/**
 * @description Hoja de estilos para la pantalla principal 
 * @author Beatriz Hernandez <beatriz.hernandez27sp@gmail.com>
 * @version 1.0
 */
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default {
    menuPantallaPrincipal: {
        flex: 1,
        // justifyContent: "center",
        backgroundColor: 'white',
        // alignItem: 'center',
        // alignContent: 'center'
    },
    menuPrincipaTitulo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        height: hp("10%"),
        backgroundColor: 'white',

    },
    menuPrincipaContenido: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
    },
    mainContenido: {
        width: wp('100%'),
        height: hp('100%'),
    },
    titulo: {
        fontSize: hp('3%'),
        fontWeight: '600',
        color: "#3D74B5",
        textAlign: 'center',
    },
    tarjeta: {
        width: wp("90%"),
        height: hp("15%"),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: hp("6%"),
        paddingBottom: 10,
        paddingTop: 10,
        alignSelf: 'center'
    },
    tarjetaTexto: {
        width: wp("90%"),
        height: hp("15%"),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: 'white',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        marginBottom: hp("6%"),
        paddingBottom: 10,
        paddingTop: 10,
      
    },

}